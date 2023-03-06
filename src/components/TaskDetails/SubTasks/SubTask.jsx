import React from "react";
import "./SubTask.css";
import TaskPlusIcon from "../../../assets/task-icons/task-plus.svg";
import TaskScrollBarIcon from "../../../assets/task-icons/task-scrollbar.svg";
import TaskScrollBarIcon from "../../../assets/task-icons/task-upRight.svg";

function SubTask() {
  return (
    <div className="sub-task-container">
      <div className="sub-task">
        <span>Alt Görevler</span>
        <div className="sub-task-add-button">
          <img src={TaskPlusIcon} />
          <span className="sub-task-add">Alt Görev Ekle</span>
        </div>
      </div>
      <div>
        <img src={TaskScrollBarIcon} />
      </div>
      <div>
        <div>
          <span>Anasayfa - benchmark</span>
          <span>Koçtaş UI&UX Maintenance</span>
          <span>UX&UI</span>
        </div>
        <img src={TaskScrollBarIcon} />
      </div>
      <div>
        <div>
          <span>Search bar benchmark</span>
          <span>Koçtaş UI&UX Maintenance</span>
          <span>UX&UI</span>
        </div>
        <img src={TaskScrollBarIcon} />
      </div>
      <div>
        <div>
          <span>Dashboard benchmark</span>
          <span>Koçtaş UI&UX Maintenance</span>
          <span>UX&UI</span>
        </div>
        <img src={TaskScrollBarIcon} />
      </div>
      <div>
        <div>
          <span>Dashboard benchmark</span>
          <span>Koçtaş UI&UX Maintenance</span>
          <span>UX&UI</span>
        </div>
        <img src={TaskScrollBarIcon} />
      </div>
      <div>
        <a href="#">Tümünü Gör</a>
      </div>
    </div>
  );
}

export default SubTask;
