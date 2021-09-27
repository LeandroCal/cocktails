import React, { createContext, useContext, useState } from "react";
import ModalCmp from "../components/ModalCmp";

const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const launchModal = (text) => {
    setMessage(text);
    setIsOpenModal(true);
  };

  return (
    <>
      <ModalContext.Provider value={{ launchModal }}>
        {children}
      </ModalContext.Provider>
      <ModalCmp
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        message={message}
      />
    </>
  );
};

export const useModalContext = () => useContext(ModalContext);

export default ModalContext;
