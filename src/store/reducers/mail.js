import * as actionTypes from "../actions/actionTypes";

import { updateObject } from "../utility";


const initialState = {
    fname: '',
    lname: '',
    email: '',
    message: '',
    mails: [],
    loading: true
}

const mailStart = (state, action) => {
    return updateObject(state, {loading: action.loading})
}


const mailSuccess = (state, action) => {
    return updateObject(state, {mails: action.mails})

}

const mailFail = (state, action) => {
    return(<div>{action.err}</div>)
}

const mailReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MAIL_SUCCESS: return mailSuccess(state, action)
        case actionTypes.MAIL_FAIL: return mailFail(state, action)
        case actionTypes.MAIL_START: return mailStart(state, action)
        default: return state
    }
}

export default mailReducer