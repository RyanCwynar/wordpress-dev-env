const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const THEMES = "/wordpress/wp-content/themes"
const THEME_NAME = "/fueled-on-bacon"
module.exports = {
  
  mode: "production",
  entry: {
    bundle: __dirname + THEMES + THEME_NAME + "/src/index.ts",
    main: __dirname + THEMES + THEME_NAME + "/scss/main.scss"
  },
  output: {
    path: __dirname + THEMES + THEME_NAME,
    filename: "./js/[name].js",
    library: '[name]',
    libraryTarget: 'umd'
  },
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".scss", ".woff", ".woff2", ".eot", ".ttf"]
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
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader', 
            options: {
              sourceMap: true
            },
          },
          'resolve-url-loader', 
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true
            },
          }, 
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}
