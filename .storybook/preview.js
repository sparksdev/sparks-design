export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Design System',
        'Components'
      ],
    },
  },
  backgrounds: {
    values: [
      { name: 'light', value: '#f9f9f9' },
      { name: 'dark', value: '#151515' }
    ]
  }
}
