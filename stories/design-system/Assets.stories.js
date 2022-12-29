import '../../css/index.js';
import logo from '../../assets/logos/logo.png'

export default {
  title: 'Design System/Assets',
};

const Template = () => {
  return `
    <div style="display: flex; justify-content: stretch; align-items: stretch; position: absolute; width: 100%; height: 100%; left: 0; top: 0;">
      <img src="${logo}" height="100" width="100" style="margin: 20px" />
    </div>
  `;
};

export const Primary = Template.bind({});
Primary.parameters = {
	options: { showPanel: false },
};