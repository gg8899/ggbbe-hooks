const merge = require('webpack-merge');
const common = require('../../webpack.common');
const path = require('path');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'ggbeeHooks.js',
    library: 'ggbeeHooks',
    path: path.resolve(__dirname, './dist'),
  },
});
