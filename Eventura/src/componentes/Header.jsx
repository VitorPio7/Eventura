import { NavLink } from "react-router"
import classes from "./css/Header.module.css"
import img from "../../public/icon.png"
export default function Header(){
    return <nav className={classes.allNav}>
        <h1>Eventura</h1>
        <nav className={classes.mynav}>
            <NavLink  className={({isActive})=>{
                return isActive ? classes.active : undefined
            }}  to="/"> Home</NavLink>
            <NavLink className={({isActive})=>{
                return isActive ? classes.active : undefined
            }}  to="/about" >About</NavLink>
            <NavLink className={({isActive})=>{
                return isActive ? classes.active : undefined
            }} to="/add">Add</NavLink>
            <NavLink className={({isActive})=>{
                return isActive ? classes.active : undefined
            }} to="/events">Events</NavLink>
            <img src={img} alt="userIcon" />
        </nav>
    </nav>
}