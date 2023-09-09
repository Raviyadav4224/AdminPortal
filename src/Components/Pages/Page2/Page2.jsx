import React from "react";
import { useOutletContext } from "react-router-dom";

const Page2 = () => {
  const [
    sidebarData,
    setSidebarData,
    sidebarSubmenuData,
    setSidebarSubmenuData,
  ] = useOutletContext();
  return (
    <div className="container" style={{ fontSize: "100px" }}>
      Page2
    </div>
  );
};

export default Page2;
