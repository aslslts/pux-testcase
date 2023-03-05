import React from "react";
import "./ActionButton.css";

function ActionButton({ icon, text, className }) {
  return (
    <div className={`action-button ${className}`}>
      <img className="action-button-icon" src={icon}></img>
      <p className="action-button-text">{text}</p>
    </div>
  );
}

export default ActionButton;
