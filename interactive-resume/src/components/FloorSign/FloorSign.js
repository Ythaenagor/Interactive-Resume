/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import './FloorSign.css';

// TODO: props x, y, point
const FloorSign = (props) => {

    // reference object for sign
    var sign = useRef(null);

    // on mount
    useEffect(() => {
        // apply correct positioning to sign from props
        sign.current.style.left = props.x + 'vw';
        sign.current.style.top = props.y + 'vw';
    },[]);

    return(
        <div className='floorsign' ref={sign}>
            {props.children}
            {props.point === 'right' && <p className='point pointRight'>&gt;</p>}
            {props.point === 'left' && <p className='point pointLeft'>&lt;</p>}
            {props.point === 'down' && <p className='point pointDown'>V</p>}
            {props.point === 'up' && <p className='point pointUp'>^</p>}
        </div>
    )
}

export default FloorSign;