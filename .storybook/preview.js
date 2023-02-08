import sparksTheme from './sparksTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    theme: sparksTheme,
    storySort: {
      order: [
        'Design System',
        'Components'
      ],
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'light', value: '#f9f9f9' },
      { name: 'dark', value: '#151515' }
    ]
  },
  docs: {
    theme: sparksTheme,
  },
}