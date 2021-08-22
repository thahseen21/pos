import React from "react";
import { connect } from "react-redux";

import * as orderActions from "../../store/action/order";
import BillView from "../../components/Bill/Bill";

const Bill = ({
  currentTable,
  setTable,
  dish,
  order,
  table = 10,
  incrementOrder,
  decrementOrder,
  settle,
}) => {
  var rows = [],
    i = 0;
  while (++i <= table) rows.push(i);

  return (
    <BillView
      currentTable={currentTable}
      setTable={setTable}
      tableCount={rows}
      dish={dish}
      order={order}
      incrementOrder={incrementOrder}
      decrementOrder={decrementOrder}
      settle={settle}
    />
  );
};

const mapStateToProps = ({ Order }) => {
  return {
    order: Order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementOrder: (data) => dispatch(orderActions.incrementOrder(data)),
    decrementOrder: (data) => dispatch(orderActions.decrementOrder(data)),
    settle: (data) => dispatch(orderActions.settleRequest(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
