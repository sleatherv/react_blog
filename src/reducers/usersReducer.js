import { GET_ALL } from "../types/usersTypes";

const INITIAL_STATE = {
    users: []
};

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL:
            return { ...state, users: action.payload };
        default:
            return state;
    }
}

export default usersReducer;