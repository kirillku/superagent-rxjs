
const webpack = require('webpack')
const p = require('./package')

module.exports = {

  output: {
    library: 'superagent-rxjs',
    libraryTarget: 'umd'
  },

  externals: Object.keys(p.dependencies).concat('rxjs/Observable'),

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  node: {
    Buffer: false
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]

}
