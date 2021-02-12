import {
    UPDATE,
    UPDATE_COMM,
    LOADING,
    ERROR,
    LOADING_COMM,
    ERROR_COMM
} from "../types/postsTypes";

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: '',
    loading_comm: false,
    error_comm: ''

};

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: '',
            };
        case UPDATE_COMM:
            return {
                ...state,
                posts: action.payload,
                loading_comm: false,
                error_comm: '',
            };
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, error: action.payload, loading: false };
        case LOADING_COMM:
            return { ...state, loading_comm: true };
        case ERROR_COMM:
            return { ...state, error_comm: action.payload, loading_comm: false };
        default:
            return state;
    }
}

export default postsReducer;