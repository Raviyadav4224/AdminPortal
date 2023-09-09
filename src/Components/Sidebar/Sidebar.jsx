import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import sidebarRoutesData from "../../Assets/sidebarRoutesData";
import { RiArrowDropDownLine } from "react-icons/ri";
import sidebarSubRoutesData from "../../Assets/sidebarSubRoutesData";
const Sidebar = () => {
  const [sidebarData, setSidebarData] = useState(sidebarRoutesData);
  return (
    <div className="sidebar">
      Sidebar
      {sidebarData.map((item, index) => (
        <>
          <Link to={item.path} key={index}>
            {item.pageName} {item.subRoutes ? <RiArrowDropDownLine /> : null}
          </Link>
          {item.subRoutes
            ? sidebarSubRoutesData
                .filter((val) => val.parentPageName === item.pageName)
                .map((val, index) => {
                  return (
                    <Link to={val.path} key={index}>
                      {val.pageName}
                    </Link>
                  );
                })
            : null}
        </>
      ))}
    </div>
  );
};

export default Sidebar;
