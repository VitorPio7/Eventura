import Style from "./css/SearchBar.module.css"
import { FaSearch } from "react-icons/fa";

export default function SearchBar({sendElement,onSubmit}){
    return <form onSubmit={onSubmit} className={Style.form}>
    <input type="search" required placeholder="Search events" ref={sendElement} minLength="3" className={Style.input} />
    <button  className={Style.button} ><FaSearch /></button>
</form> 
}