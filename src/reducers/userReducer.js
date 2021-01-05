const INITIAL_STATE = {
    users: []
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_users':
            return { ...state, users: action.payload };
        default:
            return state;
    }
}

export default userReducer;