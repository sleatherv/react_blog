import axios from "axios";
import {
    UPDATE,
    UPDATE_COMM,
    LOADING,
    ERROR,
    LOADING_COMM,
    ERROR_COMM
} from "../types/postsTypes";
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
            type: UPDATE,
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

export const openClose = (posts_key, com_key) => (dispatch, getState) => {
    const { posts } = getState().postsReducer;
    const selected = posts[posts_key][com_key];

    const updated = {
        ...selected,
        open: !selected.open
    };

    const updated_posts = [...posts];
    updated_posts[posts_key] = [
        ...posts[posts_key]
    ];

    updated_posts[posts_key][com_key] = updated;

    dispatch({
        type: UPDATE,
        payload: updated_posts
    });

}

export const getComments = (posts_key, com_key) => async (dispatch, getState) => {
    dispatch({
        type: LOADING_COMM,
    });
    const { posts } = getState().postsReducer;
    const selected = posts[posts_key][com_key];
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`);

        const updated = {
            ...selected,
            comments: response.data
        };

        const updated_posts = [...posts];
        updated_posts[posts_key] = [
            ...posts[posts_key]
        ];

        updated_posts[posts_key][com_key] = updated;

        dispatch({
            type: UPDATE_COMM,
            payload: updated_posts
        });
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: ERROR_COMM,
            payload: 'Comments not available'
        });
    }

}