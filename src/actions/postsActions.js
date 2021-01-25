import axios from "axios";
import { GET_BY_USER, LOADING, ERROR } from "../types/postsTypes";
import * as usersTypes from '../types/usersTypes';

const { GET_ALL: GET_ALL_USERS } = usersTypes;

export const getPostsByUser = (key) => async (dispatch, getState) => {
    dispatch({
        type: LOADING,
    });

    const { users } = getState().usersReducer;
    const { posts } = getState().postsReducer;
    const user_id = users[key].id;
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

        const news = response.data.map((post) => ({
            ...post,
            comments: [],
            open: false
        }));

        const updated_posts = [
            ...posts,
            news
        ];
        dispatch({
            type: GET_BY_USER,
            payload: updated_posts
        });
        const posts_key = updated_posts.length - 1;
        const updated_users = [...users];
        updated_users[key] = {
            ...users[key],
            posts_key
        }
        dispatch({
            type: GET_ALL_USERS,
            payload: updated_users
        });
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: 'Posts not available'
        })
    }

}

export const openClose = (posts_key, com_key) => (dispatch) => {
    console.log(posts_key, com_key);
}