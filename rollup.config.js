const postcss = require('rollup-plugin-postcss')

module.exports = [
  {
    input: './css/index.js',
    output: {
      file: 'dist/style.css',
      format: 'es'
    },
    plugins: [
      postcss({
        extract: true
      })
    ]
  },
  {
    input: './css/index.js',
    output: {
      file: 'dist/style.min.css',
      format: 'es'
    },
    plugins: [
      postcss({
        minimize: true,
        extract: true
      })
    ]
  }
]
