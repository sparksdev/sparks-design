import '../../css/index.js';


export default {
  title: 'Components/Input-Search',
  argTypes: {
    text: { control: 'text', description: 'Text to display' },
    type: {
      control: { type: 'select' },
      options: ['default', 'active', 'error'],
      description: 'Type of Input Field to use'
    }
  },
};

const Template = ({ text, type }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#151515' ? 'dark' : 'light'
  const active = type === 'active' ? ' autofocus' : ''

  return `<div data-theme='${theme}'>
  <label class='form--label'>
    <input type='text' class='input--text input--icon-left' placeholder='Enter your search' value='${text}'${active} />
    <i class="iconoir-search icon input--icon" ></i>
  </label>
</div>`
}

export const Default = Template.bind({});
Default.args = {
  text: '',
  type: 'default'
};

export const Inactive = Template.bind({});
Inactive.args = {
  text: '',
  type: 'default'
};

export const Active = Template.bind({});
Active.args = {
  text: 'Jane Smith',
  type: 'active'
};
