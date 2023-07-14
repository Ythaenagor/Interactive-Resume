import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import Education from "./Education";
import FloorSign from "../../components/FloorSign/FloorSign";
import Skills from "./Skills";
import Contact from "./Contact";
import RaisedSign from "../../components/RaisedSign/RaisedSign";

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
                    <WallSpacer/>
                    <Door side='up'/>
                    <WallSpacer/>
                </Wall>

                <Wall side='down'>
                    <WallSpacer/>
                    <WallSpacer/>
                    <WallSpacer/>
                    <Door side='down'/>
                    <WallSpacer/>
                </Wall>

                <FloorSign x='59.3' y='7' point='up'>Education</FloorSign>
                <FloorSign x='84' y='21' point='right'>Skills</FloorSign>
                <FloorSign x='66' y='32' point='down'>Contact Me</FloorSign>

                <RaisedSign highlight x='6' y='6'>
                    <h1>NEIT-IT Help Desk Technician</h1>
                </RaisedSign>
                <RaisedSign x='6' y='15.5' width='50'>
                    <ul>
                        <li>&gt; Assisted in management and support of college’s IT infrastructure</li>
                        <li>&gt; Assisted students and faculty with technical issues in hardware and software</li>
                        <li>&gt; Managed and installed software and hardware across all campus computer labs</li>
                        <li>&gt; Worked well both independently and as part of the Help Desk team</li>
                    </ul>
                </RaisedSign>
                <RaisedSign x='56' y='15.5' width='25' highlight small>
                    <p>Unfortunately, I do not currently have industry experience in software development, but my experience at NEIT ensures that I will not take long to adapt to a real production environment!</p>
                </RaisedSign>

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