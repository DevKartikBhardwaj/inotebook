import React from 'react'

function Alert(props) {
    return (
        <div class="alert alert-warning" role="alert">
            {props.message}
        </div>
    )
}

export default Alert
