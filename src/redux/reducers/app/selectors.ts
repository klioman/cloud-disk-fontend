import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from 'redux/types';
import { IAppStore } from './types';

const getAppState = (state: IStoreState): IAppStore => state.appReducer;

export const getApp = createSelector([getAppState], (app: IAppStore) => app);

// ====================================================:
export const getSidebarCollapsed = createSelector(
	[getAppState],
	(appSidebar) => appSidebar.sidebar.collapsed,
);

// ====================================================:
export const getDarkColorTheme = createSelector(
	[getAppState],
	(appColorTheme) => appColorTheme.darkColorTheme,
);
