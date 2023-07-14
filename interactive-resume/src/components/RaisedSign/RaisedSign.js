/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import './RaisedSign.css'

// TODO: props x, y, width
const RaisedSign = (props) => {

    // reference object for sign
    var sign = useRef(null);

    // on mount
    useEffect(() => {
        // apply correct positioning and sizing to sign from props
        sign.current.style.left = props.x + 'vw';
        sign.current.style.top = props.y + 'vw';
        sign.current.style.width = props.width + 'vw';
    },[]);

    return(
        <div className={`raisedSign solid ${props.highlight?'highlighted':''}`} ref={sign}>
            {props.children}
        </div>
    )
}

export default RaisedSign;