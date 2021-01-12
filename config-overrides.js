/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const path = require('path');
const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const options = {
	stylesDir: path.join(__dirname, './src/assets/styles'),
	antDir: path.join(__dirname, './node_modules/antd'),
	varFile: path.join(__dirname, './src/assets/styles/settings/variables.less'),
	themeVariables: ['@primary-color', '@body-background'],
	indexFileName: 'index.html',
};

module.exports = override(
	fixBabelImports('antd', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addWebpackPlugin(
		new AntDesignThemePlugin(options),
		new AntdDayjsWebpackPlugin({
			preset: 'antdv3',
		}),
	),
	addLessLoader({
		lessOptions: {
			javascriptEnabled: true,
		},
	}),
);
