import '../../css/index.js';

export default {
  title: 'Components/Card',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['closed', 'open'],
      description: 'State of the Card'
    },
    title: { control: 'text', description: 'Title to display' },
  },
};

const Template = ({ type, title }, { globals: { backgrounds } }) => {

  const theme = backgrounds?.value === '#f9f9f9' ? 'light' : 'dark'
  const details = type === 'closed' ? '' : `
    <div class='card--item'>
      <div class='card--item-key'>Handle</div>
      <div class='card--item-value'>sparksdev</div>
    </div>
    <div class='card--item'>
      <div class='card--item-key'>Id</div>
      <div class='card--item-value'>213123781274</div>
    </div>
    <div class='card--item'>
      <div class='card--item-key'>Followers</div>
      <div class='card--item-value'>612</div>
    </div>
    <div class='card--item'>
      <div class='card--item-key'>Following</div>
      <div class='card--item-value'>264</div>
    </div>
    <div class='card--item'>
      <div class='card--item-key'>Lists</div>
      <div class='card--item-value'>4</div>
    </div>
    <div class='card--item'>
      <div class='card--item-key'>Some Attribute</div>
      <div class='card--item-value'>with a very long value to test a multiline value, which can be contracted with ellipsis later</div>
    </div>
    <div class='card--footer'>
      <div class='tags'>Tag name</div>
    </div>`

  return `<div data-theme='${theme}'>
  <div class='card'>
    <h6 class='card-header'><b>${title}</b></h6>${details}
</div>`
};

export const Default = Template.bind({});
Default.args = {
  type: 'closed',
  title: 'Twitter',
};

export const Closed = Template.bind({});
Closed.args = {
  type: 'closed',
  title: 'Twitter',
};

export const Open = Template.bind({});
Open.args = {
  type: 'open',
  title: 'Twitter',
};
