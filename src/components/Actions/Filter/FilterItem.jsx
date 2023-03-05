import React from "react";
import "./FilterItem.css";

function FilterItem({ item, index }) {
  return (
    <div
      key={index}
      className={`filter-item ${index === 0 && "filter-item-active"}`}
    >
      <img className="filter-item-icon" src={item.icon}></img>
      <p className="filter-item-text">{item.text}</p>
    </div>
  );
}

export default FilterItem;
