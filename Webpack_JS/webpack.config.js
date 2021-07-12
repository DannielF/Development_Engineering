const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js', // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'dist'), // string (default)
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: 'main.js', // string (default)
    // the filename template for entry chunks
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving of loaders)
    extensions: ['.js']
    // extensions that are used
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          // apply multiple loaders and options instead
          loader: 'babel-loader'
          // the loader which should be applied, it'll be resolved relative to the context
        }
      },
      {
        // preprocessor like stylus or others
        test: /\.css|.styl$/i,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ],
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            // Specifying the maximum size of a file in bytes. {Boolean|Number|String}
            mimeType: "application/font-woff",
            // Sets the MIME type for the file to be transformed. {Boolean|String}

            // this is for file-loader
            name: "[name].[ext]",
            // Specifies a custom filename template for the target file(s) using the query parameter name.
            outputPath: "./assets/fonts/",
            // Specify a filesystem path where the target file(s) will be placed.
            publicPath: "./assets/fonts/",
            // Specifies a custom public path for the target file(s).
            esModule: false,
            // Use ES modules syntax. {Boolean}
          }
        }
      }
      // these are matching conditions, each accepting a regular expression or string
      // test and include have the same behavior, both must be matched
      // exclude must not be matched (takes preference over test and include)
      // Best practices:
      // - Use RegExp only in test and for filename matching
      // - Use arrays of absolute paths in include and exclude to match the full path
      // - Try to avoid exclude and prefer include
      // Each condition can also receive an object with "and", "or" or "not" properties
      // which are an array of conditions.
    ]
  },
  plugins: [
    // option is used to customize the webpack build process in a variety of ways. 
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images"
        }
      ]
    })
  ]
}