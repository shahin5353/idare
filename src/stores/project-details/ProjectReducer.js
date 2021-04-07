import ProjectAction from './ProjectAction'
import BaseReducer from '../../utils/BaseReducer'

export default class ProjectReducer extends BaseReducer {
    initialState = {
        projectBasicInfo: null,
        projectAdvanceInfo: null
    };

    [ProjectAction.SET_PROJECT_BASIC_INFO](state, action) {
        return {
            ...state,
            projectBasicInfo: action.payload
        }
    }

    [ProjectAction.SET_PROJECT_ADVANCE_INFO](state, action) {
        return {
            ...state,
            projectAdvanceInfo: action.payload
        }
    }
   
}
