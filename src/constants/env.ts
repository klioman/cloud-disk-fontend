/** Build environment */
export const BUILD_ENV = process.env.NODE_ENV;
export const IS_DEVELOPMENT = BUILD_ENV === 'development';
export const IS_TEST = BUILD_ENV === 'test';
export const IS_PRODUCTION = BUILD_ENV === 'production';

/** Permissions */
export const ALLOW_DEV_CONSOLE = process.env.REACT_APP_ALLOW_DEV_CONSOLE === 'true';
export const ALLOW_REDUX_DEVTOOLS_EXTENSION =
	process.env.REACT_APP_ALLOW_REDUX_DEVTOOLS_EXTENSION === 'true';
export const ALLOW_WINDOW_EXTENDS = process.env.REACT_APP_ALLOW_WINDOW_EXTENDS === 'true';

/** App */
export const APP_NAME = process.env.REACT_APP_NAME;
export const STORAGE_PREFIX = process.env.REACT_APP_STORAGE_PREFIX;

/** API */
export const WEB_API_URL = IS_DEVELOPMENT
	? process.env.REACT_APP_WEB_API_URL
	: `${window.location.origin.replace('.', '.api.')}/api`;

if (ALLOW_DEV_CONSOLE) {
	const style = ['padding: 1px 3px', 'background: #222', 'color: #bada55', 'font-size: 14px'];
	// eslint-disable-next-line no-console
	console.info('%c[process.env] => ', style.join(';'), process.env);
}
