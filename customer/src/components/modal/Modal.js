import React from "react";
import Backdrop from "../backdrop/backdrop";
import "./style.css";

function Modal({ visibility, clicked, children }) {
  return (
    <div>
      <Backdrop visibility={visibility} clicked={clicked} />
      {visibility ? (
        <div
          className="modal-wrapper"
          style={{
            transform: visibility ? "translateY(0)" : "translateY(-100vh)",
            opacity: visibility ? "1" : "0",
          }}
        >
          <div className="padding-16">
            <div>{children}</div>
            <div className="bottom-right" onClick={clicked}>
              OK
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
