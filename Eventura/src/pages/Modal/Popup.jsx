import Style from "../css/Popup.module.css";
import {  useEffect, useRef } from "react";
import {createPortal} from "react-dom";

export default function PopUp({typeText, handleChangeModal, handleAction,children,actionName}){
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
         <button className={Style.delete}   onClick={handleAction}  >{actionName}</button>   
        <button className={Style.cancel}  onClick={handleChangeModal}>Cancel</button> 
        </div>  
        </dialog>,
        document.getElementsByTagName("body")[0]
    )
}