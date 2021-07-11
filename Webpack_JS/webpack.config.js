const path = require('path');

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
    filename: 'main.js' // string (default)
    // the filename template for entry chunks
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
  }
}