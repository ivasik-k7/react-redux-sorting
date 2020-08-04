import {ACTIONS} from "../actions/index";

const initialState = {
    userData: [],
};

const sorter = (arr, sortKey) => {
    return arr.slice().sort((a, b) => {
        const firstElem = a[sortKey].toString().toLowerCase();
        const secondElem = b[sortKey].toString().toLowerCase();
        if (firstElem > secondElem) {
            return 1;
        }
        if (firstElem < secondElem) {
            return -1;
        }
        return 0;
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_USERS_DATA:
            return {...state, userData: action.payload};
        case ACTIONS.FILTER_ALL:
            return {...state, userData: state.userData.length > 0 ? sorter(state.userData, "id") : state.userData};
        case ACTIONS.FILTER_BY_SURNAME:
            return {...state, userData: state.userData.length > 0 ? sorter(state.userData, "last_name") : state.userData};
        case ACTIONS.FILTER_BY_EMAIL:
            return {...state, userData: state.userData.length > 0 ? sorter(state.userData, "email") : state.userData};
        default:
            return state;
    }
};

export default reducer;
