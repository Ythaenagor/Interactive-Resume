import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import Experience from "./Experience";
import FloorSign from "../../components/FloorSign/FloorSign";

// TODO: prop info for state
const Contact = (props) => {

    // dictionary translating directions to urls
    const nextRoomLocations = {
        'up':'/experience'
    }

    return(
        <>
            <Room state={props.state} d={props.state === 'unloaded' ? props.d : 'currentRoom'} nextRooms={nextRoomLocations}>
                
                <Wall side='left'>
                    <WallSpacer/>
                </Wall>

                <Wall side='right'>
                    <WallSpacer/>
                </Wall>

                <Wall side='up'>
                    <WallSpacer/>
                    <Door side='up'/>
                    <WallSpacer/>
                </Wall>

                <Wall side='down'>
                    <WallSpacer/>
                </Wall>

                <FloorSign x='44' y='9' point='up'>Experience</FloorSign>

            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <Experience d='up' state='unloaded'/>
            </div>}
        </>
    )
}

export default Contact;