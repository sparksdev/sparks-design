import '../../css/index.js';

export default {
  title: 'Components/Input-Checkbox',
  argTypes: {
    text: { control: 'text', description: 'Text to display' },
    type: {
      control: { type: 'select' },
      options: ['default', 'checked'],
      description: 'Type of Checkbox to use'
    }
  },
};

const Template = ({ text, type }) => {
  if (type === 'default') return `<label ><input type='checkbox' />${text}</label>`
  if (type === 'checked') return `<label class='form--label'><input type='checkbox' class='input--checkbox' checked />${text}</label>`
};

export const Default = Template.bind({});
Default.args = {
  text: 'Checkbox',
  type: 'default'
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  text: 'Unchecked',
  type: 'default'
};
export const Checked = Template.bind({});
Checked.args = {
  text: 'Checked',
  type: 'checked'
};

