import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './SimpleMain.css'
import TypedText from '../../components/TypedText/TypedText';
import { useNavigate } from 'react-router-dom';

const SimpleMain = () => {
    const navigate = useNavigate();

    // reference value for background canvas
    const background = useRef(null);

    // interval to handle background rendering
    var bkgdInterval;

    // list of floating squares for background
    var squares = [];

    // square generation parameters
    const square_color = 'rgba(0, 100, 100, '; // expression is finished in render function
    const max_count = 10;
    const generation_chance = 30; // percent chance of new square being generated
    const max_size = 100;

    // function to render background
    const renderBackground = (background) => {

        var canvas = background.getContext('2d');

        // if max square count has not been reached, chance to generate new square
        if(squares.length < max_count && Math.floor(Math.random() * 100) <= generation_chance){
            // generate starting parameters for new square
            var start_size = Math.floor(Math.random() * max_size);
            var x = Math.floor(Math.random() * background.width);
            var y = Math.floor(Math.random() * background.height);

            // append params to list of squares
            squares.push([x, y, start_size]);
        }

        // clear previous frame of canvas
        // this isn't a great way to do it as it hides the CSS background color, but clearRect has issues on Chrome
        canvas.fillStyle = "rgb(240, 240, 200)";
        canvas.fillRect(0, 0, background.width, background.height);

        // render and update all squares in list
        squares.forEach((square)=>{
            // set opacity proportional to size
            canvas.fillStyle = square_color + (0.5 - (square[2]/max_size)) + ')'
            // draw square
            canvas.fillRect(square[0]-(square[2]/2), square[1]-(square[2]/2), square[2], square[2]);

            // update square size
            square[2] -= 0.25;

            // if square is too small, delete it
            if(square[2] < 1){
                var delIndex = squares.indexOf(square)

                squares = squares.slice(0,delIndex).concat(squares.slice(delIndex+1))
                //squares.delete(squares.indexOf(square));
            }
        })
    }

    // on component mount
    useEffect(() => {
        // start loop of background rendering
        // eslint-disable-next-line react-hooks/exhaustive-deps
        bkgdInterval = setInterval(()=>{renderBackground(background.current)}, 30);

        // cleanup function
        return(()=> {
            clearInterval(bkgdInterval)
        })
    },[])

    return(
        <div id='wrapper'>
            <canvas ref={background}/>
            <div id='mainBody'>
                <div id='header'>
                    <div id='header-text'>
                        <h1>Hello, I'm Ethan Shilo-Draper</h1>
                        <h2>I'm a software developer, and I'm excited to work with you!</h2>
                    </div>
                    <div id='iconborder'>
                        <img id='icon' src='sprites/Avatar.gif' alt='a pixel art self-portrait'/>
                    </div>
                </div>

                <motion.div
                    id='highlights'
                    className='section'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1}}
                >
                    <p className='label'>Highlights</p>
                    <p className='bullet'><TypedText>&gt; I'm new to the field,</TypedText> and I can't wait to share my passion for problem solving with the world.</p>
                    <p className='bullet'><TypedText>&gt; I completed my Bachelor of Science</TypedText> in Software Engineering in 2023, and gained valuable knowledge and realistic experience during my studies.</p>
                    <p className='bullet'><TypedText>&gt; I am creative and detail oriented</TypedText> and committed to writing clean, efficient code that matches style guides and best practices.</p>
                </motion.div>

                <motion.div
                    id='education'
                    className='section'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1}}
                >
                    <div>
                        <p className='label'>Education</p>
                        <p className='bullet'><TypedText>&gt; High School:</TypedText> graduated from the International Baccaleaureate Program at Pioneer Valley Chinese Immersion Charter School</p>
                        <p className='bullet'><TypedText>&gt; College:</TypedText> graduated with honors and a perfect 4.0 GPA, member Phi Theta Kappa, with a Bachelor of Science in Software Engineering from New England Institute of Technology</p>   
                    </div>
                    <div className='sectionImages'>
                        <img src='https://www.ibo.org/globalassets/new-structure/icons-and-logos/images/ib-world-school-logo-1-colour.png' alt='logo of International Baccaleaureate Programme'/>
                        <img src='https://www.collegeconsensus.com/wp-content/uploads/2018/12/new-england-institute-of-technology-logo-7722.png' alt='logo of New England Institute of Technology'/>
                    </div>
                </motion.div>

                <motion.div
                    id='skill'
                    className='section'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1}}
                >
                    <p className='label'>My Proficiencies</p>
                    <div id='skillColumns'>
                        <div className='column'>
                            <TypedText>Hard Skills</TypedText>
                            <p>HTML, CSS, Javascript</p>
                            <p>SQL, MySQL, MongoDB</p>
                            <p>React, Angular, Node</p>
                            <p>C#, Java, Python</p>
                            <p>ASP.Net</p>
                        </div>
                        <div className='column'>
                            <TypedText>Soft Skills</TypedText>
                            <p>Commitment and Patience</p>
                            <p>Teamwork and communication</p>
                            <p>Technical and formal writing</p>
                            <p>Time management</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    id='skill'
                    className='section'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1}}
                >
                    <p className='label'>Experience</p>
                    <p className='bullet'><TypedText>IT Helpdesk Technician at NEIT</TypedText></p>
                    <div className='list'>
                        <p className='bullet'><TypedText>&gt;&emsp;</TypedText>Assisted in management and support of college’s IT infrastructure</p>
                        <p className='bullet'><TypedText>&gt;&emsp;</TypedText>Assisted students and faculty with technical issues in hardware and software</p>
                        <p className='bullet'><TypedText>&gt;&emsp;</TypedText>Managed and installed software and hardware across all campus computer labs</p>
                        <p className='bullet'><TypedText>&gt;&emsp;</TypedText>Worked well both independently and as part of the Help Desk team</p>
                    </div>
                    <p className='bullet'><i>Unfortunately, I do not currently have industry experience in software development, but my experience at NEIT ensures that I will not take long to adapt to a real production environment!</i></p>
                </motion.div>
            </div>

            <motion.footer
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 1}}
            >
                <p><em>Thank you for your time!</em>If I've piqued your interest, feel free to email me at <a href='mailto:ethanagor@gmail.com'>ethanagor@gmail.com</a>, or call or text at <a href='tel:+1774-571-4865'>(774)-571-4865</a>. I look forward to hearing from you!</p>
                <button id='homebutton' onClick={()=>{navigate("/")}}>Return to Landing Page</button>
            </motion.footer>
        </div>
    )
}

export default SimpleMain;