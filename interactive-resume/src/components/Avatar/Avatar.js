/* eslint-disable react-hooks/exhaustive-deps */
import './Avatar.css'
import { useEffect } from 'react';

const Avatar = () => {

    // constant for max movement speed
    const max_speed = 2

    // avatar and location of avatar, all initialized on component mount
    var avatar, x, y

    // movement variables
    var dx = 0, dy = 0;

    // handlers for keys being pressed and released
    const handleKeyPress = (event) => {
        // map WASD and arrow keys to appropriate movement values
        switch(event.key){
            case 'w':
            case 'ArrowUp':
                dy -= max_speed;
                break;
            case 'a':
            case 'ArrowLeft':
                dx -= max_speed;
                break;
            case 's':
            case 'ArrowDown':
                dy += max_speed;
                break;
            case 'd':
            case 'ArrowRight':
                dx += max_speed;
                break;
            default:
                break;
        }

        // ensure neither velocity goes above max or below negative max
        if(dx > max_speed){dx = max_speed}
        if(dx < 0 - max_speed){dx = 0 - max_speed}
        if(dy > max_speed){dy = max_speed}
        if(dy < 0 - max_speed){dy = -1}
    }

    const handleKeyRelease = (event) => {
        switch(event.key){
            case 'w':
            case 'ArrowUp':
                dy += max_speed;
                break;
            case 'a':
            case 'ArrowLeft':
                dx += max_speed;
                break;
            case 's':
            case 'ArrowDown':
                dy -= max_speed;
                break;
            case 'd':
            case 'ArrowRight':
                dx -= max_speed;
                break;
            default:
                break;
        }
    }

    // when component mounts
    useEffect(()=> {
        // initialize variables from above
        avatar = document.getElementById('avatar');
        x = parseInt(window.getComputedStyle( avatar, null ).getPropertyValue('left'),10)
        y = parseInt(window.getComputedStyle( avatar, null ).getPropertyValue('top'),10)

        // set listener for keypresses on document
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('keyup', handleKeyRelease);

        // loop to translate movement variables to document
        setInterval(()=>{
            // set position variables
            x += dx
            y += dy

            // apply position variables to component
            avatar.style.left = x + 'px';
            avatar.style.top = y + 'px';
        }, 10)

    },[])

    return(
        <>
            <div id='avatar'/>
        </>
    )
}

export default Avatar;