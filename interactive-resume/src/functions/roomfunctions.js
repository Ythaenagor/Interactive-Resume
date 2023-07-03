const exit = (direction, navigator, location) => {
    // get current and next room
    var currentRoom = document.getElementById('currentRoom')
    var nextRoom = document.getElementById(direction)

    // get location of next room
    var nextLoc = [
        parseInt(window.getComputedStyle( nextRoom, null ).getPropertyValue('left'),10),
        parseInt(window.getComputedStyle( nextRoom, null ).getPropertyValue('top'),10)
    ]

    // loop through movement until final location reached
    var i=0
    var exitLoop = setInterval(() => {
        currentRoom.style.left = (0 - nextLoc[0] * (0+i)).toFixed(0) + 'px'
        currentRoom.style.top = (0 - nextLoc[1] * (0+i)).toFixed(0) + 'px'

        nextRoom.style.left = nextLoc[0] * (1-i) + 'px'
        nextRoom.style.top = nextLoc[1] * (1-i) + 'px'
        
        i+=0.01;

        if(i>1){
            clearInterval(exitLoop);
            navigator(location + '?door=' + direction)
        }

    },10)
}

export { exit }