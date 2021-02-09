import axios from "axios";

import * as actionTypes from "./actionTypes";

export const catStart = () => {
    return{
        type: actionTypes.CAT_START
};

};
export const catFail = () => {
    return {
        type: actionTypes.CAT_FAIL
    }
};

export const catSuccess = (cat) => {
    return {
        type: actionTypes.CAT_SUCCESS,
        pages: cat
    }
};

export const catRemove = (cat) => {
    return dispatch => {
        const removeCat = {
            name: cat.name,
        }
        axios.delete('https://mydesign-6150a-default-rtdb.firebaseio.com/pages.json', removeCat)
            .then(response => {
                console.log(response);
                dispatch(catSuccess({name: response.name, value:response.value}));
            })
            .catch(err => {
                console.log(err)
            })
    };
};

export const catAdd = (cat) => {
    return dispatch => {
        axios.post('https://mydesign-6150a-default-rtdb.firebaseio.com/pages.json', cat)
            .then(response => {
                console.log(response);
                dispatch(catSuccess({name: response.name, value:response.value}));
            })
            .catch(err => {
                console.log(err)
            });
    };
};

export const cat = () => {
    return dispatch => {
        axios.get("https://mydesign-6150a-default-rtdb.firebaseio.com/pages.json")
            .then(response => {
                console.log(response.data)
                dispatch(catSuccess(response.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}
