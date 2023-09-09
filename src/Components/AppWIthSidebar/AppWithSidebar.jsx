import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import sidebarSubRoutesData from "../../Assets/sidebarSubRoutesData";
import sidebarRoutesData from "../../Assets/sidebarRoutesData";
import { RiArrowDropDownLine } from "react-icons/ri";

const AppWithSidebar = () => {
  const [sidebarData, setSidebarData] = useState(
    sidebarRoutesData.filter((item) => item.role === "RPO")
  );
  const [sidebarSubmenuData, setSidebarSubmenuData] = useState(
    sidebarSubRoutesData.filter((item) => item.role === "RPO")
  );
  const Sidebar = () => {
    return (
      <>
        <div className="sidebar">
          Sidebar
          {sidebarData[0]?.pageName.map((elem, index) => (
            <>
              <Link className="sidebarItem" to={elem.path} key={index}>
                {elem.name}
                {elem.subRoutes ? <RiArrowDropDownLine /> : null}
              </Link>
            </>
          ))}
        </div>
        <div className="submenu">
          {sidebarData[0]?.pageName.map((elem, index) => {
            {
              elem.subRoutes
                ? sidebarSubmenuData[0]?.pageName
                    .filter((value) => value.name === elem.name)
                    .map((item) =>
                      item?.pages.map((val, ind) => {
                        return (
                          <Link to={val.path} key={ind}>
                            {val.name}
                          </Link>
                        );
                      })
                    )
                : null;
            }
          })}
        </div>
      </>
    );
  };
  return (
    <>
      <Sidebar />
      <Outlet
        context={[
          sidebarData,
          setSidebarData,
          sidebarSubmenuData,
          setSidebarSubmenuData,
        ]}
      />
    </>
  );
};

export default AppWithSidebar;
