import React from "react";
import { useState } from "react";
import SidebarData from "./SidebarData";
import "./SidebarItem.css";

function SidebarItem() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="sidebar-menu"></div>

      <ul className="sidebar-menu-items" onClick={showSidebar}>
        {/* <li className="sidebar-toggle"></li> */}
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <img src={item.icon} />
              <span className="sidebar-title">{item.title}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SidebarItem;
