import { useNavigate } from 'react-router-dom';
import './Landing.css'

const Landing = () => {
    const navigate = useNavigate();

    return(
        <>
            <div id='desktop'>
                <div id='desktop-inner'>
                    <p className='title'>**** Ethan Shilo-Draper, Software Engineer ****</p>
                    <p className='title'>64K RAM SYSTEM 38911 BASIC BYTES FREE</p>
                    <p className='left-aligned'>READY.</p>
                    <p className='left-aligned'>Choose how you want to view my resume:</p>
                    <button className='menu-button' onClick={()=>{navigate('/dungeon')}}>&gt; Show me the interactive version</button>
                    <button className='menu-button' onClick={()=>{navigate('/simple')}}>&gt; I'm low on time, show me the simple version</button>
                    <button className='menu-button' onClick={()=>{window.open('/resume.pdf', '_blank')}}>&gt; I'm very low on time, show me a PDF</button>
                </div>
            </div>
            <div id='mobile'>
                <div id='mobile-inner'>
                    <p className='title'>Ethan Shilo-Draper</p>
                    <p className='title'>Software Engineer</p>
                    <p className='mobile-warning'>The interactive version of this resume is not currently compatible with mobile devices. Apologies for the inconvenience.</p>
                    <button className='menu-button' onClick={()=>{navigate('/simple')}}>&gt; simple version</button>
                    <button className='menu-button' onClick={()=>{navigate('/')}}>&gt; PDF version</button>
                </div>
            </div>
        </>
    )
}

export default Landing;