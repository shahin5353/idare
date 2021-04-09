import ActionUtility from '../../utils/ActionUtility'

export default class FileAction {
    static SET_PROJECT_CSV_FILE = 'SET_PROJECT_CSV_FILE'

    static _setProjectCSVFileData(data) {
        return ActionUtility._createAction(FileAction.SET_PROJECT_CSV_FILE, data)
    }
  
}