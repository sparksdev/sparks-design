import '../../css/index.js';

export default {
  title: 'Components/Label',
  argTypes: {
    text: { control: 'text' },
    fontSize: { 
      control: { type: 'select' },
      options: [ 'text-6', 'text-7'] 
    },
    fontWeight: { 
      control: { type: 'select' },
      options: [ 'font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black'] 
    }
  },
};

const LabelTemplate = ({ text, fontWeight, fontSize }) => {

  
  const label = document.createElement('label');
  label.innerText = text;
  
  label.className = [fontWeight, fontSize].join(' ');
  
  return label;
};

export const Label = LabelTemplate.bind({});

Label.args = {
  text: 'Label',
  fontWeight: 'font-normal',
  fontSize: 'text-6'
};