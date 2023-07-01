import './Door.css'

const Door = (props) => {

    // if direction is provided, append appropriate class
    var classList = "door";
    if(props.side){
        classList += " door" + props.side;
    } else {
        // if not provided, default to down
        classList += " doordown";
    }

    return(
        <div className={classList}>

        </div>
    )
}

export default Door;