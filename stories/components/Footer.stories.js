import '../../css/index.js';
import logoLight from '../../assets/logos/logo-small.svg';
import logoDark from '../../assets/logos/logo-small-darkMode.svg';
import logoFooterLight from '../../assets/logos/logo-gray-600.svg';
import logoFooterDark from '../../assets/logos/logo-gray-600-darkMode.svg';

export default {
  title: 'Components/Footer',
  argTypes: {
    text: { control: 'text', description: 'Text to display' },
  }
};

const Template = (text, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#151515' ? 'dark' : 'light'
  const logo = backgrounds?.value === '#151515' ? logoDark : logoLight
  const logoFooter = backgrounds?.value === '#151515' ? logoFooterDark : logoFooterLight

  return `<div data-theme='${theme}'>
  <div class='footer'>
    <div class='footer--header'>
      <img class='icon logo--small' src='${logo}' />
    </div>
    <div class='footer--links'>
      <a class='footer--link' href='https://sparks.dev/' targe='_blank'>
        <img class='icon' src='${logoFooter}' />
        Profile
      </a>
      <a class='footer--link' href='https://twitter.com/sparksdev_' target='_blank'>
        <div class='iconoir-twitter icon'></div>
        <span>Twitter</span>
      </a>
      <a class='footer--link'>
        <div class='iconoir-discord icon'></div>
        Discord
      </a>
      <a class='footer--link'>
        <div class='iconoir-telegram icon'></div>
        Telegram
      </a>
      <a class='footer--link'>
        <div class='iconoir-medium icon'></div>
        Medium
      </a>
      <a class='footer--link'>
        <div class='iconoir-github icon'></div>
        GitHub
      </a>
      <a class='footer--link'>
        <div class='iconoir-mail icon'></div>
        Email
      </a>
    </div>
  </div>
</div>`
};

export const Default = Template.bind({});
