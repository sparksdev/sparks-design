import '../../css/index.js';
import logo from '../../assets/logos/logo.svg';
import logoFooter from '../../assets/logos/logo-footer.svg';

export default {
  title: 'Components/Footer',
};

const Template = () => {
  return `
    <div class='footer'>
      <div class='footer--header'>
        <img class='icon' src='${logo}' />
        <h3>SPARKS</h3>
      </div>
      <div class='footer--links'>
        <div class='footer--link'>
          <img class='icon' src='${logoFooter}' />
          Profile
        </div>
        <div class='footer--link'>
          <div class='iconoir-twitter icon'></div>
          <span>Twitter</span>
        </div>
        <div class='footer--link'>
          <div class='iconoir-discord icon'></div>
          Discord
        </div>
        <div class='footer--link'>
          <div class='iconoir-telegram icon'></div>
          Telegram
        </div>
        <div class='footer--link'>
          <div class='iconoir-medium icon'></div>
          Medium
        </div>
        <div class='footer--link'>
          <div class='iconoir-github icon'></div>
          GitHub
        </div>
        <div class='footer--link'>
          <div class='iconoir-mail icon'></div>
          Email
        </div>
      </div>
    </div>
  `
};

export const Default = Template.bind({});
