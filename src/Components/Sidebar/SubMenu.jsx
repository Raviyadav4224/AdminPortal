import React, { useEffect, useRef } from "react";
import { Dropdown } from "react-bootstrap";

const SubMenu = ({sidebarSubmenuData,setShowSubmenu}) => {
    const subMenuRef = useRef(null);
    useEffect(() => {
      function handleClickOutside(event) {
        if (subMenuRef?.current && !subMenuRef?.current.contains(event.target)) {
          subMenuRef.current.style.display = "none";
          setShowSubmenu(false);
        }
      }
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, []);
  return (
    <div className="dropdown" ref={subMenuRef}>
      {/* {sidebarSubmenuData[0].map((item,index) => {
        return <li key={index}>{item.name}</li>;
      })} */}
      Name
    </div>
  );
};

export default SubMenu;
