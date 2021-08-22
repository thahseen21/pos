import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Menu from "../Menu/Menu";
import Bill from "../Bill/Bill";
import Layout from "../../components/Layout/Layout";
import { addOrder as addOrderAction } from "../../store/action/order";
import { fetchMenu as fetchMenuAction } from "../../store/action/menu";

// import dish from "../../dummyData/dish.json";
// import category from "../../dummyData/category.json";

const Order = ({ addOrder, order, fetchMenu, dish, category }) => {
  const [currentTable, setCurrentTable] = useState(1);
  useEffect(() => {
    fetchMenu();
  }, []);

  const setTable = (table) => {
    setCurrentTable(table);
  };

  return (
    <Layout>
      {category && dish && (
        <>
          <Menu
            dish={dish}
            category={category}
            addOrder={addOrder}
            currentTable={currentTable}
            order={order}
          />
          <Bill
            currentTable={currentTable}
            setTable={setTable}
            dish={dish}
            order={order}
          />
        </>
      )}
    </Layout>
  );
};

const mapStateToProps = ({ Order, Menu }) => {
  return {
    order: Order,
    category: Menu.category,
    dish: Menu.dish,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOrder: (data) => dispatch(addOrderAction(data)),
    fetchMenu: () => dispatch(fetchMenuAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
