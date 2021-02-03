import axios from "axios";
import { GET_ALL_TASKS, LOADING, ERROR } from '../types/tasksTypes';

export const getAllTasks = () => async (dispatch) => {
    dispatch({
        type: LOADING,
    });
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');

        const tasks = {};
        resp.data.map((tas) => (
            tasks[tas.userId] = {
                ...tasks[tas.userId],
                [tas.id]: {
                    ...tas
                }
            }
        ));
        dispatch({
            type: GET_ALL_TASKS,
            payload: tasks,
        });
    } catch (error) {
        console.log(`Error: ${error.message}`);
        dispatch({
            type: ERROR,
            payload: "Tasks information not available."
        });
    }
};

