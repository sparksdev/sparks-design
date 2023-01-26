import '../../css/index.js';

export default {
  title: 'Components/Input-Password',
  argTypes: {
    label: { control: 'label', description: 'Label to display' },
    text: { control: 'text', description: 'Text to display' },
    type: {
      control: { type: 'select' },
      options: ['default', 'active', 'show', 'error'],
      description: 'Type of Input Field to use'
    }
  },
};

const Template = ({ label, text, type }) => {
  if (type === 'default') return `
    <label class='form--label'>
      ${label}
      <input type='password' class='input--password input--icon-right' placeholder='Enter your password' value='${text}' />
      <i class="iconoir-eye-empty icon input--icon" ></i>
    </label>
  `
  if (type === 'active') return `
    <label class='form--label'>
      ${label}
      <input type='password' class='input--password input--icon-right' placeholder='Enter your password' value='${text}' autofocus />
      <i class="iconoir-eye-empty icon input--icon" ></i>
    </label>
  `
  if (type === 'show') return `
    <label class='form--label'>
      ${label}
      <input type='text' class='input--text input--icon-right' placeholder='Enter your password' value='${text}' />
      <i class="iconoir-eye-off icon input--icon" ></i>
    </label>
  `
  if (type === 'error') return `
    <label class='form--label form--label-error'>
      ${label}
      <input type='password' class='input--password input--icon-right input--error' placeholder='Enter your password' value='${text}'/>
      <i class="iconoir-eye-empty icon input--icon" ></i>
      <div class='input--error-message'>
        Weak. Must contain at least 8 characters
      </div>
    </label>`
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

export const Active = Template.bind({});
Active.args = {
  label: 'PASSWORD',
  text: 'mypassword123',
  type: 'active'
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
