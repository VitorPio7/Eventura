import Style from "./css/SearchBar.module.css"
import { FaSearch } from "react-icons/fa";

export default function SearchBar({sendElement,onSubmit}){
    return <form onSubmit={onSubmit} className={Style.form}>
    <input type="search" placeholder="Search events" ref={sendElement} className={Style.input} />
    <button  className={Style.button} ><FaSearch /></button>
</form> 
}