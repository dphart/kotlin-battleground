;(function () {
  config.module.rules.push(
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.svg$/,
      use: 'svg-inline-loader'
    }
  )
})()
