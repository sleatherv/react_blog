import axios from "axios";
import {
    GET_ALL_TASKS,
    LOADING,
    ERROR,
    CHANGE_USER_ID,
    CHANGE_TITLE,
    ADDED_TASK
} from '../types/tasksTypes';

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


export const changeUserId = (user_id) => (dispatch) => {
    dispatch({
        type: CHANGE_USER_ID,
        payload: user_id
    })
}
export const changeTitle = (title) => (dispatch) => {
    dispatch({
        type: CHANGE_TITLE,
        payload: title
    })
}
export const add = (task) => async (dispatch) => {
    console.log(task)
    dispatch({
        type: LOADING
    });
    try {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`, task);
        console.log(response.data);
        dispatch({
            type: ADDED_TASK
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Try later'
        });
    }
}
