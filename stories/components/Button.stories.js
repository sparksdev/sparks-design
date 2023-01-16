// Button.stories.js

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',

  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tags', 'link'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    }
  }
};

//👇 We create a “template” of how args map to rendering
const ButtonTemplate = (args) => {
  const btn = document.createElement('button');
  btn.innerText = args.label;

  let bg_color =  '';
  let font_color =  '';
  let btn_type = '';
  switch ( args.type ) {
    case 'primary' : 
    // if type is primary
      btn_type = 'sb-btn';
      font_color = 'font-color-white';
      bg_color = 'bg-color-accent-purple';

      if (args.distructive) {
        // when type is primary and distructive is true
        font_color = 'font-color-white';
        bg_color = 'bg-color-braun-red';
      }

      if ( args.disabled ) {
        // if type is primary and disabled are true.
        font_color = 'font-color-white';
        bg_color = 'bg-color-gray-3';
      }

      break
  case 'secondary' :
    // if type is secondary
    btn_type = 'sb-btn';
    font_color = 'font-color-accent-purple';
    bg_color = 'bg-color-white';

    if (args.distructive) {
      // when type is primary and distructive is true
      font_color = 'font-color-braun-red';
      bg_color = 'bg-color-white';
    }
    break;
  case 'tags' :
    // when type is tags
    btn_type = 'sb-btn-tags';

    bg_color = 'bg-color-gray-4';
    font_color = 'font-color-gray-1';
    if (args.active) {
      // when type is tags and active is true.
      bg_color = 'bg-color-accent-purple';
      font_color = 'font-color-white';
    }
    break;
  case 'link' :
    // when type is link
    btn_type = 'sb-btn-link';
    bg_color = '';
    font_color = 'font-color-accent-purple';

    if ( args.disabled ) {
      font_color = 'font-color-gray-3';
    }

    if ( args.distructive ) {
      font_color = 'font-color-braun-red';
    }
    break
  }

  // const distructive = args.distructive ? 'sb-btn--distructive' : '';
  btn.className = ['sb-btn', 'sb-btn--medium', font_color, bg_color, btn_type].join(' ');

  return btn;
};

//👇 Each story then reuses that template
export const primaryButton = ButtonTemplate.bind({});
primaryButton.args = {
  type: 'primary',
  label: 'Button',
  active: true,
  disabled: false,
  distructive: false,
};

export const secondaryButton = ButtonTemplate.bind({});
secondaryButton.args = {
  type: 'secondary',
  label: 'Button',
  active: true,
};

export const tagsButton = ButtonTemplate.bind({});
tagsButton.args = {
  type: 'tags',
  label: 'Button',
};

export const linkButton = ButtonTemplate.bind({});
linkButton.args = {
  type: 'link',
  label: 'Button',
  active: true,
};