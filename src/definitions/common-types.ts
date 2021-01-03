export type PlainObject<Value = any> = {
	[p: string]: Value;
};

/** https://stackoverflow.com/a/59932722 */
/** https://stackoverflow.com/a/59496175 */

// eslint-disable-next-line @typescript-eslint/ban-types
export type KeysOfObject<T extends Object> = keyof T;
// eslint-disable-next-line @typescript-eslint/ban-types
export type ValuesOfObject<T extends Object> = T[KeysOfObject<T>];

export type ID = string | number;

export type AtndStatusTypes = 'success' | 'info' | 'error' | 'warning';
