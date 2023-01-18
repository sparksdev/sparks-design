import '../../css/index.js';

export default {
  title: 'Components/Tag',
  argTypes: {
    text: { control: 'text', description: 'Text to display' },
    type: {
      control: { type: 'select' },
      options: ['default', 'active'],
      description: 'Type of Tag to use'
    }
  },
};

const Template = ({ text, type }) => {
  if (type === 'default') return `<div class='tags'>${text}</div>`
  if (type === 'active') return `<div class='tags tags-active'>${text}</div>`
};

export const Default = Template.bind({});
Default.args = {
  text: 'Attestations',
  type: 'default'
};

export const Inactive = Template.bind({});
Inactive.args = {
  text: 'Attestations',
  type: 'default'
};
export const Active = Template.bind({});
Active.args = {
  text: 'Attestations',
  type: 'active'
};
