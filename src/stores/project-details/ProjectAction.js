import ActionUtility from '../../utils/ActionUtility'

export default class ProjectAction {
    static SET_PROJECT_NAME = 'SET_PROJECT_NAME'
    static SET_PROJECT_DESCRIPTION = 'SET_PROJECT_DESCRIPTION'
    static SET_CLIENT = 'SET_CLIENT'
    static SET_CONTRUCTOR= 'SET_CONTRUCTOR'

    static _setProjectName(projectName) {
        return ActionUtility._createAction(ProjectAction.SET_PROJECT_NAME, projectName)
    }
    static _setProjectDescription(projectDescription) {
        return ActionUtility._createAction(ProjectAction.SET_PROJECT_DESCRIPTION, projectDescription)
    }
    static _setClient(client) {
        return ActionUtility._createAction(ProjectAction.SET_CLIENT, client)
    }
    static _setContructor(contructor) {
        return ActionUtility._createAction(ProjectAction.SET_CONTRUCTOR, contructor)
    }

  
}
