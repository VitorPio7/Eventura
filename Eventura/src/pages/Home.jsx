import Style from "./css/Home.module.css";
import { Link } from "react-router";
export default function Home(){
    return <main>
        <video className={Style.playVideo} loop muted autoPlay>
            <source src="Jazz.mp4" type="video/mp4" />
        </video>
        <div className={Style.divText}>
            <h1>Organize share and see events in your concert hall</h1>
            <p>Organize concerts, workshops, and meetups. share your next adventure, connect with communities, and never miss out on local happenings!</p>
            <Link to={Style}><button className={Style.myButton}>See Events</button></Link>
        </div>
    </main>
}