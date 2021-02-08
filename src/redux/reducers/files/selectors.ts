import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from 'redux/types';
import { IFileStore } from './types';

const getFilesState = (state: IStoreState): IFileStore => state.fileReducer;
export const getFiles = createSelector([getFilesState], (fileList: any) => fileList);

// ====================================================:
export const getFilesList = createSelector([getFiles], (filesList: IFileStore): any => filesList);
