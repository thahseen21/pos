import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { RiArrowDropDownLine } from "react-icons/ri";
import { AddButton, AddControlButton } from "../Button/Button";
import {
  addOrder,
  incrementOrder,
  decrementOrder,
} from "../../store/actions/orderActions";

const CardView = ({
  name,
  price,
  image,
  description,
  getDescription,
  addOrder,
  incrementOrder,
  decrementOrder,
  confirmOrderList,
  orderCount,
}) => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    if (confirmOrderList[name]) {
      setCount(confirmOrderList[name].count);
    } else {
      setCount(0);
    }
  }, [orderCount]);
  return (
    <div
      key={name}
      className="dish-card-view"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="card-view-description">
        <div className="padding-5">
          <div className="dish-row-1">
            <div className="card-view-text">{name}</div>
          </div>
          <div className="flex-row-center jus-space-between">
            <div>
              {description ? (
                <div
                  className="dish-row-2"
                  onClick={() => {
                    getDescription(description);
                  }}
                >
                  description <RiArrowDropDownLine size={20} />
                </div>
              ) : null}
              <div className="flex-row-center jus-space-between dish-row-3">
                <div className="card-view-text">{price}</div>
              </div>
            </div>
            <div className="add-button flex-row-center primary-bg">
              {count === 0 ? (
                <AddButton increment={() => addOrder(name)} />
              ) : (
                <AddControlButton
                  count={count}
                  increment={() => incrementOrder(name)}
                  decrement={() => decrementOrder(name)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    confirmOrderList: state.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOrder: (order) => dispatch(addOrder(order)),
    incrementOrder: (order) => dispatch(incrementOrder(order)),
    decrementOrder: (order) => dispatch(decrementOrder(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardView);
