import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ListView from "../listView/ListView";

import Modal from "../modal/Modal";

import "./style.css";

function SearchBar({ menuList }) {
  let menu = Object.entries(menuList);
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [description, setDescription] = useState("");
  const [itemSearch, setItemSearch] = useState("");

  const getDescription = (data) => {
    setIsModalOpen(true);
    setDescription(data);
  };

  const modalToggler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const renderMenuLists = () => {
    if (Boolean(itemSearch)) {
      let filteredSearch = menu.map((listItem) => {
        return listItem[1]
          .filter((item) => {
            if (item.name.toLowerCase().includes(itemSearch.toLowerCase())) {
              return item;
            }
          })
          .map((filteredItem) => {
            return (
              <ListView
                name={filteredItem.name}
                price={filteredItem.price}
                description={filteredItem.description}
                getDescription={getDescription}
              />
            );
          });
      });
      return filteredSearch;
    }
  };

  return (
    <div className="wrapper-searchBar">
      <div className="container-searchbar">
        <div>
          <input
            className="searchInput"
            placeholder="search dish"
            type="search"
            // value={itemSearch}
            onChange={(data) => {
              setItemSearch(data.target.value);
            }}
          />
        </div>
        <i className="icon">
          <FiSearch />
        </i>
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          backgroundColor: "white",
          width: "90%",
        }}
      >
        {renderMenuLists()}
      </div>
      <Modal visibility={isModalOpen} clicked={modalToggler}>
        <p>{description}</p>
      </Modal>
    </div>
  );
}

export default SearchBar;
