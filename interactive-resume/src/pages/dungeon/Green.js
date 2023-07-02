import Room from "../../components/Room/Room";
import Yellow from "./Yellow";
import Avatar from "../../components/Avatar/Avatar";
import Wall from "../../components/Wall/Wall";
import Door from "../../components/Door/Door";
import WallSpacer from "../../components/WallSpacer/WallSpacer";

const Green = () => {

    return(
        <>
            <Room location='/green' d='currentRoom'>
                <Avatar/>
                
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
            <div className="nextRooms">
                <Yellow d='left'/>
                <Yellow d='right'/>
                <Yellow d='up'/>
                <Yellow d='down'/>
            </div>
        </>
    )
}

export default Green;