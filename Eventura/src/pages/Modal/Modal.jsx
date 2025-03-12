import Style from "../css/Modal.module.css";
import { useEffect, useRef } from "react";
import {createPortal} from "react-dom";
export default function Modal({typeText, handleChangeModal}){
    const dialog = useRef();
    useEffect(()=>{
       const modal = dialog.current;   
       modal.showModal();
       return ()=>{
        modal.close();
      };
    },[])
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
    }
    return createPortal(
        <dialog className={Style.modal} ref={dialog} onClose={handleChangeModal} >
         <form onSubmit={handleSubmit}>
            {typeText}
            <label htmlFor="name">name</label>
            <input type="text" name="name" />
            <label htmlFor="">name</label>
            <input type="text" name="name"/>
            <label htmlFor="date">Date</label>
            <input type="date" name="date"/>
            <label htmlFor="time">Time</label>
            <input type="time" name="time"/>
            <label htmlFor="place">Place</label>
            <input type="text" name="place"/>
            <label htmlFor="price">Price</label>
            <input type="number" name="price"/>
            <label htmlFor="entries">Entries</label>
            <input type="number" name="entries"/>    
            <label htmlFor="description">Description</label>
            <textarea name="description" ></textarea> 
            <button>Edit</button>   
            <button>Cancel</button>   
         </form>
        </dialog>,
        document.getElementsByTagName("body")[0]
    )
}