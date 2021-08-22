import React from "react";
import SideBar from "../Navigation/SideBar/SideBar";

const Layout = (props) => {
  return (
    <>
      <SideBar />
      <>{props.children}</>
    </>
  );
};

export default Layout;
