import '../../css/index.js';

export default {
  title: 'Components/Code',
  argTypes: {
    text: { control: 'text', description: 'Text to display' },
    type: {
      control: { type: 'select' },
      options: ['block', 'inline'],
      description: 'Type of Code to use'
    }
  },
};

const Template = ({ text, type }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#f9f9f9' ? 'light' : 'dark'

  if (type === 'inline') return `<div data-theme='${theme}'><code>${text}</code></div>`
  if (type === 'block') return `<div data-theme='${theme}'><pre><code>${text}</code></pre></div>`
};

export const Default = Template.bind({});
Default.args = {
  text: 'bool public boo = true;',
  type: 'inline'
};

export const Block = Template.bind({});
Block.args = {
  text:
    `contract Primitives {
    // Example comment
    bool public boo = true;
    bool public defaultBoo;
 
    uint public defaultUint;
    int public defaultInt;
    int public minInt = type(int).min;
 }`,
  type: 'block'
}

export const Inline = Template.bind({});
Inline.args = {
  text: 'bool public boo = true;',
  type: 'inline'
};
