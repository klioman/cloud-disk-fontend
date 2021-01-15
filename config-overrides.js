/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const path = require('path');
const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const { getLessVars } = require('antd-theme-generator');

// ===============================================:
const themeVariables = getLessVars(
	path.join(__dirname, './src/assets/styles/settings/variables.less'),
);
const defaultVars = getLessVars('./node_modules/antd/lib/style/themes/default.less');
const darkVars = {
	...getLessVars('./node_modules/antd/lib/style/themes/dark.less'),
	'@primary-color': defaultVars['@primary-color'],
	'@picker-basic-cell-active-with-range-color': 'darken(@primary-color, 20%)',
};
const lightVars = {
	...getLessVars('./node_modules/antd/lib/style/themes/compact.less'),
	'@primary-color': defaultVars['@primary-color'],
};
// ===============================================:

const options = {
	stylesDir: path.join(__dirname, './src/assets/styles'),
	antDir: path.join(__dirname, './node_modules/antd'),
	varFile: path.join(__dirname, './src/assets/styles/settings/variables.less'),
	themeVariables: Array.from(
		new Set([...Object.keys(darkVars), ...Object.keys(lightVars), ...Object.keys(themeVariables)]),
	),
	generateOnce: false, // generate color.less on each compilation
};

module.exports = override(
	fixBabelImports('import', {
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
