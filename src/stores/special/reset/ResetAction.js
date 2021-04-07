import ActionUtility from "../../../utils/ActionUtility"

export default class ResetAction {
    static RESET_STORAGE = 'RESET_STORAGE'

    static resetStorage() {
        return ActionUtility._createAction(ResetAction.RESET_STORAGE)
    }
}
