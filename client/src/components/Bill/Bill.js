import React, { useState, useEffect } from "react";

import { Shade, H1, Text } from "../Text/Text";
import { PrimaryButton, ControlButton } from "../Button/Button";
import TableView from "../TableView/TableView";
import Modal from "../Modal/Modal";

import "./style.css";

const Bill = ({
  currentTable,
  setTable,
  tableCount,
  dish,
  order,
  incrementOrder,
  decrementOrder,
  settle,
}) => {
  const [isTableOpen, setIsTableOpen] = useState(false);

  const tableToggler = () => {
    setIsTableOpen(!isTableOpen);
  };

  return (
    <div className="bill-wrapper secondary-color">
      <div className="view-padding bill-container">
        <div className="table-wrapper">
          <div>
            <H1 text="Table" style={{ color: "white" }} />
            <H1
              text={currentTable}
              style={{ color: "white", marginLeft: "20%" }}
            />
          </div>
          <div className="changeTable-wrapper">
            <PrimaryButton
              text="change table"
              bgColor={{ backgroundColor: "white" }}
              onClick={tableToggler}
            />
          </div>
        </div>
        <div className="summary-container">
          {order?.[currentTable] && order?.[currentTable]?.length !== 0 ? (
            <>
              <div className="summary-head">
                <Text>2021-05-21 08:51:03</Text>
                <Text>#234</Text>
              </div>
              <hr className="separator3"></hr>
              <div className="summary-table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>ITEM(S)</th>
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.[currentTable]?.dish &&
                      order?.[currentTable]?.dish.map((item) => {
                        return dish.map((dish) => {
                          if (dish.id === item.dishId) {
                            return (
                              <tr>
                                <td>{dish.dish_name}</td>
                                <td>{dish.price}</td>
                                <td>
                                  <ControlButton
                                    count={item.count}
                                    increment={() => {
                                      incrementOrder({
                                        dishId: item.dishId,
                                        table: currentTable,
                                        orderId: order?.[currentTable]?.orderId,
                                      });
                                    }}
                                    decrement={() => {
                                      decrementOrder({
                                        dishId: item.dishId,
                                        table: currentTable,
                                        orderId: order?.[currentTable]?.orderId,
                                      });
                                    }}
                                  />
                                </td>
                              </tr>
                            );
                          }
                        });
                      })}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <Text>Place your order</Text>
          )}
        </div>
        <div className="settlement">
          <div className="button-wrap">
            <PrimaryButton
              text="Card"
              onClick={() => {
                settle({
                  table: currentTable,
                  payment: "card",
                  orderId: order?.[currentTable]?.orderId,
                });
              }}
            />
          </div>
          <div className="button-wrap">
            <PrimaryButton
              text="UPI"
              onClick={() => {
                settle({
                  table: currentTable,
                  payment: "upi",
                  orderId: order?.[currentTable]?.orderId,
                });
              }}
            />
          </div>
          <div className="button-wrap">
            <PrimaryButton
              text="Cash"
              onClick={() => {
                settle({
                  table: currentTable,
                  payment: "cash",
                  orderId: order?.[currentTable]?.orderId,
                });
              }}
            />
          </div>
        </div>
      </div>
      <Modal visibility={isTableOpen} onClick={tableToggler}>
        <TableView
          currentTable={currentTable}
          tableCount={tableCount}
          setTable={setTable}
          tableToggler={tableToggler}
        />
      </Modal>
    </div>
  );
};

export default Bill;
