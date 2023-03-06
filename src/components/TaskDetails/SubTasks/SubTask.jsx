import React from "react";
import "./SubTask.css";
import TaskUpRightIcon from "../../../assets/task-icons/task-upRight.svg";

function SubTask({ item }) {
  return (
    <div className="sub-task-container">
      <div className="sub-task-header">
        <span className="sub-task-title">{item.title}</span>
        <span className="sub-task-text">{item.text}</span>
        <span className="sub-task-category">{item.category}</span>
      </div>
      <img className="task-up-right-icon" src={TaskUpRightIcon} />
    </div>
  );
}

export default SubTask;
