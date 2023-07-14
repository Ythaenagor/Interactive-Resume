import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import Experience from "./Experience";
import FloorSign from "../../components/FloorSign/FloorSign";
import RaisedSign from "../../components/RaisedSign/RaisedSign";

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
                    <WallSpacer/>
                    <WallSpacer/>
                    <Door side='up'/>
                    <WallSpacer/>
                </Wall>

                <Wall side='down'>
                    <WallSpacer/>
                </Wall>

                <FloorSign x='66.5' y='9' point='up'>Experience</FloorSign>

                <RaisedSign x='6' y='6' width='50'>
                    <h1>Thank you for your time! If I've piqued your interest, here's how you can contact me:</h1>
                </RaisedSign>

                <RaisedSign x='8.5' y='17' highlight>
                    <h1>E-mail:</h1>
                </RaisedSign>
                <RaisedSign x='25' y='17.5'>
                    <a href="mailto:ethanagor@gmail.com">ethanagor@gmail.com</a>
                </RaisedSign>

                <RaisedSign x='9.6' y='25' highlight>
                    <h1>Phone:</h1>
                </RaisedSign>
                <RaisedSign x='25' y='25.5'>
                    <a href='tel:+1774-571-4865'>(774)-571-4865</a>
                </RaisedSign>

                <RaisedSign x='6.1' y='33.3' highlight>
                    <h1>LinkedIn:</h1>
                </RaisedSign>

                <RaisedSign x='25' y='33.8'>
                    <a href="www.linkedin.com/in/ethan-shilo-draper-b19843270">My LinkedIn</a>
                </RaisedSign>

                <RaisedSign x='47' y='33' highlight>
                    <h1>I look forward to hearing from you!</h1>
                </RaisedSign>

            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <Experience d='up' state='unloaded'/>
            </div>}
        </>
    )
}

export default Contact;