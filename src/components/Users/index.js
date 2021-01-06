import React, { Component } from 'react';
import { connect } from "react-redux";

import * as usersActions from '../../actions/usersActions';
class Users extends Component {
    componentDidMount() {
        this.props.getAll();
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
            </div>
        );
    }
};

const mapStateToProps = (reducers) => {
    return reducers.usersReducer;
}

export default connect(mapStateToProps, usersActions)(Users);