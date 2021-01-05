import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    async componentDidMount() {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({
            users: resp.data
        });
    }
    setRows = () => (
        this.state.users.map((user) => (
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

export default Users;