import Style from "../css/Modal.module.css";
import {  useEffect, useRef } from "react";
import {createPortal} from "react-dom";

export default function Modal({typeText, handleChangeModal,children,isPending}){
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
        <button className={Style.cancel} disabled={isPending} onClick={handleChangeModal}>Cancel</button>   
        </dialog>,
        document.getElementsByTagName("body")[0]
    )
}