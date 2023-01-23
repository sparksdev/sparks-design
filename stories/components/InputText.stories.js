import '../../css/index.js';

export default {
  title: 'Components/Input-Text',
  argTypes: {
    label: { control: 'label', description: 'Label to display' },
    text: { control: 'text', description: 'Text to display' },
    type: {
      control: { type: 'select' },
      options: ['default', 'active', 'error'],
      description: 'Type of Input Field to use'
    }
  },
};

const Template = ({ label, text, type }) => {
  if (type === 'default') return `
    <label class='form--label'>
      ${label}
      <input type='text' class='input--text' placeholder='Enter your name' value='${text}' />
    </label>
  `
  if (type === 'active') return `
    <label class='form--label'>
      ${label}
      <input type='text' class='input--text' placeholder='Enter your name' value='${text}' autofocus />
    </label>
  `
  if (type === 'error') return `
    <label class='form--label'>
      ${label}
      <input type='text' class='input--text input--error' placeholder='Enter your name' value='${text}'/>
      <div class='input--error-message'>
        Not a valid Zip Code
      </div>
    </label>`
};

export const Default = Template.bind({});
Default.args = {
  label: 'Input Field',
  text: '',
  type: 'default'
};

export const Inactive = Template.bind({});
Inactive.args = {
  label: 'NAME',
  text: '',
  type: 'default'
};

export const Active = Template.bind({});
Active.args = {
  label: 'NAME',
  text: 'Jane Smith',
  type: 'active'
};

export const Error = Template.bind({});
Error.args = {
  label: 'ZIP CODE',
  text: '123',
  type: 'error'
};
