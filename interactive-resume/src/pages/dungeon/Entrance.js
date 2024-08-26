import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import FloorSign from "../../components/FloorSign/FloorSign";
import RaisedSign from "../../components/RaisedSign/RaisedSign";

import AboutThis from "./AboutThis";
import AboutMe from "./AboutMe";

// TODO: prop info for state
const Entrance = (props) => {

    // dictionary translating directions to urls
    const nextRoomLocations = {
        'right':'/aboutthis',
        'up':'home',
        'down':'/aboutme'
    }

    return(
        <>
            <Room state={props.state} d={props.state === 'unloaded' ? props.d : 'currentRoom'} nextRooms={nextRoomLocations}>
                
                <Wall side='left'>
                    <WallSpacer/>
                </Wall>

                <Wall side='right'>
                    <WallSpacer/>
                    <Door side='right'/>
                    <WallSpacer/>
                </Wall>

                <Wall side='up'>
                    <WallSpacer/>
                    <Door side='up'/>
                    <WallSpacer/>
                </Wall>

                <Wall side='down'>
                    <WallSpacer/>
                    <Door side='down'/>
                    <WallSpacer/>
                </Wall>

                <FloorSign x='40' y='7' point='up'>Back</FloorSign>
                <FloorSign x='75' y='20' point='right'>About this project</FloorSign>
                <FloorSign x='40' y='30.5' point='down'>About Me</FloorSign>

                <RaisedSign x='30' y='11'>
                    <h1 className="title">Ethan Shilo-Draper</h1>
                    <p className='centered'>Software Engineer</p>
                </RaisedSign>
                <RaisedSign x='34' y='25'>
                    <div id='paddedWrapper'>
                        <img className='keyicon' src='sprites/arrowkeys.png' alt='arrow keys' />
                        <p className='inline'>&nbsp;or&nbsp;</p>
                        <img className='keyicon' src='sprites/wasd.png' alt='WASD keys'/>
                        <p className='inline'>&nbsp;to move</p>
                    </div>
                </RaisedSign>

            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <AboutThis d='right' state='unloaded'/>
                <AboutMe d='down' state='unloaded'/>
            </div>}
        </>
    )
}

export default Entrance;