const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
	entry: './src/app.ts',
	output: {
		filename: 'app.js',
		path: path.resolve(appDirectory, 'dist'),
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: {
		host: '0.0.0.0',
		port: 3000, //port that we're using for local host (localhost:3000)
		static: path.resolve(appDirectory, 'public'), //tells webpack to serve from the public folder
		hot: true,
		devMiddleware: {
			publicPath: '/',
		},
	},
	module: {
		rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(appDirectory, 'public/index.html'),
		}),
	],
	mode: 'development',
};
