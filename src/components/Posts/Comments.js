import React from 'react';
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";

const Comments = (props) => {

    if (props.error_comm) {
        return <Fatal message={props.error_comm} />
    }
    if (props.loading_comm && !props.comments.length) {
        return <Spinner />
    }
    const setComments = () => (
        props.comments.map((comment) => (
            <li key={comment.id}>
                <b>
                    <u>
                        {comment.email}
                    </u>
                </b>
                <br />
                <p>{comment.body}</p>
            </li>
        ))
    );
    return (
        <ul>
            {setComments()}
        </ul>
    )
}

const mapStateToProps = ({ postsReducer }) => postsReducer;


export default connect(mapStateToProps)(Comments);