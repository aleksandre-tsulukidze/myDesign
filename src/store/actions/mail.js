import axios from "axios";

import * as actionTypes from "./actionTypes";


const mailStart = (loading) => {
    return {
        type: actionTypes.MAIL_START,
        loading: loading
    }
}

const mailSuccess = (mails) => {
    return {
        type: actionTypes.MAIL_SUCCESS,
        mails: mails
    }
}

const mailFail = (error) => {
    return {
        type: actionTypes.MAIL_FAIL,
        err: error
    }
}

export const mailSend = (fname, lname, email, message) => {
    return dispatch => {
        const mailData = {
            fname: fname,
            lname: lname,
            email: email,
            message: message
        }
        axios.post("https://mydesign-6150a-default-rtdb.firebaseio.com/.json", mailData)
            .then(responce => {
                console.log(responce.statusText)
            })
            .catch(err => {
                dispatch(mailFail(err))
            })
    }
}

export const mailGet = () => {
    return dispatch => {
        axios.get('https://mydesign-6150a-default-rtdb.firebaseio.com/.json')
        .then(responce => {
            const mails = [];
            for (let key in responce.data) {
                mails.push({
                    ...responce.data[key],
                    id: key
                })
            };
            dispatch(mailStart(false))
            dispatch(mailSuccess(mails));
        })
        .catch(err => {
            dispatch(mailFail(err))
        })
    }
}

export const mailDelete = (id) => {
    return dispatch => {
        axios.delete('https://mydesign-6150a-default-rtdb.firebaseio.com/'+ id + '.json')
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err)
        })
    }
}