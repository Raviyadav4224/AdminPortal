import React from "react";
import "./Container.css";
import { Outlet } from "react-router-dom";
const Container = () => {
  return (
    <>
      <Outlet/>
    </>
  )
};

export default Container;
