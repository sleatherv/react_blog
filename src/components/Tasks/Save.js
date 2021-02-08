import React, { Component } from 'react';
import { connect } from "react-redux";
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import { redirect } from 'react-router-dom';

import * as tasksActions from '../../actions/tasksActions';

class Save extends Component {

    changeUserId = (event) => {
        this.props.changeUserId(event.target.value)
    }

    changeTitle = (e) => {
        this.props.changeTitle(e.target.value);
    }

    saveTask = (e) => {
        e.preventDefault();
        const { user_id, title, add } = this.props;
        const new_task = {
            userId: user_id,
            title: title,
            completed: false
        };
        add(new_task);
    }
    disableButton = () => {
        const { user_id, title, loading } = this.props;
        if (loading) {
            return true;
        }
        if (!user_id || !title) {
            return true;
        }
        return false;
    }
    showAction = () => {
        const { error, loading } = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <Fatal message='Try again' />
        }
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
                    <input
                        type='submit'
                        value='Save task'
                        onClick={this.saveTask}
                        disabled={this.disableButton()}
                    />
                    {this.showAction()}
                </form>
            </>
        )
    }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(Save);