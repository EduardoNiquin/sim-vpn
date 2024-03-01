const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/js/index.js', // Punto de entrada de tu aplicación
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Cambia 'dist' por 'public'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Ubicación de tu archivo index.html en src
      filename: 'index.html' // Nombre del archivo de salida
    })
  ],
  module: {
    rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        // Agrega más reglas para otros tipos de archivos si es necesario
      ],
  },
  performance: {
    maxAssetSize: 500000, // en bytes
    maxEntrypointSize: 500000, // en bytes
  },
  // Otras configuraciones de Webpack pueden ir aquí
};
