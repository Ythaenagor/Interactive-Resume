import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import AboutMe from "./AboutMe";
import FloorSign from "../../components/FloorSign/FloorSign";
import Experience from "./Experience";

// TODO: prop info for state
const Education = (props) => {

    // dictionary translating directions to urls
    const nextRoomLocations = {
        'right':'/aboutme',
        'down':'/experience'
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
                </Wall>

                <Wall side='down'>
                    <WallSpacer/>
                    <Door side='down'/>
                    <WallSpacer/>
                </Wall>

                <FloorSign x='82' y='23' point='right'>About Me</FloorSign>
                <FloorSign x='44' y='35' point='down'>Experience</FloorSign>

            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <AboutMe d='right' state='unloaded'/>
                <Experience d='down' state='unloaded'/>
            </div>}
        </>
    )
}

export default Education;