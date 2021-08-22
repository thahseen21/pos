import React from "react";

import "./style.css";

function Backdrop({ visibility, onClick }) {
  return visibility ? <div className="backdrop" onClick={onClick}></div> : null;
}

export default Backdrop;
