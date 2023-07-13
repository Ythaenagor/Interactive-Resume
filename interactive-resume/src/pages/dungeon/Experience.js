import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import Education from "./Education";
import FloorSign from "../../components/FloorSign/FloorSign";
import Skills from "./Skills";
import Contact from "./Contact";

// TODO: prop info for state
const Experience = (props) => {

    // dictionary translating directions to urls
    const nextRoomLocations = {
        'right':'/skills',
        'up':'/education',
        'down':'/contact'
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

                <FloorSign x='45' y='9' point='up'>Education</FloorSign>
                <FloorSign x='84' y='21' point='right'>Skills</FloorSign>
                <FloorSign x='44' y='34' point='down'>Contact Me</FloorSign>

            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <Education d='up' state='unloaded'/>
                <Skills d='right' state='unloaded'/>
                <Contact d='down' state='unloaded'/>
            </div>}
        </>
    )
}

export default Experience;