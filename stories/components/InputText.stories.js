import '../../css/index.js';

export default {
  title: 'Components/Input-Text',
  argTypes: {
    label: { control: 'label', description: 'Label to display' },
    text: { control: 'text', description: 'Text to display' },
    type: {
      control: { type: 'select' },
      options: ['default', 'active'],
      description: 'Type of Input Field to use'
    }
  },
};

const Template = ({ label, text, type }) => {
  if (type === 'default') return `<label class='form--label'>${label}<input type='text' class='input--text' placeholder='Enter your name' value='${text}' /></label>`
  if (type === 'active') return `<label class='form--label'>${label}<input type='text' class='input--text' placeholder='Enter your name' value='${text}' autofocus /></label>`
};

export const Default = Template.bind({});
Default.args = {
  label: 'Input Field',
  text: '',
  type: 'default'
};

export const Inactive = Template.bind({});
Inactive.args = {
  label: 'Inactive Input Field',
  text: '',
  type: 'default'
};
export const Active = Template.bind({});
Active.args = {
  label: 'Active Input Field',
  text: 'Jane Smith',
  type: 'active'
};
