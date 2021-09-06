import React, { useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";

import Backdrop from "../backdrop/backdrop";
import { MyPlate } from "../banner/banner";
import { AddControlButton } from "../Button/Button";
import {
  incrementOrder,
  decrementOrder,
} from "../../store/actions/orderActions";
import { PrimaryButton } from "../Button/Button";

import "./style.css";

function Slideup({
  visibility,
  clicked,
  myplate,
  incrementOrder,
  decrementOrder,
}) {
  useEffect(() => {
    if (visibility) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [visibility]);
  return (
    <div>
      <Backdrop visibility={visibility} clicked={clicked} />
      <div
        className="slideupwrapper"
        style={{
          transform: visibility ? "translateY(0%)" : "translateY(100%)",
          transition: "all 0.5s ease-out",
          opacity: visibility ? "1" : "0",
        }}
      >
        <div className="slideup-container">
          <div>
            <MyPlate itemCount={_.size(myplate)} clicked={clicked} />
            <div className="myplate-order">
              {Object.entries(myplate).map((dish) => (
                <div className="pad-lr-16 flex jus-space-between">
                  <p>{dish[0]}</p>
                  <AddControlButton
                    count={dish[1].count}
                    increment={() => {
                      incrementOrder(dish[0]);
                    }}
                    decrement={() => {
                      decrementOrder(dish[0]);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <p>Total </p>
          </div>
          <div className="kitchen-button">
            <PrimaryButton label="send to kitchen" />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementOrder: (order) => dispatch(incrementOrder(order)),
    decrementOrder: (order) => dispatch(decrementOrder(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slideup);
