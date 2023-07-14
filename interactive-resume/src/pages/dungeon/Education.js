import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import AboutMe from "./AboutMe";
import FloorSign from "../../components/FloorSign/FloorSign";
import RaisedSign from "../../components/RaisedSign/RaisedSign";
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
                    <WallSpacer/>
                    <Door side='down'/>
                    <WallSpacer/>
                </Wall>

                <FloorSign x='82' y='23' point='right'>About Me</FloorSign>
                <FloorSign x='59' y='33' point='down'>Experience</FloorSign>

                <RaisedSign x='18' y='6' highlight>
                    <h1>High School</h1>
                </RaisedSign>

                <RaisedSign x='6' y='15' width='30'>
                    <p>Graduated from the International Baccaleaureate Program at Pioneer Valley Chinese Immersion Charter School</p>
                </RaisedSign>

                <RaisedSign x='54.5' y='6' highlight>
                    <h1>College</h1>
                </RaisedSign>

                <RaisedSign x='38' y='15' width='30'>
                    <p>Graduated with honors and a perfect 4.0 GPA, member Phi Theta Kappa, with a Bachelor of Science in Software Engineering from New England Institute of Technology</p>
                </RaisedSign>

            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <AboutMe d='right' state='unloaded'/>
                <Experience d='down' state='unloaded'/>
            </div>}
        </>
    )
}

export default Education;