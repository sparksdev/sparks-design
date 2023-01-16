import '../../css/index.js';

export default {
  title: 'Components/Title',
  argTypes: {
    text: { control: 'text' },
    fontSize: { 
      control: { type: 'select' },
      options: [ 'text-1', 'text-2', 'text-3', 'text-4'] 
    },
    fontWeight: { 
      control: { type: 'select' },
      options: [ 'font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black'] 
    }
  },
};

const TitleTemplate = ({ text, fontWeight, fontSize }) => {

  
  const title = document.createElement('div');
  title.innerText = text;
  
  title.className = [fontWeight, fontSize].join(' ');
  
  return title;
};

export const Title = TitleTemplate.bind({});

Title.args = {
  text: 'Title',
  fontWeight: 'font-normal',
  fontSize: 'text-1'
};