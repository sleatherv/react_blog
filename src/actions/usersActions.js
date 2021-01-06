import axios from "axios";


export const getAll = () => async (dispatch) => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
    // this.setState({
    //     users: resp.data
    // });
    dispatch({
        type: 'get_users',
        payload: resp.data
    })
};

