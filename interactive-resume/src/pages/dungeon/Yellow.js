import { useNavigate } from "react-router-dom"
import Room from "../../components/Room/Room";

const Yellow = (props) => {
    const navigate = useNavigate()

    return(
        <Room location='/' d={props.d}>
            <p>spacer</p>
            <button onClick={() => {navigate('/green')}}>Back</button>
        </Room>
    )
}

export default Yellow;