import {  Link } from "react-router"
import classes from "./css/Header.module.css"
import {motion} from "framer-motion"
import img from "../../public/icon.png"
export default function Header(){
    return <nav className={classes.allNav}>
        <h1>Eventura</h1>
        <nav className={classes.mynav}>
            <Link to="/"> <motion.button whileHover={{scale:1.1,fontWeight:800}}>Home</motion.button></Link>
            <Link to="/about" ><motion.button whileHover={{scale:1.1,fontWeight:800,}}>About</motion.button> </Link>
            <Link to="/add"><motion.button whileHover={{scale:1.1,fontWeight:800}}>Add</motion.button></Link>
            <Link to="/events"><motion.button whileHover={{scale:1.1,fontWeight:800}}>Events</motion.button></Link>
            <img src={img} alt="userIcon" />
        </nav>
    </nav>
}