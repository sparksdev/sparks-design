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

const Template = ({ label, text, type }) => {
  if (type === 'default') return `
    <label class='form--label form--label-select'>
      ${label}
      <select class='select input--icon-right'>
        <option class='select--option' value=''>-- Please select an option --</option>
        <option class='select--option' value='california'>California</option>
        <option class='select--option' value='new york'>New York</option>
        <option class='select--option' value='washington'>Washington</option>
      </select>
      <i class="iconoir-nav-arrow-down icon input--icon" ></i>
    </label>
    `
    if (type === 'selected') return `
      <label class='form--label form--label-select'>
        ${label}
        <select class='select input--icon-right' autofocus>
          <option class='select--option' value=''>-- Please select an option --</option>
          <option class='select--option' value='california'>California</option>
          <option class='select--option' value='new york' selected>New York</option>
          <option class='select--option' value='washington'>Washington</option>
        </select>
        <i class="iconoir-nav-arrow-down icon input--icon" ></i>
        </label>
    `
    if (type === 'error') return `
    <label class='form--label form--label-select form--label-error'>
      ${label}
      <select class='select input--icon-right input--error'>
        <option class='select--option' value=''>-- Please select an option --</option>
        <option class='select--option' value='california'>California</option>
        <option class='select--option' value='new york'>New York</option>
        <option class='select--option' value='washington'>Washington</option>
      </select>
      <i class="iconoir-nav-arrow-down icon input--icon" ></i>
      <div class='input--error-message'>Please select an option</div>
    </label>
  `
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
