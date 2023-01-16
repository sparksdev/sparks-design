import '../../css/index.js';

export default {
  title: 'Components/Paragraph',
  argTypes: {
    text: { control: 'text' },
    fontSize: { 
      control: { type: 'select' },
      options: [ 'text-5', 'text-6'] 
    },
    fontWeight: { 
      control: { type: 'select' },
      options: [ 'font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black'] 
    }
  },
};

const ParagraphTemplate = ({ text, fontWeight, fontSize }) => {

  
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  
  paragraph.className = [fontWeight, fontSize].join(' ');
  
  return paragraph;
};

export const Paragraph = ParagraphTemplate.bind({});

Paragraph.args = {
  text: 'Paragraph',
  fontWeight: 'font-normal',
  fontSize: 'text-5'
};