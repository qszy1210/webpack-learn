const path = require('path');
const webpack = require('webpack');
const webpackStream = require('webpack-stream')

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */
if(module && module.hot) {
    module.hot.accept()
}
module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		login: './src/login.js'
	},

	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
		// publicPath: '/'
	},

	 devServer: {
        hot: true
	},

	//一级属性
	resolve: {
		// modules: ['node_modules'],
		// alias: {

		// },
		// extensions: ['js,jsx'],
		//mainFields: ['xx']
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			template: './src/login.html',
			filename: 'login.html',
			chunks: ['login']
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([{
			from: './src/public/js/*.js',
			to: path.resolve(__dirname, 'dist', 'js'),
			flatten: true
		}, ], {
			ignore: ['ignore.js']
		}),
		new webpack.ProvidePlugin({
			React: 'react',
			ReactDOM: 'react-dom',
			Component: ['react', 'Component']
		}),
		new MiniCssExtractPlugin({
			filename: 'distcss/[name].css'
		}),
		new webpack.HotModuleReplacementPlugin()
	],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: [
						// [
						// 	"@babel/plugin-transform-runtime",
						// 	{
						// 		"corejs": 3
						// 	}
						// ],
						'syntax-dynamic-import'
					],

					presets: [
						[
							'@babel/preset-react',
							{
								modules: false
							}
						]
					]
				}
			},
			{
				test: /\.css$/,
				include: [path.resolve(__dirname, 'src')],
				exclude: /node_modules/,
				loader: [
					// 'style-loader',
					MiniCssExtractPlugin.loader,
				'css-loader']
			}
		],
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true
	}
};
