/** https://learn.javascript.ru/custom-errors */
export class ValidationGuardError extends Error {
	constructor(reason: string) {
		super();

		this.name = 'ValidationGuardError';
		this.message = reason;
	}
}
