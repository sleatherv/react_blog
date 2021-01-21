
import React, { Component } from 'react'
import { connect } from 'react-redux';
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
        if (!('posts_key' in this.props.usersReducer.users[key])) {
            this.props.getPostsByUser(key);
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Posts</h1>
                {this.props.match.params.key}
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
