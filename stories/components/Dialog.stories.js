import '../../css/index.js';

export default {
  title: 'Components/Dialog',
  argTypes: {
    title: { control: 'title', description: 'Title to display' },
    text: { control: 'text', description: 'Text to display' }
  },
};

const Template = ({ title, text }) => {
  return `
    <div class='dialog'>
      <h5><b>${title}</b></h5>
      <p>${text}</p>
      <button >Confirm</button>
      <button class='button--secondary'>Cancel</button>
    </div>
  `
};

export const Default = Template.bind({});
Default.args = {
  title: 'Very long dialog title to test spacing lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie mauris elit. Vivamus at sagittis metus. Praesent vel consectetur risus. Morbi gravida porttito'
};
