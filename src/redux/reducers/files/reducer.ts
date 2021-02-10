import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFileList, IFileStore } from './types';

export const initialState: IFileStore = {
	fileList: null,
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
	},
});

export default fileReducer.reducer;

export const { fileListRequest, fileListSuccess } = fileReducer.actions;
