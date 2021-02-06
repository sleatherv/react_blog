import React, { Component } from 'react';
import { connect } from "react-redux";
import * as tasksActions from '../../actions/tasksActions';

class Save extends Component {

    changeUserId = (event) => {
        this.props.changeUserId(event.target.value)
    }

    changeTitle = (e) => {
        this.props.changeTitle(e.target.value);
    }
    render() {
        return (
            <>
                <h1>
                    Save Task
                </h1>
                <form action="">
                    <label htmlFor="user_id">
                        <span>User id:</span>
                        <input
                            type='number'
                            value={this.props.user_id}
                            onChange={this.changeUserId}
                            id='user_id' />
                    </label>
                    <br /> <br />
                    <label htmlFor="title">
                        <span>Title:</span>
                        <input
                            type="text"
                            value={this.props.title}
                            onChange={this.changeTitle}
                            id='title' />
                    </label>
                    <br />
                    <br />
                    <button>
                        Save
                    </button>
                </form>
            </>
        )
    }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(Save);