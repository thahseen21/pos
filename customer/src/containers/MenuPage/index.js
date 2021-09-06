import React, { useState } from "react";
import { connect } from "react-redux";

import { MenuHeader } from "../../components/header/header";
import SearchBar from "../../components/searchBar/searchBar";
import menuData from "../../dummydata/menu.json";
import { ViewPlate } from "../../components/banner/banner";
import Slideup from "../../components/slideup/slideup";
import CardView from "../../components/CardView/CardView";
// import menuIcon from "../../assests/images/surface1.png";
import { incrementOrder } from "../../store/actions/orderActions";
import Modal from "../../components/modal/Modal";

import "./style.css";

function MenuPage({ plateOrder }) {
  let menu = Object.entries(menuData);
  let [isViewPlateOpen, setIsViewPlateOpen] = useState(false);
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [description, setDescription] = useState("");

  const modalToggler = () => {
    setIsViewPlateOpen(!isViewPlateOpen);
  };
  const modalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const getDescription = (data) => {
    setIsModalOpen(true);
    setDescription(data);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="">
      <MenuHeader />
      <SearchBar menuList={menuData} />
      <div>
        <div className="flex-row-center menu-banner">
          <img src={menuIcon} width="28" alt="Menu" />
          <p className="pad-left">Menu</p>
        </div>
        <div>
          {menu.map((categories) => {
            return [
              <p className="pad-bt-10">{categories[0]}</p>, //have to declare key
              <div key={categories[0]} className="dish-card-view-wrapper">
                {categories[1].map((dish, index) => {
                  return (
                    <CardView
                      key={index}
                      name={dish.name}
                      price={dish.price}
                      image={dish.image}
                      description={dish.description}
                      getDescription={getDescription}
                      orderCount={plateOrder}
                    />
                  );
                })}
              </div>,
            ];
          })}
        </div>
        <Modal visibility={isModalOpen} clicked={modalClose}>
          <p>{description}</p>
        </Modal>
      </div>
      <ViewPlate plateOrder={plateOrder} clicked={modalToggler} />
      <Slideup
        visibility={isViewPlateOpen}
        clicked={modalToggler}
        myplate={plateOrder}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    plateOrder: state.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    list: () => dispatch(incrementOrder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);
