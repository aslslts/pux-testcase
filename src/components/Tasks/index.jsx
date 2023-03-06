import React from "react";
import Task from "./Task";
import TasksHeader from "./TasksHeader";
import "./Tasks.css";
import CopyIcon from "../../assets/icons/copy.svg";
import TaskStatusNormal from "../../assets/task-icons/task-status-normal.svg";
import TaskStatusAcil from "../../assets/task-icons/task-status-acil.svg";
import TaskStatusCokAcil from "../../assets/task-icons/task-status-cok-acil.svg";
import UserImage from "../../assets/icons/avatar.svg";

const TaskData = [
  {
    projectName: "Koçtaş UI&UX Maintenance",
    taskName: "Anasayfada ara çözümler",
    categoryName: "UX&UI",
    tagName: "Etiket-1,Etiket-2, Etiket-3, Etiket-4",
    date: "22 Mayıs Çar.-23 Ocak Perş.",
    priority: TaskStatusAcil,
    progressValue: "adasfa",
    userImage: UserImage,
  },
  {
    projectName: "Ford UI&UX Maintenance",
    taskName: "Wireframe",
    categoryName: "UX&UI",
    tagName: "Etiket-1,Etiket-2, Etiket-3, Etiket-4",
    date: "22 Mayıs Çar.-23 Ocak Perş.",
    priority: TaskStatusNormal,
    progressValue: "adasfa",
    userImage: UserImage,
  },
  {
    projectName: "AI Proje/ AR-GE",
    taskName: "Toplantı Eforları",
    categoryName: "Toplantılar",
    tagName: "Etiket-1,Etiket-2, Etiket-3, Etiket-4",
    date: "22 Mayıs Çar.-23 Ocak Perş.",
    priority: TaskStatusCokAcil,
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
