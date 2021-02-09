import axios from "axios";

import * as actionTypes from "./actionTypes";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authFail = () => {
    return {
        type: actionTypes.AUTH_FAIL
    }
}

export const authSuccess = (token, id) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        tokenId: token,
        userId: id
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB3g0UUeCSttwhG5VYBHYZMgWNWn7X59tk", authData)
            .then(responce => {
                dispatch(authSuccess(responce.data.idToken, responce.data.userId))
            })
            .catch(err => {
                console.log(err)
            })
    }
}