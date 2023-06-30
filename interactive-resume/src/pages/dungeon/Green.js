import { useState } from "react";
import Room from "../../components/Room/Room";
import { exit } from "../../functions/roomfunctions";
import { useNavigate } from "react-router-dom";
import Yellow from "./Yellow";
import { useAnimate } from "framer-motion";
import Avatar from "../../components/Avatar/Avatar";

const Green = () => {
    const navigate = useNavigate()
    const [scope, animate] = useAnimate();

    return(
        <>
            <Room location='/green' d='currentRoom'>
                <button onClick={() => {exit('up', navigate)}}>Up</button>
                <button onClick={() => {exit('down', navigate)}}>Down</button>
                <button onClick={() => {exit('left', navigate)}}>Left</button>
                <button onClick={() => {exit('right', navigate)}}>Right</button>

                <Avatar/>
            </Room>
            <div className="nextRooms">
                <Yellow d='left'/>
                <Yellow d='right'/>
                <Yellow d='up'/>
                <Yellow d='down'/>
            </div>
        </>
    )
}

export default Green;