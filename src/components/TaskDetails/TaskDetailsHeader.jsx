import React from "react";
import "./TaskDetailsHeader.css";
import TaskEditIcon from "../../assets/task-icons/task-edit.svg";
import TaskCloseIcon from "../../assets/task-icons/task-close.svg";

function TaskDetailsHeader({ setDetailsOpen }) {
  return (
    <div className="task-details-header">
      <div className="task-header-content">
        <div className="task-header-text">
          <span className="task-header-text1">Koç - UI/UX Maintenance</span>
          <span className="task-header-text2">UI Benchmark</span>
          <span className="task-header-text3">Yapılacaklar</span>
        </div>
        <div className="task-header-edit">
          <img src={TaskEditIcon} />
          <span className="task-header-edit-text">Düzenle</span>
        </div>
      </div>
      <img
        className="task-close-icon"
        src={TaskCloseIcon}
        onClick={() => {
          setDetailsOpen(false);
        }}
      />
    </div>
  );
}

export default TaskDetailsHeader;
