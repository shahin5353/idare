import ProjectAction from './ProjectAction'
import BaseReducer from '../../utils/BaseReducer'

export default class ProjectReducer extends BaseReducer {
    initialState = {
        projectName: null,
        projectDescription: null,
        client: null,
        contructor: null,
    };

    [ProjectAction.SET_PROJECT_NAME](state, action) {
        return {
            ...state,
            projectName: action.payload
        }
    }

    [ProjectAction.SET_PROJECT_DESCRIPTION](state, action) {
        return {
            ...state,
            projectDescription: action.payload
        }
    }
    [ProjectAction.SET_CLIENT](state, action) {
        return {
            ...state,
            client: action.payload
        }
    }
    [ProjectAction.SET_CONTRUCTOR](state, action) {
        return {
            ...state,
            contructor: action.payload
        }
    }

   
}
