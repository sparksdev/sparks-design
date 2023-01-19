import '../../css/index.js';

export default {
  title: 'Components/Button',
  argTypes: {
    text: { description: 'Text to display', control: 'text' },
    variant: { 
        control: { type: 'select' },
        options: [ 'primary', 'disabled', 'primary-danger', 'secondary', 'secondary-danger' ]
        //, 'tertiary', 'tertiary-disabled', 'tertiary-danger']
      }
  },
};

const Template = ({ text, variant }) => {
    if(variant === 'primary') return `<button class='button'>${text}</button>`
    if(variant === 'test') return `<div class='button'>${text}</div>`
    if(variant === 'disabled') return `<button class='button' disabled>${text}</button>`
    if(variant === 'primary-danger') return `<button class='button button--danger'>${text}</button>`
    if(variant === 'secondary') return `<button class='button button--secondary'>${text}</button>`
    if(variant === 'secondary-danger') return `<button class='button button--secondary-danger'>${text}</button>`
    // if(variant === 'tertiary') return `<button class='button button--tertiary'>${text}</button>`
    // if(variant === 'tertiary-disabled') return `<button class='button button--tertiary' disabled>${text}</button>`
    // if(variant === 'tertiary-danger') return `<button class='button button--tertiary button--tertiary-danger'>${text}</button>`
};

export const Default = Template.bind({});
Default.args = {
    text: 'Button',
    variant: 'primary'
};

export const Test = Template.bind({});
Test.args = {
    text: 'Test',
    variant: 'test'
};
export const Primary = Template.bind({});
Primary.args = {
    text: 'Primary',
    variant: 'primary'
};
export const Disabled = Template.bind({});
Disabled.args = {
    text: 'Disabled',
    variant: 'disabled'
};
export const PrimaryDanger = Template.bind({});
PrimaryDanger.args = {
    text: 'Primary Danger',
    variant: 'primary-danger'
};
export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Secondary',
    variant: 'secondary'
};
export const SecondaryDanger = Template.bind({});
SecondaryDanger.args = {
    text: 'Secondary Danger',
    variant: 'secondary-danger'
};
// export const Tertiary = Template.bind({});
// Tertiary.args = {
//     text: 'Tertiary',
//     variant: 'tertiary'
// };
// export const TertiaryDanger = Template.bind({});
// TertiaryDanger.args = {
//     text: 'Tertiary Danger',
//     variant: 'tertiary-danger'
// };
// export const TertiaryDisabled = Template.bind({});
// TertiaryDisabled.args = {
//     text: 'Tertiary Disabled',
//     variant: 'tertiary-disabled'
// };
