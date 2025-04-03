import Style from './css/About.module.css';
import {useScroll, useTransform,motion} from 'framer-motion'
import {useNavigate} from 'react-router';
export default function About(){
    let navigate = useNavigate();
     const {scrollY}= useScroll();
     const opacityVideo = useTransform(scrollY,[0,200,300],[1,0.7,0.4])
    return <main className={Style.main}>
        <div className={Style.videoMotion} style={{backgroundColor:"black"}} >
            <motion.video style={{opacity:opacityVideo}} className={Style.playVideo} loop muted autoPlay> 
                <source  src="mainVideo.mp4" type="video/mp4" />
            </motion.video>
        </div>
        <div className={Style.info}>
            <div>
            <h1>Your gateway to unforgettable experiences, manage tasks, create and enjoy sharing!</h1>
            <p>Transform your venue into the heart of entertainment! Our platform lets you easily publish and promote events at your house of shows. Reach thousands of event-goers, manage bookings, and boost your visibility. Whether it’s live music, comedy nights, or private parties, we help you fill your space and create unforgettable experiences. Start hosting today!</p>
            </div>
        </div>
        <div className={Style.mainBoxdiv}>
            <div className={Style.box}>
                
                <h1>Explore, connect, and enjoy, your next adventure starts here!</h1>
                <motion.button whileHover={{scale:1.05, transition:{type:"spring",bounce:0.7}}} onClick={()=>navigate('/events')}>Explore your events</motion.button>
            </div>
        </div>
    </main>
}