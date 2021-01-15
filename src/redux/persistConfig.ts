import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'app-in-design',
	storage,
	transforms: [
		encryptTransform({
			secretKey: 'my-super-secret-key',
			onError: (error) => {
				// eslint-disable-next-line no-console
				console.log(error);
			},
		}),
	],
	whitelist: ['authReducer', 'appReducer'],
};

export { persistConfig };
