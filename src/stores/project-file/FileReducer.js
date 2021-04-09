import BaseReducer from '../../utils/BaseReducer'
import FileAction from './FileAction';

export default class FileReducer extends BaseReducer {
    initialState = {
        projectCSVFileData: null
    };

    [FileAction.SET_PROJECT_CSV_FILE](state, action) {
        return {
            ...state,
            projectCSVFileData: action.payload
        }
    }

}
