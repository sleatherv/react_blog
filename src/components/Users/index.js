import React, { Component } from 'react';
import { connect } from "react-redux";
import Spinner from '../General/Spinner';

import * as usersActions from '../../actions/usersActions';
class Users extends Component {
    componentDidMount() {
        this.props.getAll();
    }
    setContent = () => {
        if (this.props.loading) {
            return <Spinner />
        }
        return (
            <table className="tabla">
                <thead>
                    <tr>
                        <th>
                            Nombre
                            </th>
                        <th>
                            Correo
                            </th>
                        <th>
                            Enlace
                            </th>
                    </tr>
                </thead>
                <tbody>
                    {this.setRows()}
                </tbody>
            </table>


        )
    }
    setRows = () => (
        this.props.users.map((user) => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
            </tr>
        ))
    );
    render() {
        return (
            <div>
                {this.setContent()}
            </div>
        );
    }
};

const mapStateToProps = (reducers) => {
    return reducers.usersReducer;
}

export default connect(mapStateToProps, usersActions)(Users);