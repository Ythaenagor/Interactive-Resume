import './Wall.css'

// TODO: prop data
// side: side of screen where wall is located
//       valid values are "up", "down", "left", "right"
const Wall = (props) => {

    // if side is provided, append to class list
    var classList = "wall"
    if(props.side){
        classList += " wall" + props.side
    } else {
        // otherwise, default to down
        classList += " walldown"
    }

    return(
        <div className={classList}>
            {props.children}
        </div>
    )
}

export default Wall;