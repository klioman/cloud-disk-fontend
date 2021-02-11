import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFileList, IFileStore } from './types';

export const initialState: IFileStore = {
	fileList: [],
	isfileListLoader: false,
};

const fileReducer = createSlice({
	name: '@@file',
	initialState,
	reducers: {
		fileListRequest: (state) => {
			const fileRequestState = state;

			fileRequestState.isfileListLoader = true;
		},
		fileListSuccess: (state, action: PayloadAction<IFileList>) => {
			const { payload } = action;
			const fileListSuccessState = state;

			fileListSuccessState.isfileListLoader = false;
			fileListSuccessState.fileList = payload;
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		createDirRequest: (state, action: PayloadAction<any>) => {
			const createDirRequestState = state;

			createDirRequestState.isfileListLoader = true;
		},
	},
});

export default fileReducer.reducer;

export const { fileListRequest, fileListSuccess, createDirRequest } = fileReducer.actions;
