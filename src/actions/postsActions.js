import axios from "axios";
import { GET_BY_USER, LOADING, ERROR } from "../types/postsTypes";

export const getPostsByUser = (key) => async (dispatch, getState) => {
    const { users } = getState().usersReducer;
    const { posts } = getState().postsReducer;
    const user_id = users[key].id;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    const updated_posts = [
        ...posts,
        response.data
    ];
    dispatch({
        type: GET_BY_USER,
        payload: updated_posts
    });
}