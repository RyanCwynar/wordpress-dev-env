module.exports = {
  mode: "production",
  entry: {
    bundle: __dirname + "/wordpress/wp-content/themes/fueled-on-bacon/src/bundle_this.ts",
    main: __dirname + "/wordpress/wp-content/themes/fueled-on-bacon/src/scss/main.scss"
  },
  output: {
    path: __dirname + "/wordpress/wp-content/themes/fueled-on-bacon/js",
    filename: "[name].js",
    library: '[name]',
    libraryTarget: 'umd'
  },
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".scss"]
  },
  devtool: 'source-map',
  externals: [/(jQuery)/],
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
						loader: 'file-loader',
						options: {
							name: 'css/[name].css',
						}
					},
          'style-loader', 
          'css-loader', 
          'resolve-url-loader', 
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true
            },
          }, 
        ]
      }
    ]
  },
}