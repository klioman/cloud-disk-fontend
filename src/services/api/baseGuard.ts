import Validator from 'validatorjs';
import { ValidationGuardError } from './validationGuardError';

export class BaseGuard {
	protected readonly guardRules = {};

	protected validate(payload: any): any {
		const validation = new Validator(payload, this.guardRules);

		/**
		 * @Important => Проверка `validation.fails()` или `validation.passes()` крайне важна
		 * т.к. в момент вызова метода .fails или .passes происходит проверка и наполнение объекта ошибками
		 * */
		if (validation.fails()) {
			const error = new ValidationGuardError(
				'Incoming data from the server to the client is not valid',
			);
			// Notify.error(error.message);
			// eslint-disable-next-line no-console
			console.error(
				`[Validation Guard] => "${error.message}"`,
				'\n',
				'data => ',
				validation.input,
				'\n',
				'rules => ',
				validation.rules,
				'\n',
				'errors => ',
				validation.errors.all(),
				'\n',
			);
			throw error;
		}

		return validation.input;
	}
}
