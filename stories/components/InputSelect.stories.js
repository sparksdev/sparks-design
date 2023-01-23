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
    <label class='form--label'>
      ${label}
      <select class='select'>
        <option class='select--option' value=''>-- Please select an option --</option>
        <option class='select--option' value='california'>California</option>
        <option class='select--option' value='new york'>New York</option>
        <option class='select--option' value='washington'>Washington</option>
      </select>
    </label>
    `
    if (type === 'selected') return `
      <label class='form--label'>
        ${label}
        <select class='select' autofocus>
          <option class='select--option' value=''>-- Please select an option --</option>
          <option class='select--option' value='california'>California</option>
          <option class='select--option' value='new york' selected>New York</option>
          <option class='select--option' value='washington'>Washington</option>
        </select>
      </label>
    `
    if (type === 'error') return `
    <label class='form--label'>
      ${label}
      <select class='select input--error'>
        <option class='select--option' value=''>-- Please select an option --</option>
        <option class='select--option' value='california'>California</option>
        <option class='select--option' value='new york'>New York</option>
        <option class='select--option' value='washington'>Washington</option>
      </select>
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
