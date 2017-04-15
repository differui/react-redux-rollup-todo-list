const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')

export default {
  entry: './src/index.js',
  dest: './dest/bundle.js',
  format: 'umd',
  plugins: [
    buble({
      exclude: 'node_modules/**'
    }),
    commonjs({
      namedExports: {
        'node_modules/react/react.js': [
          'Component',
          'Children',
          'createElement',
          'PropTypes'
        ],
        'node_modules/react-dom/index.js': [
          'render'
        ]
      }
    }),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
