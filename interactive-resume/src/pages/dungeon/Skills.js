import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import AboutMe from "./AboutMe";
import FloorSign from "../../components/FloorSign/FloorSign";
import RaisedSign from "../../components/RaisedSign/RaisedSign";
import Experience from "./Experience";

// TODO: prop info for state
const Skills = (props) => {

    // dictionary translating directions to urls
    const nextRoomLocations = {
        'left':'/experience',
        'up':'/aboutme'
    }

    return(
        <>
            <Room state={props.state} location='/template' d={props.state === 'unloaded' ? props.d : 'currentRoom'} nextRooms={nextRoomLocations}>
                
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
                    <Door side='up'/>
                    <WallSpacer/>
                </Wall>

                <Wall side='down'>
                    <WallSpacer/>
                </Wall>

                <FloorSign point='up' x='45' y='9'>About Me</FloorSign>

                <FloorSign point='left' x='9' y='22'>Experience</FloorSign>

                <RaisedSign>

                </RaisedSign>

            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <AboutMe d='up' state='unloaded'/>
                <Experience d='left' state='unloaded'/>
            </div>}
        </>
    )
}

export default Skills;