import React from "react";
import Task from "./Task";
import TasksHeader from "./TasksHeader";
import "./Tasks.css";
import CopyIcon from "../../assets/icons/copy.svg";

function Tasks({ data, setDetailsOpen }) {
  return (
    <div className="tasks">
      <div className="tasks-top-text">
        <div>Tümü</div>
        <img src={CopyIcon} />
      </div>
      <TasksHeader />
      {data.map((item, index) => {
        return (
          <Task
            key={index}
            projectName={item.projectName}
            taskName={item.taskName}
            categoryName={item.categoryName}
            tagName={item.tagName}
            date={item.date}
            priority={item.priority}
            progressValue={item.progressValue}
            userImage={item.userImage}
            onClick={() => {
              setDetailsOpen(true);
            }}
          />
        );
      })}
    </div>
  );
}

export default Tasks;
