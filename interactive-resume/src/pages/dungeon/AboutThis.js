import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import Entrance from "./Entrance";
import RaisedSign from "../../components/RaisedSign/RaisedSign";

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

                <RaisedSign x='25' y='8'>
                    <p>PLACEHOLDER - talk about this project</p>
                </RaisedSign>

                <RaisedSign x='25' y='33'>
                    <a href="https://github.com/eshilo-draper/Interactive-Resume">Click here to view the code behind this!</a>
                </RaisedSign>

            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <Entrance d='left' state='unloaded'/>
            </div>}
        </>
    )
}

export default AboutThis;