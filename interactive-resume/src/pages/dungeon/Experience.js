import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import Education from "./Education";
import FloorSign from "../../components/FloorSign/FloorSign";
import Skills from "./Skills";
import Contact from "./Contact";
import RaisedSign from "../../components/RaisedSign/RaisedSign";
import ITDesk from "./ITDesk";

// TODO: prop info for state
const Experience = (props) => {

    // dictionary translating directions to urls
    const nextRoomLocations = {
        'right':'/skills',
        'up':'/education',
        'down':'/contact',
        'left':'/itdesk'
    }

    return(
        <>
            <Room state={props.state} d={props.state === 'unloaded' ? props.d : 'currentRoom'} nextRooms={nextRoomLocations}>
                
                <Wall side='left'>
                    <WallSpacer/>
                    <Door side='left'/>
                    <WallSpacer/>
                    <WallSpacer/>
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

                <FloorSign x='55' y='7' point='up'>Education</FloorSign>
                <FloorSign x='75' y='21' point='right'>&nbsp;&nbsp;&nbsp;Skills</FloorSign>
                <FloorSign x='5' y='9.5' point='left'>Previous Experience</FloorSign>
                <FloorSign x='62' y='29' point='down'>Contact Me</FloorSign>

                <RaisedSign highlight x='6' y='6'>
                    <h1>CrossTrainer - Junior Web Developer</h1>
                </RaisedSign>
                <RaisedSign x='6' y='17.5' width='58'>
                    <ul>
                        <li>&gt; Maintained and updated proprietary web-based software for both desktop and mobile</li>
                        <li>&gt; Developed custom WordPress plugins for company and client sites</li>
                        <li>&gt; Assisted in site maintenance and LMS mgmt</li>
                        <li>&gt; Used both WordPress editors and custom HTML/CSS to customize client sites</li>
                        <li>&gt; Completed and tested quality work in a timely manner</li>
                    </ul>
                </RaisedSign>
            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <Education d='up' state='unloaded'/>
                <Skills d='right' state='unloaded'/>
                <Contact d='down' state='unloaded'/>
                <ITDesk d='left' state='unloaded'/>
            </div>}
        </>
    )
}

export default Experience;