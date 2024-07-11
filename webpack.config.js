import { PRODUCTION, DEVELOPMENT, ENTRY_POINT, OUTPUT_PATH, HTML_TEMPLATE } from './webpack.constants';

const prod = process.env.NODE_ENV === PRODUCTION;
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin';


export const mode = prod ? PRODUCTION : DEVELOPMENT;
export const entry = ENTRY_POINT;
export const output = {
  path: __dirname + OUTPUT_PATH,
};
export const module = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
      use: 'ts-loader',
    },
    {
      test: /\.css$/,
      use: [loader, 'css-loader'],
    },
  ]
};
export const devtool = prod ? undefined : 'source-map';
export const plugins = [
  new HtmlWebpackPlugin({
    template: HTML_TEMPLATE,
  }),
  new MiniCssExtractPlugin(),
];
