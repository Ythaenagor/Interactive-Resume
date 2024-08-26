import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import Entrance from "./Entrance";
import RaisedSign from "../../components/RaisedSign/RaisedSign";
import FloorSign from "../../components/FloorSign/FloorSign";

// TODO: prop info for state
const AboutThis = (props) => {

    // dictionary translating directions to urls
    const nextRoomLocations = {
        'left':'/dungeon'
    }

    return(
        <>
            <Room state={props.state} d={props.state === 'unloaded' ? props.d : 'currentRoom'} nextRooms={nextRoomLocations}>
                
                <Wall side='left'>
                    <WallSpacer/>
                    <Door side='left'/>
                    <WallSpacer/>
                </Wall>

                <Wall side='right'>
                    <WallSpacer/>
                </Wall>

                <Wall side='up'>
                    <WallSpacer/>
                </Wall>

                <Wall side='down'>
                    <WallSpacer/>
                </Wall>

                <FloorSign point='left' x='5' y='22'>Entrance</FloorSign>

                <RaisedSign x='27' y='4' width='50'>
                    <p>This interactive resume was inspired by early Legend of Zelda games and my love of vintage computers. It is written in React.js, and uses Framer Motion for animations on the landing page and the simple layout. All other components, animations, and miscellaneous code was written by me. I also created all sprites and backgrounds using Aseprite.</p>
                </RaisedSign>

                <RaisedSign x='23' y='33' highlight>
                    <a href="https://github.com/eshilo-draper/Interactive-Resume" target="_blank" rel="noreferrer"><p>Click here to view the code behind this!</p></a>
                </RaisedSign>

            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <Entrance d='left' state='unloaded'/>
            </div>}
        </>
    )
}

export default AboutThis;