import React from "react";
import "./Tasks.css";
import CopyIcon from "../../assets/icons/copy.svg";
import TasksHeader from "./TasksHeader";

function Tasks() {
  return (
    <div className="tasks">
      <div className="tasks-top-text">
        <div>Tümü</div>
        <img src={CopyIcon} />
      </div>
      <TasksHeader />
    </div>
  );
}

export default Tasks;
