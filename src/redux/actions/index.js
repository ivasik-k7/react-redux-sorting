import PlaceholderService from "../../services/placeholdsrv";
const srv = new PlaceholderService();

export const ACTIONS = {
    FETCH_USERS_DATA: "FET_USERS_DATA",
    FILTER_ALL: "FILTER_ALL",
    FILTER_BY_EMAIL: "FILTER_BY_EMAIL",
    FILTER_BY_SURNAME: "FILTER_BY_SURNAME",
};

export const getAllUsers = () => async (dispatch) => {
    const data = await srv.getUserData();

    dispatch({
        type: ACTIONS.FETCH_USERS_DATA,
        payload: data.data,
    });
};

export const sortUsersByDefault = () => async (dispatch) => {
    dispatch({
        type: ACTIONS.FILTER_ALL,
    });
};

export const sortUsersBySurname = () => async (dispatch) => {
    dispatch({
        type: ACTIONS.FILTER_BY_SURNAME,
    });
};

export const sortUsersByEmail = () => async (dispatch) => {
    dispatch({
        type: ACTIONS.FILTER_BY_EMAIL,
    });
};
