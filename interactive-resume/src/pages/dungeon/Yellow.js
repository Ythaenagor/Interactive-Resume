import { useNavigate } from "react-router-dom"
import { useState } from "react";
import Room from "../../components/Room/Room";
import { exit } from "../../functions/roomfunctions";

const Yellow = (props) => {
    const navigate = useNavigate()

    return(
        <Room location='/' d={props.d}>
            <p>spacer</p>
            <button onClick={() => {navigate('/green')}}>Back</button>
        </Room>
    )
}

export default Yellow;