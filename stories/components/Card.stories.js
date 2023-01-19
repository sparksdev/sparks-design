import '../../css/index.js';

export default {
  title: 'Components/Card',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['closed', 'open'],
      description: 'State of the Card'
    },
    title: { control: 'title', description: 'Title to display' },
    key1: { control: 'key1', description: 'Attribute Name to display' },
    value1: { control: 'value1', description: 'Attribute Value to display' },
    key2: { control: 'key2', description: 'Attribute Name to display' },
    value2: { control: 'value2', description: 'Attribute Value to display' },
    key3: { control: 'key3', description: 'Attribute Name to display' },
    value3: { control: 'value3', description: 'Attribute Value to display' },
    key4: { control: 'key4', description: 'Attribute Name to display' },
    value4: { control: 'value4', description: 'Attribute Value to display' },
    key5: { control: 'key5', description: 'Attribute Name to display' },
    value5: { control: 'value5', description: 'Attribute Value to display' },
    key6: { control: 'key6', description: 'Attribute Name to display' },
    value6: { control: 'value6', description: 'Attribute Value to display' }
  },
};

const Template = ({ type, title, key1, value1, key2, value2, key3, value3, key4, value4, key5, value5, key6, value6 }) => {
  if (type === 'closed') return `<div class='card'><h6><b>${title}</b></h5></div>`
  if (type === 'open') return `
    <div class='card'>
      <h6 class='card-header'><b>${title}</b></h5>
      <div class='card--item'>
        <div class='card--item-key'>${key1}</div>
        <div class='card--item-value'>${value1}</div>
      </div>
      <div class='card--item'>
        <div class='card--item-key'>${key2}</div>
        <div class='card--item-value'>${value2}</div>
      </div>
      <div class='card--item'>
        <div class='card--item-key'>${key3}</div>
        <div class='card--item-value'>${value3}</div>
      </div>
      <div class='card--item'>
        <div class='card--item-key'>${key4}</div>
        <div class='card--item-value'>${value4}</div>
      </div>
      <div class='card--item'>
        <div class='card--item-key'>${key5}</div>
        <div class='card--item-value'>${value5}</div>
      </div>
      <div class='card--item'>
        <div class='card--item-key'>${key6}</div>
        <div class='card--item-value'>${value6}</div>
      </div>
    </div>
  `
};

export const Default = Template.bind({});
Default.args = {
  type: 'closed',
  title: 'Twitter',
  key1: 'Handle',
  value1: 'sparksdev',
  key2: 'Id',
  value2: '213123781274',
  key3: 'Followers',
  value3: '612',
  key4: 'Following',
  value4: '264',
  key5: 'lists',
  value5: '4',
  key6: 'Some Attribute',
  value6: 'with a very long value that can be revealed when you tap the ‘more’ button it expands',
};

export const Closed = Template.bind({});
Closed.args = {
  type: 'closed',
  title: 'Twitter',
  key1: 'Handle',
  value1: 'sparksdev',
  key2: 'Id',
  value2: '213123781274',
  key3: 'Followers',
  value3: '612',
  key4: 'Following',
  value4: '264',
  key5: 'lists',
  value5: '4',
  key6: 'Some Attribute',
  value6: 'with a very long value that can be revealed when you tap the ‘more’ button it expands',
};

export const Open = Template.bind({});
Open.args = {
  type: 'open',
  title: 'Twitter',
  key1: 'Handle',
  value1: 'sparksdev',
  key2: 'Id',
  value2: '213123781274',
  key3: 'Followers',
  value3: '612',
  key4: 'Following',
  value4: '264',
  key5: 'lists',
  value5: '4',
  key6: 'Some Attribute',
  value6: 'with a very long value that can be revealed when you tap the ‘more’ button it expands',
};
