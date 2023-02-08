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

const Template = ({ text, type }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#f9f9f9' ? 'light' : 'dark'
  const checked = type === 'checked' ? 'checked ' : ''

  return  `<div data-theme='${theme}'>
  <label class='form--label-inline'>
    <input type='checkbox' class='input--checkbox' ${checked}/>
    ${text}
  </label>
</div>`
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

