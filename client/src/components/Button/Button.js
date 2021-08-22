import { GoPlus, GoDash } from "react-icons/go";

import "./style.css";

export const CategoryButton = ({ text }) => {
  return (
    <a className="cat-button" href={"#" + text}>
      <p>{text}</p>
    </a>
  );
};

export const DishButton = ({ text, onClick }) => {
  return (
    <div className="dish-button" onClick={onClick}>
      <p>{text}</p>
    </div>
  );
};

export const PrimaryButton = ({ text, onClick, textColor, bgColor }) => {
  return (
    <div className="primary-button" onClick={onClick} style={bgColor}>
      <p style={textColor}>{text}</p>
    </div>
  );
};

export const ControlButton = ({ count, increment, decrement }) => {
  return (
    <div className="control-button">
      <GoDash size={16} onClick={decrement} />
      <div className="pad-lr-5 fsize-14">{count}</div>
      <GoPlus size={12} onClick={increment} />
    </div>
  );
};
