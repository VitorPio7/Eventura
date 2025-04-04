import Style from "../css/Popup.module.css";
import {  useEffect, useRef } from "react";
import {createPortal} from "react-dom";
import {motion} from 'framer-motion';
export default function PopUp({typeText, handleChangeModal, handleAction,children,actionName,pending}){
    const dialog = useRef();
    useEffect(()=>{
       const modal = dialog.current;   
       modal.showModal();
       return ()=>{
        modal.close();
      };
    },[])
   

    return createPortal(
        <dialog className={Style.modal} ref={dialog} onClose={handleChangeModal} >
            {typeText}   
            {children}  
        <div className={Style.buttons}>
         <motion.button whileHover={{scale:1.02, transition:{type:"spring",bounce:0.7}}} className={Style.delete} onClick={handleAction} disabled={pending} > {pending?"...pending":actionName}</motion.button>   
        <motion.button whileHover={{scale:1.02, transition:{type:"spring",bounce:0.7}}} className={Style.cancel} disabled={pending} onClick={handleChangeModal}>Cancel</motion.button> 
        </div>  
        </dialog>,
        document.getElementsByTagName("body")[0]
    )
}