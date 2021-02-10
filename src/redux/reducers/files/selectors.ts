import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from 'redux/types';
import { IFileStore } from './types';

const getFilesState = (state: IStoreState): IFileStore => state.fileReducer;
export const getFiles = createSelector([getFilesState], (fileItem: IFileStore) => fileItem);

// ====================================================:
export const getFilesList = createSelector([getFiles], (fileItem: IFileStore) => fileItem.fileList);
