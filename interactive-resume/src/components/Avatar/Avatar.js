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
        if(dy < 0 - max_speed){dy = 0 - max_speed}
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

        // game loop for movement and collision detection
        setInterval(()=>{
            // set position variables
            x += dx
            y += dy

            // apply position variables to component
            avatar.style.left = x + 'px';
            avatar.style.top = y + 'px';

            // get list of solid objects present
            const solids = document.getElementsByClassName('solid');

            // get current bounding box of avatar
            const avBox = avatar.getBoundingClientRect();

            // loop through solid objects and check for collision with avatar
            for(var object of solids){
                // get bounding box of solid
                const solidBox = object.getBoundingClientRect();

                // test for intersection between bounding boxes
                // TODO: allow movement against wall when pressing into it
                if(!(avBox.right < solidBox.left || avBox.left > solidBox.right || 
                    avBox.bottom < solidBox.top || avBox.top > solidBox.bottom)){
                    // if intersection is found, undo last movement step
                    x -= dx
                    y -= dy

                    // apply position variables to component
                    avatar.style.left = x + 'px';
                    avatar.style.top = y + 'px';
                }
            }

        }, 10)

    },[])

    return(
        <>
            <div id='avatar'/>
        </>
    )
}

export default Avatar;