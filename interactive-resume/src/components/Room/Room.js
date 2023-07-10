import React, { useEffect } from 'react';

import './Room.css';
import Avatar from '../Avatar/Avatar';

const Room = (props) => {

    // on component mount
    useEffect(() => {
        // prevent scrolling on any page containing a room
        // this is an ugly solution but React prevents CSS from targeting the root HTML element
        document.documentElement.style.overflow='hidden'
    })

    // return page as JSX
    return (
        <div className="testroom" id={props.d}>
            {props.state !== 'unloaded' && <Avatar locations={props.nextRooms}/>}
            {props.children}
        </div>
    )
}

export default Room;