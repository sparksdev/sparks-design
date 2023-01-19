import '../../css/index.js';

export default {
  title: 'Components/Input-Radio',
  argTypes: {
    text: { control: 'text', description: 'Text to display' },
    type: {
      control: { type: 'select' },
      options: ['default', 'checked'],
      description: 'Type of Radio to use'
    }
  },
};

const Template = ({ text, type }) => {
  if (type === 'default') return `<label class='form--label'><input type='radio' class='input--radio' />${text}</label>`
  if (type === 'checked') return `<label class='form--label'><input type='radio' class='input--radio' checked />${text}</label>`
};

export const Default = Template.bind({});
Default.args = {
  text: 'Radio',
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
