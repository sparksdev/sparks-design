import { breakStatement } from '@babel/types';
import '../../css/index.js';

export default {
  title: 'Components/Input-Password',
  argTypes: {
    label: { control: 'label', description: 'Label to display' },
    text: { control: 'text', description: 'Text to display' },
    type: {
      control: { type: 'select' },
      options: ['default', 'show', 'error'],
      description: 'Type of Input Field to use'
    }
  },
};

const Template = ({ label, text, type }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#151515' ? 'dark' : 'light'

  let labelClasses = 'form--label'
  let inputClasses = 'input--password input--icon-right'
  let icon = 'eye-empty'
  let inputType = 'password'
  let errorMessage = ''

  switch (type) {
    case 'show':
      inputType = 'text'
      inputClasses = 'input--text input--icon-right'
      icon = 'eye-off'
      break
    case 'error':
      labelClasses += ' form--label-error'
      inputClasses += ' input--error'
      errorMessage = "<div class='input--error-message'>Weak. Must contain at least 8 characters</div>"
      break
    default:
      break
  }

  return `<div data-theme='${theme}'>
  <label class='${labelClasses}'>
    ${label}
    <input type='${inputType}' class='${inputClasses}' placeholder='Enter your password' value='${text}' />
    <i class="iconoir-${icon} icon input--icon" ></i>
    ${errorMessage}
  </label>
</div>`
};

export const Default = Template.bind({});
Default.args = {
  label: 'Password Input Field',
  text: '',
  type: 'default'
};

export const Inactive = Template.bind({});
Inactive.args = {
  label: 'PASSWORD',
  text: '',
  type: 'default'
};

export const Shown = Template.bind({});
Shown.args = {
  label: 'PASSWORD',
  text: 'window monitor ceiling keyboard',
  type: 'show'
};

export const Error = Template.bind({});
Error.args = {
  label: 'PASSWORD',
  text: '123',
  type: 'error'
};
