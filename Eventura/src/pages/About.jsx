import Style from './css/About.module.css';
import {useNavigate} from 'react-router';
export default function About(){
    let navigate = useNavigate();
    return <main>
        <div>
            <video className={Style.playVideo} loop muted autoPlay> 
                <source src="mainVideo.mp4" type="video/mp4" />
            </video>
        </div>
        <div className={Style.info}>
            <h1>Your gateway to unforgettable experiences, manage tasks, create and enjoy sharing!</h1>
            <p>Transform your venue into the heart of entertainment! Our platform lets you easily publish and promote events at your house of shows. Reach thousands of event-goers, manage bookings, and boost your visibility. Whether it’s live music, comedy nights, or private parties, we help you fill your space and create unforgettable experiences. Start hosting today!</p>
        </div>
        <div className={Style.mainBoxdiv}>
            <div className={Style.box}>
                <h1>Explore, connect, and enjoy, your next adventure starts here!</h1>
                <button onClick={()=>navigate('/events')}>Explore your events</button>
            </div>
        </div>
    </main>
}