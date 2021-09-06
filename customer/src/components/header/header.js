import "./style.css";

import { FiMoreVertical } from "react-icons/fi";

export function MenuHeader() {
  return (
    <nav className="wrapper">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/79/Burger_King_logo.svg"
          alt="new"
          width={40}
        />
        <div className="hotelName">
          <p>Burger King</p>
        </div>
      </div>
      <div>
        <FiMoreVertical size={30} color="grey" />
      </div>
    </nav>
  );
}
