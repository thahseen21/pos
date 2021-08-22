import React from "react";
import { connect } from "react-redux";

import MenuView from "../../components/Menu/Menu";

const Menu = ({ addOrder, dish, category, currentTable, order }) => {
  return (
    <>
      <MenuView
        dish={dish}
        category={category}
        addOrder={addOrder}
        currentTable={currentTable}
        order={order}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(Menu);
