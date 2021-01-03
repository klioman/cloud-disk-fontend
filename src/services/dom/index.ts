import { APP_NAME } from 'constants/env';
import { TLangs } from 'redux/reducers/app/types';

class DOM {
	private static readonly titlePostfix = ` | ${APP_NAME}`;

	private static readonly html: HTMLElement = document.documentElement;

	public static changeDocumentLang(languageId: TLangs): void {
		if (languageId !== this.html.lang) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			this.html.lang = languageId;
		}
	}

	public static changeDocumentTitle(documentTitle: string): void {
		const newTitle = documentTitle + this.titlePostfix;
		if (newTitle !== document.title) {
			document.title = newTitle;
		}
	}
}

export { DOM };
