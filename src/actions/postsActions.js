import axios from "axios";
import { GET_ALL, LOADING, ERROR } from "../types/postsTypes";

export const getAll = () => async (dispatch) => {
    dispatch({
        type: LOADING,
    });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: GET_ALL,
            payload: response.data
        });
    } catch (error) {
        console.log(`Error: ${error.message}`);
        dispatch({
            type: ERROR,
            payload: "Something went wrong. Try again later."
        });
    }
}