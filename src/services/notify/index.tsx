import { notification } from 'antd';
import { ALLOW_WINDOW_EXTENDS } from 'constants/env';
import { IDefaults, INotifyParams, TNotifyMessage } from './types';

class Notify {
	public static create(params: INotifyParams): void {
		const defaults: IDefaults = {
			top: 86,
			bottom: 10,
			placement: 'topRight',
		};

		const config: INotifyParams = { ...defaults, ...params };

		notification.open(config);
	}

	public static info(message: TNotifyMessage, description?: string): void {
		this.create({ type: 'info', message, description });
	}

	public static success(message: TNotifyMessage, description?: string): void {
		this.create({ type: 'success', message, description });
	}

	public static warning(message: TNotifyMessage, description?: string): void {
		this.create({ type: 'warning', message, description });
	}

	public static error(message: TNotifyMessage, description?: string): void {
		this.create({ type: 'error', message, description });
	}
}

if (ALLOW_WINDOW_EXTENDS) {
	window.$notify = Notify;
}

export { Notify };
