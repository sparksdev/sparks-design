import '../../css/index.js';

export default {
  title: 'Components/Heading',
  argTypes: {
    text: { control: 'text', description: 'Text to display' },
    type: { 
      control: { type: 'select' },
      options: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ],
      description: 'Type of Heading'
    }
  },
};

const Template = ({ text, type }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#f9f9f9' ? 'light' : 'dark'

  return `<div data-theme=${theme}><${type}>${text}</${type}></div>`
};

export const Default = Template.bind({});

Default.args = {
  text: 'Heading',
  type: 'h1'
};

export const H1 = Template.bind({});
H1.args = {
  text: 'Heading 1',
  type: 'h1'
}
export const H2 = Template.bind({});
H2.args = {
  text: 'Heading 2',
  type: 'h2'
}
export const H3 = Template.bind({});
H3.args = {
  text: 'Heading 3',
  type: 'h3'
}
export const H4 = Template.bind({});
H4.args = {
  text: 'Heading 4',
  type: 'h4'
}
export const H5 = Template.bind({});
H5.args = {
  text: 'Heading 5',
  type: 'h5'
}
export const H6 = Template.bind({});
H6.args = {
  text: 'Heading 6',
  type: 'h6'
}
