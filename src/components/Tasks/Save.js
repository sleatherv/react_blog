import React, { Component } from 'react';
import { connect } from "react-redux";
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import { Redirect } from 'react-router-dom';

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
        const {
            match: { params: { us_id, task_id } },
            tasks,
            user_id,
            title,
            add,
            edit
        } = this.props;
        const new_task = {
            userId: user_id,
            title: title,
            completed: false
        };
        if (us_id && task_id) {
            const task = tasks[us_id][task_id];
            const edited_task = {
                ...new_task,
                completed: task.completed,
                id: task.id
            };
            edit(edited_task);
        } else {
            add(new_task);
        }
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
    componentDidMount() {
        const {
            match: { params: { user_id, task_id } },
            tasks,
            changeUserId,
            changeTitle
        } = this.props;

        if (user_id && task_id) {
            const task = tasks[user_id][task_id];
            changeUserId(task.userId);
            changeTitle(task.title);
        }
    }
    render() {
        return (
            <>
                {
                    (this.props.to_return) ? <Redirect to='/tasks' /> : ''
                }
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
                        className='btn btn_save'
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