namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: string;
		PUBLIC_URL: string;

		/** Permissions */
		REACT_APP_ALLOW_DEV_CONSOLE: string;
		REACT_APP_ALLOW_REDUX_DEVTOOLS_EXTENSION: string;
		REACT_APP_ALLOW_WINDOW_EXTENDS: string;

		/** App */
		REACT_APP_NAME: string;
		REACT_APP_DEFAULT_LANGUAGE: string;
		REACT_APP_STORAGE_PREFIX: string;

		/** API */
		REACT_APP_WEB_API_URL: string;
	}
}
