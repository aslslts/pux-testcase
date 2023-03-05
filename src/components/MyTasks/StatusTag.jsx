import React from "react";
import "./StatusTag.css";

function StatusTag({ icon, text, count }) {
  return (
    <div className="status-tag">
      <img src={icon} />
      <span className="status-tag-text">{text}</span>
      <span className="status-tag-count">{count}</span>
    </div>
  );
}

export default StatusTag;
