import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../utility";

const initialState = {
    pages: [
        {name:'საძინებელი', value:'bedroom'},
        {name:'სამზარეულო', value:'kitchen'},
        {name:'საბავშვო', value:'children'},
        {name:'მისაღები', value:'livingroom'},
        {name:'საოფისე', value:'office'},
        {name:'დასრულებული', value:'done'},
        {name:'სხვა', value:'other'},
        {name:'კარუსელი', value:'slideshow'}
    ],
    error: false,
    loading: false
}

const catStart = (state, action) => {
    return updateObject (state, {error: false, loading: true})
};

const catFail = (state, action) => {
    return updateObject(state, {error: action.error, loading: false})
};

const catSuccess = (state, action) => {
    return updateObject(state, {error: false, loading: false});
};



const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CAT_SUCCESS: return catSuccess(state, action);
        case actionTypes.CAT_FAIL: return catFail(state, action);
        case actionTypes.CAT_START: return catStart(state, action)
        default:
            return state
    }
};

export default categoryReducer;