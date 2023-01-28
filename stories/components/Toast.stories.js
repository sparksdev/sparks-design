import '../../css/index.js';

export default {
  title: 'Components/Toast',
  argTypes: {
    text: { control: 'text', description: 'Text to display' }
  },
};

const Template = ({ text }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#151515' ? 'dark' : 'light'

  return `<div data-theme='${theme}'><div class='toast'>${text}</div></div>`
};

export const Default = Template.bind({});
Default.args = { text: 'Single line toast message' };

export const Short = Template.bind({});
Short.args = { text: 'Single line toast message' };

export const Long = Template.bind({});
Long.args = { text: 'A very long multi line toast message that should probably be simpler' };
