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
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]', // Carpeta de salida para las imágenes
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/', // Carpeta de salida para las imágenes
              publicPath: 'assets/',
              // Modificar la configuración para separar por tipo de imagen
              discriminator: (file) => {
                if (file.mimetype.startsWith('image/svg')) {
                  return 'svg';
                } else {
                  return 'images';
                }
              }, // Ruta pública para las imágenes
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // opciones para png (optimización) a través de mozpng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.10, 0.15],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp options
              webp: {
                quality: 10
              },
            },
          },
        ],
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
