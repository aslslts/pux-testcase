import React from "react";
import "./Tag.css";

function Tag({ text, type }) {
  return <div className={`tag ${type}`}>{text}</div>;
}

export default Tag;
