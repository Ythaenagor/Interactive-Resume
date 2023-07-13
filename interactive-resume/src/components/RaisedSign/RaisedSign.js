import { useEffect, useRef } from 'react';
import './RaisedSign.css'

const RaisedSign = (props) => {

    // reference object for sign
    var sign = useRef(null);

    // on mount
    useEffect(() => {
        // apply correct positioning to sign from props
        sign.current.style.left = props.x + 'vw';
        sign.current.style.top = props.y + 'vw';
    },[]);

    return(
        <div className='raisedSign solid' ref={sign}>
            {props.children}
        </div>
    )
}

export default RaisedSign;