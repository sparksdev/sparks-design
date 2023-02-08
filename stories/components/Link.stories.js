import '../../css/index.js';

export default {
  title: 'Components/Link',
  argTypes: {
    text: { control: 'text', description: 'Text to display' },
    type: {
      control: { type: 'select' },
      options: ['active', 'disabled', 'destructive'],
      description: 'Type of Link to use'
    }
  },
};

const Template = ({ text, type }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#f9f9f9' ? 'light' : 'dark'

  const linkClass = type === 'disabled' ? ' link--disabled'
                  : type === 'danger' ? ' link--danger' : ''

  return `<div data-theme='${theme}'><a class='link${linkClass}'>${text}</a></div>`
};

export const Default = Template.bind({});
Default.args = {
  text: 'example link',
  type: 'active'
};

export const Active = Template.bind({});
Active.args = {
  text: 'example link',
  type: 'active'
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'example link',
  type: 'disabled'
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'example link',
  type: 'danger'
};
