import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import ResetAction from './special/reset/ResetAction'
import ResetReducer from './special/reset/ResetReducer'
import ProjectReducer from './project-details/ProjectReducer'
import FileReducer from './project-file/FileReducer'

export default function rootReducer() {
    const reducerMap = {
        reset: new ResetReducer().reducer,
        project: new ProjectReducer().reducer,
        file: new FileReducer().reducer
    }

    const appReducer =  combineReducers(reducerMap)
    return (state, action) => {
        if (action.type === ResetAction.RESET_STORAGE) {
            storage.removeItem('persist:idare')
            state = undefined
          }
        return appReducer(state, action)
    }
}
