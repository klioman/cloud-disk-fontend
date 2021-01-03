import { OLangs } from 'constants/langs';
import { ValuesOfObject } from 'definitions/common-types';

export interface ISidebar {
	collapsed: boolean;
}

// ================================================

export type TLangs = ValuesOfObject<typeof OLangs>;
export type TLangsOrEmpty = TLangs | '';
export interface IAppStore {
	sidebar: ISidebar;
}
