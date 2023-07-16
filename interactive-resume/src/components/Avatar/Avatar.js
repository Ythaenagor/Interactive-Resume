/* eslint-disable react-hooks/exhaustive-deps */
import { exit } from '../../functions/roomfunctions';
import './Avatar.css'
import { useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

// TODO: prop info about locations dict
const Avatar = (props) => {

    // navigation handler
    const navigate = useNavigate();

    // variable to store ID of gameloop (created early to prevent multiple loops)
    var gameLoopId = 0;

    // constant for max movement speed in vw per tenth of a second
    const max_speed = 0.2;

    // reference of avatar and shadow hitbox
    var avatar = useRef(null);
    var shadow = useRef(null);

    // location of avatar, initialized on component mount
    var x, y;

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

    // game loop function
    // game loop function
    const gameLoop = () => {

        // if moving right, give avatar flipped class
        if(dx > 0){
            avatar.current.classList.add('flipped');
        } else if(dx < 0){
            // if moving left, remove flipped class
            avatar.current.classList.remove('flipped');
        }

        // if moving at all, give avatar moving class
        if(dx !== 0 || dy !== 0){
            avatar.current.classList.add('moving');
        } else {
            // otherwise go back to idle
            avatar.current.classList.remove('moving');
        }

        // set position variables
        x += dx
        y += dy

        // apply position variables to component
        avatar.current.style.left = x + 'vw';
        avatar.current.style.top = y + 'vw';

        // apply to shadow (must be done separately to allow z-indexing)
        shadow.current.style.left = x + 1 + 'vw';
        shadow.current.style.top = y + 4 + 'vw';

        // get list of solid objects present
        const solids = document.getElementsByClassName('solid');

        // get current bounding box of avatar
        const avBox = shadow.current.getBoundingClientRect();

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
                avatar.current.style.left = x + 'vw';
                avatar.current.style.top = y + 'vw';
                
                // apply to shadow (must be done separately to allow z-indexing)
                shadow.current.style.left = x + 1 + 'vw';
                shadow.current.style.top = y + 4 + 'vw';
            }
        }

        // get list of doors in current room
        const doors = document.getElementsByClassName('door');

        // loop through doors and check if avatar is moving into one
        for(var door of doors){
            // get bounding box of door
            const doorBox = door.getBoundingClientRect();

            // test for intersection
            if(!(avBox.right < doorBox.left || avBox.left > doorBox.right || 
                avBox.bottom < doorBox.top || avBox.top > doorBox.bottom)){
                // if intersection is found, stop game loop
                clearInterval(gameLoopId);

                // determine direction of door and exit appropriately
                if(door.classList.contains('doorleft')){
                    exit('left', navigate, props.locations['left']);
                } else if(door.classList.contains('doorright')){
                    exit('right', navigate, props.locations['right']);
                } else if(door.classList.contains('doorup')){
                    exit('up', navigate, props.locations['up']);
                } else if(door.classList.contains('doordown')){
                    exit('down', navigate, props.locations['down']);
                } else {
                    console.log('Error: invalid door')
                }
                
            }
        }
    }

    // when component mounts
    useEffect(()=> {
        // wait for room to mount
        setTimeout(()=>{
            var entryDoor, doorShape

            // get entry direction from url, translate into avatar starting position relative to appropriate door
            const queryParameters = new URLSearchParams(window.location.search)
            switch(queryParameters.get('door')){
                case 'left':
                    // select relevant door from current room
                    entryDoor = document.getElementById('currentRoom').getElementsByClassName('doorright')[0];
                    doorShape = entryDoor.getBoundingClientRect();

                    // place avatar relative to center of door
                    avatar.current.style.top=(doorShape.top+doorShape.bottom)*0.45 + 'px';
                    avatar.current.style.left='90vw'
                    break;
                case 'right':
                    avatar.current.style.left='6vw';
                    avatar.current.style.top='22vw';
                    avatar.current.classList.add('flipped');
                    break;
                case 'up':
                    // select relevant door from current room
                    entryDoor = document.getElementById('currentRoom').getElementsByClassName('doordown')[0];
                    doorShape = entryDoor.getBoundingClientRect();

                    // place avatar relative to center of door (uses 2.05 because the exact average is slightly off for some reason)
                    avatar.current.style.left=(doorShape.left + doorShape.right) / 2.05 + 'px';
                    avatar.current.style.top='33vw';
                    console.log(avatar.current.style.top);
                    break;
                case 'down':
                    // select relevant door from current room
                    entryDoor = document.getElementById('currentRoom').getElementsByClassName('doorup')[0];
                    doorShape = entryDoor.getBoundingClientRect();
                    
                    // place avatar relative to center of door (uses 2.05 because the exact average is slightly off for some reason)
                    avatar.current.style.left=(doorShape.left + doorShape.right) / 2.05 + 'px';
                    avatar.current.style.top='2vw'
                    break;
                default:
                    break;
            }
            
            // initialize variables from above
            // getcomputedstyle uses px as unit, so this calculates vw from that
            x = parseInt(window.getComputedStyle( avatar.current, null ).getPropertyValue('left'),10) / window.innerWidth * 100;
            y = parseInt(window.getComputedStyle( avatar.current, null ).getPropertyValue('top'),10) / window.innerWidth * 100;


            // set listener for keypresses on document
            document.addEventListener('keydown', handleKeyPress);
            document.addEventListener('keyup', handleKeyRelease);

            // start game loop
            gameLoopId = setInterval(gameLoop, 10)

            // unhide avatar after first gameloop
            setTimeout(()=>{avatar.current.classList.remove('hidden');},10);

        },20)
        
        // cleanup to run on component unmount
        return function cleanup() {
            clearInterval(gameLoopId);
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('keyup', handleKeyPress);
        }
    },[])

    return(
        <>
            <div id='shadow' ref={shadow}/>
            <div id='avatar' ref={avatar} className='idle hidden'/>
        </>
    )
}

export default Avatar;