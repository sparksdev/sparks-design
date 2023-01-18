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

const Template = ({ text, type }) => {
  if (type === 'active') return `<a class='link'>${text}</a>`
  if (type === 'disabled') return `<a class='link link--disabled'>${text}</a>`
  if (type === 'danger') return `<a class='link link--danger'>${text}</a>`
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
