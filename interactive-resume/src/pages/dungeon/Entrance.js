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

                <FloorSign x='48' y='9' point='up'>Back</FloorSign>
                <FloorSign x='70' y='20' point='right'>About this project</FloorSign>
                <FloorSign x='45' y='33' point='down'>About Me</FloorSign>

                <RaisedSign x='40' y='20'><p>NAME WILL GO HERE</p></RaisedSign>
                <RaisedSign x='30' y='25'><p>(WASD) or (ARROWS) to move</p></RaisedSign>

            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <AboutThis d='right' state='unloaded'/>
                <AboutMe d='down' state='unloaded'/>
            </div>}
        </>
    )
}

export default Entrance;