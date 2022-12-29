import '../../css/index.js';

export default {
  title: 'Components/Heading',
  argTypes: {
    text: { control: 'text' },
    type: { 
      control: { type: 'select' },
      options: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ] 
    }
  },
};

const Template = ({ text, type }) => {
  if(type === 'h1') return `<h1>${text}</h1>`
  if(type === 'h2') return `<h2>${text}</h2>`
  if(type === 'h3') return `<h3>${text}</h3>`
  if(type === 'h4') return `<h4>${text}</h4>`
  if(type === 'h5') return `<h5>${text}</h5>`
  if(type === 'h6') return `<h6>${text}</h6>`
};

export const Primary = Template.bind({});

Primary.args = {
  text: 'Heading',
  type: 'h1'
};