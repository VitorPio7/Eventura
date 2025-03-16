import style from '../css/BadgeSuccess.module.css';
import { FaCheck } from "react-icons/fa";


export default function BadgeSuccess(){
    return <div className={style.badge}>
         <FaCheck style={{"color":"#5D8736"}}/>  
        <p>Your project was saved.</p>
    </div>
}