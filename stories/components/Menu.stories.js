import '../../css/index.js';
import avatar from '../../assets/utils/avatar.png';

export default {
  title: 'Components/Menu',
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['closed', 'open'],
      description: 'State of the Menu'
    },
    content: {
      control: { type: 'select' },
      options: ['empty', 'selected'],
      description: 'State of the Selection'
    }
  }
};

const Template = ({ state, content }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#151515' ? 'dark' : 'light'

  const menuTitle = content === 'selected' ? `
    <div class='avatar'><img src=${avatar} /></div>
    <div class='menu--header-title'>Notifications</div>` : ''

    const menuContent = state === 'open' ? `
    <ul class='menu--content'>
      <a href='#'><li>Dashboard</li></a>
      <a href='#'><li>Account</li></a>
      <a href='#'><li>Marketplace</li></a>
    </ul>` : ''

  return `<div data-theme='${theme}'>
  <div class='menu'>
    <div class='menu--header'>${menuTitle}
      <div class='sandwich'>
        <input type="checkbox" /><span></span><span></span><span></span>
      </div>
    </div>${menuContent}
  </div>
</div>`
};

export const Default = Template.bind({});
Default.args = { state: 'closed', content: 'empty' };

export const Closed = Template.bind({});
Closed.args = { state: 'closed', content: 'selected' };

export const Open = Template.bind({});
Open.args = { state: 'open', content: 'empty' };

export const OpenSelected = Template.bind({});
OpenSelected.args = { state: 'open', content: 'selected' };
