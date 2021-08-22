import React from "react";

import { H1, H2 } from "../Text/Text";
import { CategoryButton, DishButton } from "../Button/Button";

import "./style.css";

const Menu = ({ category, dish, addOrder, currentTable, order }) => {
  console.log("adsf", order?.[currentTable]?.orderId, order);
  return (
    <div className="menu-container">
      <div className="view-padding menu-wrapper">
        <>
          <H1 text="category" />
          <div className="cat-wrapper">
            {category &&
              category.map((cat) => {
                return <CategoryButton text={cat.cat_name} />;
              })}
          </div>
        </>
        <div className="dish-wrapper">
          <H1 text="dish" />
          <div className="dish-container">
            {category &&
              category.map((cat) => {
                return [
                  <H2
                    text={cat.cat_name}
                    style={{ color: "grey" }}
                    id={cat.cat_name}
                  />,
                  <div className="dishes">
                    {dish.length !== 0 &&
                      dish.map((dish) => {
                        if (cat.id === dish.cat_id) {
                          {
                            console.log("dish.length", dish.length);
                          }
                          return (
                            <DishButton
                              text={dish.dish_name}
                              onClick={() => {
                                addOrder({
                                  dishId: dish.id,
                                  table: currentTable,
                                  count: 1,
                                  orderId: order?.[currentTable]?.orderId,
                                });
                              }}
                            />
                          );
                        }
                      })}
                  </div>,
                ];
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
