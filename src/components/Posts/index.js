
import React, { Component } from 'react'
import { connect } from 'react-redux';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import * as usersActions from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

const { getAll: getAllUsers } = usersActions;
const { getPostsByUser: getPostsByUser } = postsActions;
class Posts extends Component {
    async componentDidMount() {
        const {
            getAllUsers,
            getPostsByUser,
            match: { params: { key } },
        } = this.props;

        if (!this.props.usersReducer.users.length) {
            await this.props.getAllUsers();
        }
        if (this.props.usersReducer.error) {
            return;
        }
        if (!('posts_key' in this.props.usersReducer.users[key])) {
            this.props.getPostsByUser(key);
        }
    }
    setUser = () => {
        const {
            usersReducer,
            match: { params: { key } },
        } = this.props;
        if (usersReducer.error) {
            return <Fatal message={usersReducer.error} />
        }
        if (!usersReducer.users.length || usersReducer.loading) {
            return <Spinner />
        }
        const name = usersReducer.users[key].name;

        return <h1>Posts by {name}</h1>;
    };
    setPosts = () => {
        const {
            usersReducer,
            usersReducer: { users },
            postsReducer,
            postsReducer: { posts },
            match: { params: { key } },
        } = this.props;
        if (!users.length) return;
        if (usersReducer.erro) return;

        if (postsReducer.loading) {
            return <Spinner />
        }
        if (postsReducer.error) {
            return <Fatal message={postsReducer.error} />
        }
        if (!posts.length) return;
        if (!('posts_key' in users[key])) return;

        const { posts_key } = users[key];

        return posts[posts_key].map((post) => (
            <div className='pub_title'>
                <h2>{post.title}</h2>
                <h3>{post.body}</h3>
            </div>
        ));
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.setUser()}
                {this.setPosts()}
            </div>
        )
    }
}

const mapStateToProps = ({ usersReducer, postsReducer }) => {
    return {
        usersReducer,
        postsReducer,
    };
};

const mapDispatchToProps = {
    getAllUsers,
    getPostsByUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
