import React from "react";
import _ from "lodash";
import { BiDish } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";

import "./style.css";
export const ViewPlate = ({ plateOrder, clicked }) => {
  let count = _.size(plateOrder);
  return count !== 0 ? (
    <div className="viewPlate-wrapper">
      <div className="flex-row-center jus-space-between view-plate-container">
        <div className="flex-row-center">
          <BiDish size={34} />
          <p>{count} items</p>
        </div>
        <div
          className="fontWieght-900 flex-row-center"
          onClick={() => {
            clicked();
          }}
        >
          <p>VIEW MY PLATE</p>
          <AiFillCaretRight size={28} />
        </div>
      </div>
    </div>
  ) : null;
};

export const MyPlate = ({ itemCount, clicked, ...children }) => {
  return (
    <div className="myplate-wrapper flex-row-center jus-space-between padding-16">
      <div>
        <p className="myplate-head">My Plate</p>
        <p className="myplate-head fsize-14">items {itemCount}</p>
      </div>
      <div>
        <ImCross onClick={clicked} />
      </div>
    </div>
  );
};
