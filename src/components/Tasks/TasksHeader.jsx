import React from "react";
import "./TasksHeader.css";
import RenameIcon from "../../assets/icons/rename.svg";
import DownIcon from "../../assets/icons/down.svg";

function TasksHeader() {
  return (
    <div className="tasks-header">
      <div className="project">
        <input type="checkbox"></input>
        <span>Proje</span>
        <div className="tasks-header-line"></div>
      </div>
      <div className="task">
        <span>Görev</span>
        <div className="tasks-header-line"></div>
      </div>
      <div className="category">
        <span>Kategori</span>
        <div className="tasks-header-line"></div>
      </div>
      <div className="task-tag">
        <span>Etiket</span>
        <div className="tasks-header-line"></div>
      </div>
      <div className="date">
        <span>Tarih</span>
        <img src={DownIcon}></img>
        <div className="tasks-header-line"></div>
      </div>
      <div className="priority">
        <span>Öncelik</span>
        <img src={DownIcon}></img>
        <div className="tasks-header-line"></div>
      </div>
      <div className="users">
        <span>Kişiler</span>
        <div className="tasks-header-line"></div>
      </div>
      <div className="progress">
        <span>İlerleme</span>
        <div className="tasks-header-line"></div>
      </div>
      <div className="rename-img">
        <img src={RenameIcon}></img>
      </div>
    </div>
  );
}

export default TasksHeader;
