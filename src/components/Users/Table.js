import React from 'react';
import { connect } from "react-redux";

const Table = (props) => {
    const setRows = () => (
        props.users.map((user) => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
            </tr>
        ))
    );
    return (
        <>
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
                    {setRows()}
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer;
}

export default connect(mapStateToProps)(Table);
