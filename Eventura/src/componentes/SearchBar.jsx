import Style from "./css/SearchBar.module.css"
import { FaSearch } from "react-icons/fa";
import {motion} from "framer-motion"
export default function SearchBar({sendElement,onSubmit}){
    return <motion.form whileHover={{scale:1.1}} onSubmit={onSubmit} className={Style.form}>
    <input type="search" required placeholder="Search events" ref={sendElement} minLength="3" className={Style.input} />
    <motion.button whileHover={{rotate:360}} className={Style.button} ><FaSearch  /></motion.button>
</motion.form> 
}