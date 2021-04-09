import { createSelector } from 'reselect'

export class FileSelector {
    static projectCSVFileData = (state) => state.file.projectCSVFileData
}

export const makeSelectProjectCSVFileData = createSelector(
        FileSelector.projectCSVFileData,
        (projectCSVFileData) => (projectCSVFileData ? projectCSVFileData : '')
)