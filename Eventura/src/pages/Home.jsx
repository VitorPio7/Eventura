import Style from "./css/Home.module.css";
import { Link } from "react-router";
import {motion} from 'framer-motion';
export default function Home(){
    return <main>
        <video className={Style.playVideo} loop muted autoPlay>
            <source src="Jazz.mp4" type="video/mp4" />
        </video>
        <div className={Style.divText}>
            <h1>Organize share and see events in your concert hall</h1>
            <p>Organize concerts, workshops, and meetups. share your next adventure, connect with communities, and never miss out on local happenings!</p>
            <Link to="/events" ><motion.button  whileHover={{scale:1.2, transition:{type:"spring",bounce:0.7}}} className={Style.myButton}>See Events</motion.button></Link>
        </div>
    </main>
}