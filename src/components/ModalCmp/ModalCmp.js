import React from "react";
import Modal from "react-modal";

import "./ModalCmp.scss";

Modal.setAppElement("#root");

const ModalCmp = ({ isOpen, setIsOpen, message }) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="custom-modal-text">{message}</div>
      <div className="custom-modal-button">
        <button className="secondary" onClick={() => setIsOpen(false)}>
          Cerrar
        </button>
      </div>
    </Modal>
  );
};

export default ModalCmp;
