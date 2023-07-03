import React from 'react';

import Avatar from '../Avatar/Avatar';

const Room = (props) => {

    // return page as JSX
    return (
        <div className="testroom" id={props.d}>
            {props.state !== 'unloaded' && <Avatar locations={props.nextRooms}/>}
            {props.children}
        </div>
    )
}

export default Room;