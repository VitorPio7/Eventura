import Style from "../css/Modal.module.css";
import { useEffect, useRef } from "react";

export function Modal({ typeText, handleChangeModal, children }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();
    return () => {
      modal.close();
    };
  }, []);

  return (
    <dialog className={Style.modal} ref={dialog} onClose={handleChangeModal}>
      {typeText}
      {children}
      <button className={Style.cancel} onClick={handleChangeModal}>
        Cancel
      </button>
    </dialog>
  );
}
