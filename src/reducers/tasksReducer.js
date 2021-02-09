import {
    GET_ALL_TASKS,
    LOADING,
    ERROR,
    CHANGE_USER_ID,
    CHANGE_TITLE,
    SAVE,
    UPDATE
} from '../types/tasksTypes';

const INITIAL_STATE = {
    tasks: {},
    loading: false,
    error: '',
    user_id: '',
    title: '',
    to_return: ''
};

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_TASKS:
            return {
                ...state,
                tasks: action.payload,
                loading: false,
                error: '',
                to_return: false
            };
        case LOADING:
            return { ...state, loading: true };

        case ERROR:
            return { ...state, error: action.payload, loading: false };

        case CHANGE_USER_ID:
            return { ...state, user_id: action.payload };

        case CHANGE_TITLE:
            return { ...state, title: action.payload }

        case SAVE:
            return {
                ...state,
                tasks: {},
                loading: false,
                error: '',
                to_return: true,
                user_id: '',
                title: ''
            }
        case UPDATE:
            return { state, tasks: action.payload }
        default:
            return state;
    }
}

export default tasksReducer;