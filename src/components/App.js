import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        this.setState({
            users: [
                {
                    name: 'Steve',
                    email: 'steve@gmail.com',
                    link: 'steve.com'
                },
                {
                    name: 'Luis',
                    email: 'luis@gmail.com',
                    link: 'luis.com'
                }
            ]
        });
    }
    setRows = () => (
        this.state.users.map((user) => (
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.link}</td>
            </tr>
        ))
    );

    render() {
        return (
            <div className="margen">
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

export default App;