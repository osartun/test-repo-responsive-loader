module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|webp)$/,
        use: { loader: 'responsive-loader' }
      }
    ]
  },
};
