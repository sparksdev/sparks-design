import '../../css/index.js';
import { withColorScheme } from '../../css/index.js';

export default {
  title: 'Components/Paragraph',
  argTypes: {
    text: { control: 'text', description: 'Text to display' }
  },
};

const Template = ({ text }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#151515' ? 'dark' : 'light'

  return `<div data-theme='${theme}'>
  <p>${text}</p>
</div>`
};

export const Default = Template.bind({});

Default.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ligula sed mauris gravida dictum dapibus vel nisi. Curabitur facilisis lacus eu odio mattis, ut dapibus mi mattis. Nunc ex lorem, pulvinar id nisi eu, laoreet suscipit risus. Cras eget cursus odio. Aenean dapibus venenatis tortor sit amet varius. Phasellus vulputate dolor orci, eu vulputate metus tristique vel. Aliquam nulla felis, vehicula vel nisl id, scelerisque tempus quam. Vivamus laoreet neque laoreet libero volutpat, non posuere orci facilisis. Vestibulum vitae arcu in orci iaculis facilisis. Morbi sed nisi erat. Nullam in nisl volutpat est tristique bibendum. Aenean id ex convallis, feugiat quam condimentum, auctor nunc.'
};
