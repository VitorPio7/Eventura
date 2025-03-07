import { NavLink } from "react-router"
import classes from "./css/Header.module.css"
export default function Header(){
    return <nav className={classes.allNav}>
        <h1>Eventura</h1>
        <nav className={classes.mynav}>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/add">Add</NavLink>
            <NavLink to="/events">Events</NavLink>
            <img src="icon.png" alt="userIcon" />
        </nav>
    </nav>
}