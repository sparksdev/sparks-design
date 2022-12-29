import '../../css/index.js';

export default {
  title: 'Design System/Typography',
};

const Template = () => {
  return `
    <div style="display: flex; justify-content: stretch; align-items: stretch; position: absolute; width: 100%; height: 100%; left: 0; top: 0;">
      <iframe style="border: 0px; flex-grow: 1;" src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/bKI0SvJirPHvOLEnuEcSmt/SPARKS-Design-System?node-id=2%3A2&t=bxuIM2NlzD4rT5Yl-4" allowfullscreen></iframe>
    </div>
  `;
};

export const Primary = Template.bind({});
Primary.parameters = {
	options: { showPanel: false },
};