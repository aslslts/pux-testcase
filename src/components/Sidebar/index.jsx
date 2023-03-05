import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";
import BrandLogo from "../../assets/brand-logo.png";
import SidebarData from "./SidebarData";

function Sidebar() {
  const [active, setActive] = useState(0);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={BrandLogo} className="brand-logo"></img>
        <div className="line"></div>
      </div>
      {SidebarData.map((item, index) => {
        return (
          <SidebarItem
            key={index}
            active={active}
            setActive={setActive}
            item={item}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
