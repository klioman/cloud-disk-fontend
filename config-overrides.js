/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({
		lessOptions: {
			javascriptEnabled: true,
			modifyVars: {
				/*
				|-------------------------------------------------------------------------------------------------------------------
				| https://ant.design/docs/react/customize-theme
				|-------------------------------------------------------------------------------------------------------------------
				| variables - https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
				*/

				// Colors
				'@primary-color': '#00b67b',
			},
		},
	}),
	addWebpackPlugin(
		new AntdDayjsWebpackPlugin({
			preset: 'antdv3',
		}),
	),
);
