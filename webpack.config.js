const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin'); // Importar el plugin
const glob = require('glob-all'); // Para encontrar archivos a analizar

require('dotenv').config();


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
    }),
    new webpack.DefinePlugin({ // DEFINE LAS VARIABLES DE ENTORNO
      'process.env.VPN_API_KEY': JSON.stringify(process.env.VPN_API_KEY),
    }),
    new PurgeCSSPlugin({ //PLUGIN PARA ELIMINAR CSS NO UTILIZADO
      paths: glob.sync([
        path.join(__dirname, 'src/**/*.html'),
        path.join(__dirname, 'src/**/*.js')
      ], { nodir: true }),
      extractors: [
        {
          extractor: class {
            static extract(content) {
              return content.match(/[\w-/:]+(?<!:)/g) || []; 
            }
          },
          extensions: ['html', 'js']
        }
      ]
    }),
    
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  // Otras configuraciones de Webpack pueden ir aquí
};
