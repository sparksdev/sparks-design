import '../../css/index.js';

export default {
  title: 'Components/Heading',
  argTypes: {
    text: { control: 'text' },
    type: { 
      control: { type: 'select' },
      options: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ] 
    },
    fontWeight: { 
      control: { type: 'select' },
      options: [ 'font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black'] 
    }
  },
};

const HeadingTemplate = ({ text, type, fontWeight }) => {

  
  const heading = document.createElement(type);
  heading.innerText = text;
  
  const font_weight = fontWeight; 
  heading.className = [font_weight].join(' ');
  
  return heading;
};

export const Heading = HeadingTemplate.bind({});

Heading.args = {
  text: 'Typography',
  type: 'h1',
  fontWeight: 'font-normal',
};