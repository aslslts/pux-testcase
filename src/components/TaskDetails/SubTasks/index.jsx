import React from "react";
import "./SubTasks.css";
import TaskPlusIcon from "../../../assets/task-icons/task-plus.svg";
import TaskScrollBarIcon from "../../../assets/task-icons/task-scrollbar.svg";
import SubTask from "./SubTask";

const SubTasksData = [
  {
    title: "Anasayfa - benchmark",
    text: "Koçtaş UI&UX Maintenance",
    category: "UX&UI",
  },
  {
    title: "Search bar benchmark",
    text: "Koçtaş UI&UX Maintenance",
    category: "UX&UI",
  },
  {
    title: "Dashboard benchmark",
    text: "Koçtaş UI&UX Maintenance",
    category: "UX&UI",
  },
  {
    title: "Dashboard benchmark",
    text: "Koçtaş UI&UX Maintenance",
    category: "UX&UI",
  },
];

function SubTasks() {
  return (
    <div className="sub-tasks-container">
      <div className="sub-tasks">
        <span>Alt Görevler</span>
        <div className="sub-tasks-add-button">
          <img src={TaskPlusIcon} />
          <span className="sub-tasks-add">Alt Görev Ekle</span>
        </div>
      </div>
      <div className="sub-tasks-">
        <img src={TaskScrollBarIcon} />
        <div>
          {SubTasksData.map((item, index) => {
            return <SubTask key={index} item={item} />;
          })}
        </div>
      </div>

      <div>
        <a href="#">Tümünü Gör</a>
      </div>
    </div>
  );
}

export default SubTasks;
