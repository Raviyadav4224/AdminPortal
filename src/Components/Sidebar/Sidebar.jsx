import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      Sidebar
      {[
        "fasfas",
        "dasdas",
        "w4rfewdf",
        "q2rad",
        "fasfas",
        "dasdas",
        "w4rfewdf",
        "q2rad",
        "fasfas",
        "dasdas",
        "w4rfewdf",
        "q2rad",
         "fasfas",
        "dasdas",
        "w4rfewdf",
        "q2rad",
        "fasfas",
        "dasdas",
        "w4rfewdf",
        "q2rad",
        "fasfas",
        "dasdas",
        "w4rfewdf",
        "q2rad",
      ].map((item,index) => (
        <div style={{padding:'1.2rem'}} key={`${item}_${index}`}>{item}</div>
      ))}
    </div>
  );
};

export default Sidebar;
