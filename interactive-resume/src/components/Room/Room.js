import React from 'react';

const Room = (props) => {

    // return page as JSX
    return (
        <div
            className="testroom"
            id={props.d}
        >
            {props.children}
        </div>
    )
}

export default Room;