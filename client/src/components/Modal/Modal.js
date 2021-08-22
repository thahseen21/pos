import React from "react";

import Backdrop from "../Backdrop/Backdrop";

import "./style.css";

const Modal = ({ visibility, onClick, children }) => {
  return (
    <>
      <Backdrop visibility={visibility} onClick={onClick} />
      {visibility && (
        <div
          className="modal-wrapper"
          style={{
            transform: visibility ? "translateY(0)" : "translateY(-100vh)",
            opacity: visibility ? "1" : "0",
          }}
        >
          <div>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
