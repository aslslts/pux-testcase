import React from "react";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";
import BrandLogo from "../../assets/brand-logo.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={BrandLogo} className="brand-logo"></img>
        <div className="line"></div>
      </div>

      <SidebarItem />
    </div>
  );
}

export default Sidebar;
