import ActionUtility from '../../utils/ActionUtility'

export default class ProjectAction {
    static SET_PROJECT_BASIC_INFO = 'SET_PROJECT_BASIC_INFO'
    static SET_PROJECT_ADVANCE_INFO = 'SET_PROJECT_ADVANCE_INFO'

    static _setProjectBasicInfo(data) {
        return ActionUtility._createAction(ProjectAction.SET_PROJECT_BASIC_INFO, data)
    }
    static _setProjectAdvanceInfo(data) {
        return ActionUtility._createAction(ProjectAction.SET_PROJECT_ADVANCE_INFO, data)
    }
  

  
}
