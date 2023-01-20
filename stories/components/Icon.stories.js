import '../../css/index.js';

export default {
  title: 'Components/Icon',
  argTypes: {
    icon: { control: 'text', description: 'Icon to display (from iconoir.com)' }
  },
};

const Template = ({ icon }) => {
  return `<div class='iconoir-${icon} icon'></div>`
};

export const Default = Template.bind({});
Default.args = { icon: 'eye-empty' };

export const Search = Template.bind({});
Search.args = { icon: 'search' };

export const Twitter = Template.bind({});
Twitter.args = { icon: 'twitter' };
