import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import sidebarSubRoutesData from "../../Assets/sidebarSubRoutesData";
import sidebarRoutesData from "../../Assets/sidebarRoutesData";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Sidebar.css";
import { Dropdown } from "react-bootstrap";
import SubMenu from "./SubMenu";
const Sidebar = () => {
  const [sidebarData, setSidebarData] = useState(
    sidebarRoutesData.filter((item) => item.role === "RPO")
  );
  const [sidebarSubmenuData, setSidebarSubmenuData] = useState(
    sidebarSubRoutesData
      .filter((item) => item.role === "RPO")
      .map((item) => item.pageName)
  );
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <>
      <div className="sidebar">
        Sidebar
        {sidebarData[0]?.pageName.map((elem, index) => (
          <>
            <Link
              onMouseEnter={() => {
                setShowSubmenu(true);
                // setSidebarSubmenuData(() => {
                //  return sidebarSubmenuData[0].filter((val) => val.name === elem.name);
                // });
              }}
              className="sidebarItem"
              to={elem.path}
              key={index}
            >
              {elem.name}
              {elem.subRoutes ? <RiArrowDropDownLine /> : null}
              {elem.subRoutes && showSubmenu ? (
                <SubMenu
                  sidebarSubmenuData={sidebarSubmenuData}
                  setShowSubmenu={setShowSubmenu}
                />
              ) : null}
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
