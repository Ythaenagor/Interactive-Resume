import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import FloorSign from "../../components/FloorSign/FloorSign";
import RaisedSign from "../../components/RaisedSign/RaisedSign";
import Experience from "./Experience";

// TODO: prop info for state
const ITDesk = (props) => {

    // dictionary translating directions to urls
    const nextRoomLocations = {
        'right':'/experience',
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
                    <WallSpacer/>
                    <WallSpacer/>
                </Wall>

                <Wall side='up'>
                    <WallSpacer/>
                </Wall>

                <Wall side='down'>
                    <WallSpacer/>
                </Wall>

                <FloorSign x='75' y='12' point='right'>Most Recent Experience</FloorSign>

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
            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <Experience d='right' state='unloaded'/>
            </div>}
        </>
    )
}

export default ITDesk;