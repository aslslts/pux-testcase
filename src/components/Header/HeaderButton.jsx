import React from "react";
import "./HeaderButton.css";

function HeaderButton({ item, index }) {
  return (
    <>
      <li className={`header-item`}>
        <img className="header-icon" src={item.icon} />
        <span className="header-title">{item.title}</span>
      </li>
    </>
  );
}

export default HeaderButton;
