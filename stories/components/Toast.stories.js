import '../../css/index.js';

export default {
  title: 'Components/Toast',
  argTypes: {
    text: { control: 'text', description: 'Text to display' }
  },
};

const Template = ({ text }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#f9f9f9' ? 'light' : 'dark'

  return `<div data-theme='${theme}'><div class='toast'>${text}</div></div>`
};

export const Default = Template.bind({});
Default.args = { text: 'Single line toast message' };

export const Short = Template.bind({});
Short.args = { text: 'Single line toast message' };

export const Long = Template.bind({});
Long.args = { text: 'A very long multi line toast message that should probably be simpler' };
