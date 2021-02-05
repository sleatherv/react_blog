import React, { Component } from 'react'

class Save extends Component {
    render() {
        return (
            <>
                <h1>
                    Save Task
                </h1>
                User id:
                <input type='number' />
                <br />
                <br />
                Title:
                <input type="text" />
                <br />
                <br />
                <button>
                    Save
                </button>
            </>
        )
    }
}

export default Save;