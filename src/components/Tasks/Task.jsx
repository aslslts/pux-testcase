import React from "react";
import "./Task.css";
import MoreIcon from "../../assets/icons/more.svg";

function Task({
  projectName,
  taskName,
  categoryName,
  tagName,
  date,
  priority,
  userImage,
  progressValue,
  onClick,
}) {
  return (
    <div className="task-container" onClick={onClick}>
      <div className="project-name">
        <input type="checkbox" />
        <span>{projectName}</span>
      </div>
      <div className="task-name">
        <span>{taskName}</span>
      </div>
      <div className="category-name">
        <span>{categoryName}</span>
      </div>
      <div className="tag-name">
        <span>{tagName}</span>
      </div>
      <div className="date-text">
        <span>{date}</span>
      </div>
      <div className="priority-value">
        <img src={priority} />
      </div>
      <div className="user-image">
        <img src={userImage} />
      </div>
      <div className="progress-value">
        <img src={progressValue} />
      </div>
      <div className="rename-image">
        <img src={MoreIcon} />
      </div>
    </div>
  );
}

export default Task;
