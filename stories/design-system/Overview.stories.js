import '../../css/index.js';

export default {
  title: 'Design System/Overview',
};

const Template = () => {
  return `
    <div style="display: flex; justify-content: stretch; align-items: stretch; position: absolute; width: 100%; height: 100%; left: 0; top: 0;">
      <iframe style="border: 0px; flex-grow: 1;" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbKI0SvJirPHvOLEnuEcSmt%2FSPARKS-Design-System%3Fnode-id%3D0%253A1%26t%3DbxuIM2NlzD4rT5Yl-1" allowfullscreen></iframe>
    </div>
  `;
};

export const Primary = Template.bind({});
Primary.parameters = {
	options: { showPanel: false },
};