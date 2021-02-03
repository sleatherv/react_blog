import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tasksActions from '../../actions/tasksActions';

class Tasks extends Component {
    componentDidMount() {
        this.props.getAllTasks();
    }
    render() {
        console.log(this.props);
        return (
            <>
                Tasks say Hello
            </>
        )
    }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;


export default connect(mapStateToProps, tasksActions)(Tasks);