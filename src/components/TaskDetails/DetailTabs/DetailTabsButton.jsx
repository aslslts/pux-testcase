import React from "react";
import "./DetailTabsButton.css";

function DetailTabsButton({ item, index }) {
  return (
    <div
      key={index}
      className={`detail-tabs-button ${
        index === 0 && "detail-tabs-button-active"
      }`}
    >
      <p className="detail-tabs-button-text">{item.text}</p>
    </div>
  );
}

export default DetailTabsButton;
