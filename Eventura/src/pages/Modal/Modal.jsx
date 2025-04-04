import Style from "../css/Modal.module.css";
import { useEffect, useRef } from "react";
import {motion} from 'framer-motion';
export default function Modal({ typeText, handleChangeModal, children }) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();
    return () => {
      modal.close();
    };
  }, []);

  return (
    < dialog
     className={Style.modal} ref={dialog}
     onClose={handleChangeModal}>
      {typeText}
      {children}
      <motion.button whileHover={{scale:1.02, transition:{type:"spring",bounce:0.7}}} className={Style.cancel} onClick={handleChangeModal}>
        Cancel
      </motion.button>
    </dialog>
  );
}
