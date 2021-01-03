import { createSlice } from '@reduxjs/toolkit';
import { IAppStore } from './types';

const initialState: IAppStore = {
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
	},
});

export default appReducer.reducer;

export const { sidebarToggle } = appReducer.actions;
