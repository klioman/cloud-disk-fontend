import { ALLOW_DEV_CONSOLE } from 'constants/env';

const style = {
	log: ['padding: 1px 3px', 'background: #b7b5b6', 'color: #000', 'font-size: 14px'],
	info: ['padding: 1px 3px', 'background: #1890ff', 'color: #fff', 'font-size: 14px'],
	warn: ['padding: 1px 3px', 'background: #ffb84d', 'color: #444', 'font-size: 14px'],
	error: ['padding: 1px 3px', 'background: #ff4d4f', 'color: #fff', 'font-size: 14px'],
};

export const devConsole = {
	log(...args: any[]) {
		if (ALLOW_DEV_CONSOLE) {
			// eslint-disable-next-line no-console
			console.log('%c[LOG] => ', style.log.join(';'), ...args);
		}
	},
	info(...args: any[]) {
		if (ALLOW_DEV_CONSOLE) {
			// eslint-disable-next-line no-console
			console.info('%c[INFO] => ', style.info.join(';'), ...args);
		}
	},
	warn(...args: any[]) {
		if (ALLOW_DEV_CONSOLE) {
			// eslint-disable-next-line no-console
			console.warn('%c[WARN] => ', style.warn.join(';'), ...args);
		}
	},
	error(...args: any[]) {
		if (ALLOW_DEV_CONSOLE) {
			// eslint-disable-next-line no-console
			console.error('%c[ERROR] => ', style.error.join(';'), ...args);
		}
	},
	time(label?: string) {
		if (ALLOW_DEV_CONSOLE) {
			// eslint-disable-next-line no-console
			console.time(label);
		}
	},
	timeEnd(label?: string) {
		if (ALLOW_DEV_CONSOLE) {
			// eslint-disable-next-line no-console
			console.timeEnd(label);
		}
	},
};
