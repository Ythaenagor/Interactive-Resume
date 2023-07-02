import Room from "../../components/Room/Room";
import Avatar from "../../components/Avatar/Avatar";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";

import Yellow from "./Yellow";

// TODO: prop info for state
const Green = (props) => {

    return(
        <>
            <Room location='/green' d={props.state === 'unloaded' ? props.d : 'currentRoom'}>
                {props.state !== 'unloaded' && <Avatar/>}
                
                <Wall side='left'>
                    <WallSpacer/>
                    <Door side='left'/>
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

            </Room>
            {props.state !== 'unloaded' && <div className="nextRooms">
                <Green d='left' state='unloaded'/>
                <Green d='right' state='unloaded'/>
                <Green d='up' state='unloaded'/>
                <Green d='down' state='unloaded'/>
            </div>}
        </>
    )
}

export default Green;