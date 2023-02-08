import '../../css/index.js';

export default {
  title: 'Components/Icon',
  argTypes: {
    icon: { control: 'text', description: 'Icon to display (from iconoir.com)' }
  },
};

const Template = ({ icon }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#f9f9f9' ? 'light' : 'dark'

  return `<div data-theme='${theme}'><div class='iconoir-${icon} icon'></div></div>`
};

export const Default = Template.bind({});
Default.args = { icon: 'eye-empty' };

export const Search = Template.bind({});
Search.args = { icon: 'search' };

export const Twitter = Template.bind({});
Twitter.args = { icon: 'twitter' };
