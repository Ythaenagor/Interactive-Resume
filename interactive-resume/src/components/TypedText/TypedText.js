import { motion } from "framer-motion";

// animation constants
const wholetext = {
    visible: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.05
        }
    },
}

// animation values for letters
const letter = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const Letter = (props) => {
    return(
        <motion.em
            className="letter"
            variants={letter}
        >
            {props.children}
        </motion.em>
    )
}

// replaces map function, to allow giving a key to each letter
const mapLetters = (text) => {
    var output = []
    for(var i = 0; i < text.length; i++){
        output.push(<Letter key={i}>{text[i]}</Letter>)
    }

    return output;
}

const TypedText = (props) => {
    // get input text and convert to list of letters
    const text = props.children.split("");

    return(
        <motion.span
            initial="hidden"
            whileInView="visible"
            variants={wholetext}
        >
            {mapLetters(text)}
        </motion.span>
    )
}

export default TypedText;