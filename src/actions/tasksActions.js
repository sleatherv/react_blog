import axios from "axios";
import { GET_ALL_TASKS, LOADING, ERROR } from '../types/tasksTypes';

export const getAllTasks = () => async (dispatch) => {
    dispatch({
        type: LOADING,
    });
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({
            type: GET_ALL_TASKS,
            payload: resp.data,
        });
    } catch (error) {
        console.log(`Error: ${error.message}`);
        dispatch({
            type: ERROR,
            payload: "Tasks information not available."
        });
    }
};

