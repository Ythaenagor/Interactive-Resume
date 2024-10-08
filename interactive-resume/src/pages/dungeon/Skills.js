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

                <FloorSign point='up' x='40' y='7'>About Me</FloorSign>

                <FloorSign point='left' x='5' y='18'>Experience</FloorSign>

                <RaisedSign x='26' y='15' width='22' highlight>
                    <h1>My Hard Skills</h1>
                </RaisedSign>
                <RaisedSign x='14' y='24' width='34'>
                    <ul>
                        <li>&gt; HTML, CSS, Javascript</li>
                        <li>&gt; SQL, MySQL, MongoDB</li>
                        <li>&gt; React, Angular, Node</li>
                        <li>&gt; C#, Java, Python</li>
                        <li>&gt; ASP.Net</li>
                    </ul>
                </RaisedSign>

                <RaisedSign x='53' y='15' width='22' highlight>
                    <h1>My Soft Skills</h1>
                </RaisedSign>
                <RaisedSign x='53' y='24' width='37'>
                    <ul>
                        <li>&gt; Commitment and Patience</li>
                        <li>&gt; Teamwork, communication</li>
                        <li>&gt; Technical/formal writing</li>
                        <li>&gt; Time management</li>
                    </ul>
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