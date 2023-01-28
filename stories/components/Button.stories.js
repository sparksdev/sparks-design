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

const Template = ({ text, variant }, { globals: { backgrounds } }) => {

    const theme = backgrounds?.value === '#151515' ? 'dark' : 'light'

    if(variant === 'primary') return `<div data-theme='${theme}'><button class='button'>${text}</button></div>`
    if(variant === 'disabled') return `<div data-theme='${theme}'><button class='button' disabled>${text}</button></div>`
    if(variant === 'primary-danger') return `<div data-theme='${theme}'><button class='button button--danger'>${text}</button></div>`
    if(variant === 'secondary') return `<div data-theme='${theme}'><button class='button button--secondary'>${text}</button></div>`
    if(variant === 'secondary-danger') return `<div data-theme='${theme}'><button class='button button--secondary-danger'>${text}</button></div>`
    // if(variant === 'tertiary') return `<div data-theme='${theme}'><button class='button button--tertiary'>${text}</button></div>`
    // if(variant === 'tertiary-disabled') return `<div data-theme='${theme}'><button class='button button--tertiary' disabled>${text}</button></div>`
    // if(variant === 'tertiary-danger') return `<div data-theme='${theme}'><button class='button button--tertiary button--tertiary-danger'>${text}</button></div>`
};

export const Default = Template.bind({});
Default.args = {
    text: 'Button',
    variant: 'primary'
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
