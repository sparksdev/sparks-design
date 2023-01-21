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

const Template = ({ state, content }) => {
  if (state === 'closed' && content === 'empty') return `
    <div class='menu'>
      <div class='menu--header'>
        <div class='sandwich'><input type="checkbox" /><span></span><span></span><span></span></div>
      </div>
    </div>
  `
  if (state === 'closed' && content === 'selected') return `
    <div class='menu'>
      <div class='menu--header'>
        <div class='avatar'><img src=${avatar} /></div>
        <div class='menu--header-title'>Notifications</div>
        <div class='sandwich'><input type="checkbox" /><span></span><span></span><span></span></div>
      </div>
    </div>
  `
  if (state === 'open' && content === 'empty') return `
    <div class='menu'>
      <div class='menu--header'>
        <div class='sandwich'><input type="checkbox" /><span></span><span></span><span></span></div>
      </div>
      <ul class='menu--content'>
        <a href='#'><li>Dashboard</li></a>
        <a href='#'><li>Account</li></a>
        <a href='#'><li>Marketplace</li></a>
      </ul>
    </div>
  `
  if (state === 'open' && content === 'selected') return `
    <div class='menu'>
      <div class='menu--header'>
        <div class='avatar'><img src=${avatar} /></div>
        <div class='menu--header-title'>Notifications</div>
        <div class='sandwich'><input type="checkbox" /><span></span><span></span><span></span></div>
      </div>
      <ul class='menu--content'>
        <a href='#'><li>Dashboard</li></a>
        <a href='#'><li>Account</li></a>
        <a href='#'><li>Marketplace</li></a>
      </ul>
    </div>
  `
};

export const Default = Template.bind({});
Default.args = { state: 'closed', content: 'empty' };

export const Closed = Template.bind({});
Closed.args = { state: 'closed', content: 'selected' };

export const Open = Template.bind({});
Open.args = { state: 'open', content: 'empty' };

export const OpenSelected = Template.bind({});
OpenSelected.args = { state: 'open', content: 'selected' };
