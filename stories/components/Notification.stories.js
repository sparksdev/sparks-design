import '../../css/index.js';

export default {
  title: 'Components/Notification',
  argTypes: {
    state: { control: 'select', options: ['unread', 'read'], description: 'State of the notification' },
    title: { control: 'text', description: 'Title to display' },
    message: { control: 'text', description: 'Message to display' },
    time: { control: 'text', description: 'Time to display' }
  },
};

const Template = ({ state, title, message, time }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#151515' ? 'dark' : 'light'
  const unread = state === 'unread' ? ' notification--unread' : ''

  return `<div data-theme='${theme}'
  <div class='notification${unread}'>
    <div class='notification--title'>${title}</div>
    <div class='notification--message'>${message}</div>
    <div class='notification--time'>${time}</div>
  </div>
</div>`
};

export const Default = Template.bind({});
Default.args = {
  state: 'unread',
  title: 'Notification title',
  message: 'Notification message that supports multi-line messages or data',
  time: '1/16/23 • 9:41 AM'
};

export const Read = Template.bind({});
Read.args = {
  state: 'read',
  title: 'Notification title',
  message: 'Notification message that supports multi-line messages or data',
  time: '1/16/23 • 9:41 AM'
};

export const Unread = Template.bind({});
Unread.args = {
  state: 'unread',
  title: 'Notification title',
  message: 'Notification message that supports multi-line messages or data',
  time: '1/16/23 • 9:41 AM'
};
