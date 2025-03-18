import style from '../css/BadgeSuccess.module.css';
import style2 from "../css/BadgeError.module.css"
import { FaCheck, } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";


export default function Badge({type,text}){
    let patch; 
    if(type === "error"){
        patch =<AiFillCloseCircle style={{"color":"black"}}/>
    }else if(type === "success"){
       patch = <FaCheck style={{"color":"#5D8736"}}/>
    }
    return <div className={type==="success"?style.badge:style2.badge}>
         {patch}
        <p>{text}</p>
    </div>
}