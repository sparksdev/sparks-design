import '../../css/index.js';

export default {
  title: 'Components/Select',
  argTypes: {
    label: { control: 'label', description: 'Label to display' },
    option: {
      control: { type: 'select' },
      options: ['', 'california', 'new york', 'washington'],
      description: 'Item to select'
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'active', 'error'],
      description: 'Type of Input Field to use'
    }
  },
};

const Template = ({ label, type }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#151515' ? 'dark' : 'light'

  const selected = type === 'selected' ? ' selected' : ''
  const errorMessage = type === 'error' ? `
  <div class='input--error-message'>Please select an option</div>` : ''
  const labelClasses = type === 'error' ? ' form--label-error' : ''
  const inputClasses = type === 'error' ? ' input--error' : ''

  return `<div data-theme='${theme}'>
  <label class='form--label form--label-select${labelClasses}'>
    ${label}
    <select class='select input--icon-right${inputClasses}'>
      <option class='select--option' value=''>-- Please select an option --</option>
      <option class='select--option' value='california'>California</option>
      <option class='select--option' value='new york' ${selected}>New York</option>
      <option class='select--option' value='washington'>Washington</option>
    </select>
    <i class="iconoir-nav-arrow-down icon input--icon" ></i>${errorMessage}
  </label>
</div>`
};

export const Default = Template.bind({});
Default.args = {
  label: 'STATE',
  text: '',
  type: 'default'
};

export const Inactive = Template.bind({});
Inactive.args = {
  label: 'STATE',
  text: '',
  type: 'default'
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'STATE',
  text: '',
  type: 'selected'
};

export const Error = Template.bind({});
Error.args = {
  label: 'SOME FIELD',
  text: '',
  type: 'error'
};
