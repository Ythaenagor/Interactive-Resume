import Room from "../../components/Room/Room";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";
import Yellow from "./Yellow";

// TODO: prop info for state
const Template = (props) => {

    // dictionary translating directions to urls
    const nextRoomLocations = {
        'left':'/dungeon',
        'right':'/dungeon',
        'up':'/dungeon',
        'down':'/dungeon'
    }

    return(
        <>
            <Room state={props.state} d={props.state === 'unloaded' ? props.d : 'currentRoom'} nextRooms={nextRoomLocations}>
                
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
                <Yellow d='left' state='unloaded'/>
                <Yellow d='right' state='unloaded'/>
                <Yellow d='up' state='unloaded'/>
                <Yellow d='down' state='unloaded'/>
            </div>}
        </>
    )
}

export default Template;