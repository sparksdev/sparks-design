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

const Template = ({ text, type }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#f9f9f9' ? 'light' : 'dark'
  const active = type === 'active' ? ' tags-active' : ''

  return `<div data-theme='${theme}'><div class='tags${active}'>${text}</div></div>`
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
