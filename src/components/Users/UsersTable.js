import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const UsersTable = (props) => {
    const setRows = () => (
        props.users.map((user, key) => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td className="eye">
                    <Link to={`/posts/${key}`}>
                        <div className="eye-solid icon"></div>
                    </Link>
                </td>
            </tr>
        ))
    );
    return (
        <>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>
                            Name
                            </th>
                        <th>
                            Email
                            </th>
                        <th>
                            WebSite
                        </th>
                        <th>
                            Posts
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

export default connect(mapStateToProps)(UsersTable);
