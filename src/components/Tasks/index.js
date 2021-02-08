import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import * as tasksActions from '../../actions/tasksActions';

class Tasks extends Component {
    componentDidMount() {
        if (!Object.keys(this.props.tasks).length) {
            this.props.getAllTasks();
        }
    }
    showContent = () => {
        const { tasks, loading, error } = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <Fatal />
        }
        return Object.keys(tasks).map((user_id) => (
            <div key={user_id}>
                <h2>User {user_id}</h2>
                <div className="tasks_container">
                    {this.setTasks(user_id)}
                </div>
            </div>
        ))
    }
    setTasks = (user_id) => {
        const { tasks } = this.props;
        const perUser = {
            ...tasks[user_id]
        };
        return Object.keys(perUser).map((task_id) => (
            <div key={task_id}>
                <input type='checkbox' defaultChecked={perUser[task_id].completed} />
                {perUser[task_id].title}
            </div>
        ));
    }
    render() {
        return (
            <>
                <Link to='/tasks/save'>
                    <button>Add</button>
                </Link>
                {this.showContent()}
            </>
        )
    }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;


export default connect(mapStateToProps, tasksActions)(Tasks);