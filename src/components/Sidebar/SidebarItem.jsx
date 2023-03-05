import React from "react";
import { useState } from "react";
import SidebarData from "./SidebarData";
import "./SidebarItem.css";

function SidebarItem({ item, index, active, setActive }) {
  function handleSidebarItemClick(index) {
    setActive(index);
  }
  return (
    <>
      <li
        className={`sidebar-item ${active === index && "active"}`}
        onClick={() => handleSidebarItemClick(index)}
      >
        <img src={item.icon} />
        <span className="sidebar-title">{item.title}</span>
      </li>
    </>
  );
}

export default SidebarItem;
