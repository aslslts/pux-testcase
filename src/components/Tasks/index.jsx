import React from "react";
import "./Tasks.css";
import CopyIcon from "../../assets/icons/copy.svg";
import TasksHeader from "./TasksHeader";
import Task from "./Task";
import UserImage from "../../assets/icons/avatar.svg";
const TaskData = [
  {
    projectName: "Koçtaş UI&UX Maintenance",
    taskName: "asdasd",
    categoryName: "adfaf",
    tagName: "sdfsfsd",
    date: "12354",
    priority: "acil",
    progressValue: "adasfa",
    userImage: UserImage,
  },
  {
    projectName: "Ford UI&UX Maintenance",
    taskName: "asdasd",
    categoryName: "adfaf",
    tagName: "sdfsfsd",
    date: "12354",
    priority: "acil",
    progressValue: "adasfa",
    userImage: UserImage,
  },
  {
    projectName: "AI Proje/ AR-GE",
    taskName: "asdasd",
    categoryName: "adfaf",
    tagName: "sdfsfsd",
    date: "12354",
    priority: "acil",
    progressValue: "adasfa",
    userImage: UserImage,
  },
];

function Tasks() {
  return (
    <div className="tasks">
      <div className="tasks-top-text">
        <div>Tümü</div>
        <img src={CopyIcon} />
      </div>
      <TasksHeader />
      {TaskData.map((item, index) => {
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
          />
        );
      })}
    </div>
  );
}

export default Tasks;
