import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import Entrance from "./Entrance";
import RaisedSign from "../../components/RaisedSign/RaisedSign";
import FloorSign from "../../components/FloorSign/FloorSign";
import Skills from "./Skills";
import Education from "./Education";

// TODO: prop info for state
const AboutMe = (props) => {

    // dictionary translating directions to urls
    const nextRoomLocations = {
        'up':'/dungeon',
        'down':'/skills',
        'left':'/education'
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
                    <Door side='down'/>
                    <WallSpacer/>
                </Wall>

                <FloorSign point='up' x='45' y='9'>Entrance</FloorSign>

                <FloorSign point='left' x='10' y='22'>Education</FloorSign>

                <FloorSign x='46' y='34' point='down'>Skills</FloorSign>

                <RaisedSign x='25' y='12'>
                    <p>PLACEHOLDER - talk about how cool I am or something</p>
                </RaisedSign>

            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <Entrance d='up' state='unloaded'/>
                <Skills d='down' state='unloaded'/>
                <Education d='left' state='unloaded'/>
            </div>}
        </>
    )
}

export default AboutMe;