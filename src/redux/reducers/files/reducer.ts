import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFileStore } from './types';

export const initialState: IFileStore = {
	fileList: [],
	isfileListLoader: false,
};

const fileReducer = createSlice({
	name: '@@file',
	initialState,
	reducers: {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		fileListRequest: (state) => {
			const fileRequestState = state;

			fileRequestState.isfileListLoader = true;
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		fileListSuccess: (state, action: PayloadAction<any>) => {
			const { payload } = action;
			const fileListSuccessState = state;

			fileListSuccessState.isfileListLoader = false;
			fileListSuccessState.fileList = payload;
		},
	},
});

export default fileReducer.reducer;

export const { fileListRequest, fileListSuccess } = fileReducer.actions;
