import { createSlice } from '@reduxjs/toolkit';
import { IAppStore } from './types';

const initialState: IAppStore = {
	darkColorTheme: false,
	sidebar: {
		collapsed: false,
	},
};

const appReducer = createSlice({
	name: '@@app',
	initialState,
	reducers: {
		sidebarToggle: (state) => {
			const stateCollapsed = state;

			stateCollapsed.sidebar.collapsed = !state.sidebar.collapsed;
		},
		darkColorThemeToggle: (state) => {
			const stateDarkColorTheme = state;

			stateDarkColorTheme.darkColorTheme = !state.darkColorTheme;
		},
	},
});

export default appReducer.reducer;

export const { sidebarToggle, darkColorThemeToggle } = appReducer.actions;
