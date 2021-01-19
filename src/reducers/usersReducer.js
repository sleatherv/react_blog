import { GET_ALL, LOADING, ERROR } from "../types/usersTypes";

const INITIAL_STATE = {
    users: [],
    loading: false,
    error: ''
};

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: '',
            };
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

export default usersReducer;