const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');


module.exports = (env) => {
  const isDevBuild = !(env && env.prod);



    // Configuration in common to both client-side and server-side bundles
  const sharedConfig = () => ({
    stats: { modules: false },
    resolve: { 
      extensions: ['.js', '.jsx'],
      modules: [
        path.join(__dirname, './app'),
        'node_modules'
      ]
    },
    output: {
      filename: '[name].js',
      publicPath: '/dist/', // Webpack dev middleware, if enabled, handles requests for this URL prefix
    },
    module: {
      rules: [
        { test: /\.jsx?$/, include: /app/, use: 'babel-loader' },
      ],
    },
  });

    // Configuration for client-side bundle suitable for running in browsers
  const clientBundleOutputDir = './wwwroot/dist';
  const clientBundleConfig = merge(sharedConfig(), {
    name: 'client '+ (isDevBuild?'dev':'prod'),
    entry: { 'index': './app/index-client.jsx' },
    module: {
      rules: [
        { test: /\.css$/, use: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
        { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' },
      ],
    },
    output: { path: path.join(__dirname, clientBundleOutputDir) },
    plugins: [
      new ExtractTextPlugin('site.css'),
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./wwwroot/dist/vendor-manifest.json'),
      }),
    ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map', // Remove this line if you prefer inline source maps
        moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]'), // Point sourcemap entries to the original file locations on disk
      }),
    ] : [
            // Plugins that apply in production builds only
      new webpack.optimize.UglifyJsPlugin(),
    ]),
  });

    // Configuration for server-side (prerendering) bundle suitable for running in Node
  const serverBundleConfig = merge(sharedConfig(), {
    name: 'server '+ (isDevBuild?'dev':'prod'),
    resolve: { mainFields: ['main'] },
    entry: { 'index': './app/index-server.jsx' },
    module: {
      rules: [
        { test: /\.css$/, use: ExtractTextPlugin.extract('css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
      ],
    },
    plugins: [
      new ExtractTextPlugin({ filename: 'site.css', disable: true }),
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./dist/vendor-manifest.json'),
        sourceType: 'commonjs2',
        name: './vendor',
      }),
    ],
    output: {
      libraryTarget: 'commonjs',
      path: path.join(__dirname, './dist'),
    },
    target: 'node',
  });

  return [clientBundleConfig, serverBundleConfig];
};
