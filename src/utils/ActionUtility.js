// import HttpErrorResponseModel from '../stores/special/models/HttpErrorResponseModel'

export default class ActionUtility {
    
    static _createAction(type, payload = undefined, error = false, meta = null) {
        return { type, payload, error, meta }
    }
}
