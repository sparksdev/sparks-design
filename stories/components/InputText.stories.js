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

const Template = ({ label, text, type }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#151515' ? 'dark' : 'light'

  const active = type === 'active' ? ' autofocus' : ''
  const labelClasses = type === 'error' ? ' form--label-error' : ''
  const inputClasses = type === 'error' ? ' input--error' : ''
  const errorMessage = type === 'error' ? `
    <div class='input--error-message'>
      Not a valid Zip Code
    </div>` : ''

  return `<div data-theme='${theme}'>
  <label class='form--label${labelClasses}'>
    ${label}
    <input type='text' class='input--text${inputClasses}' placeholder='Enter your name' value='${text}'${active}/>${errorMessage}
  </label>
</div>`
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
