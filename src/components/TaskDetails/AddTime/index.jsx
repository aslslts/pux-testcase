import React from "react";
import "./AddTime.css";
import TaskUserIcon from "../../../assets/task-icons/task-user.svg";
import TaskDropDownIcon from "../../../assets/task-icons/task-dropdown.svg";
import TaskCalendarIcon from "../../../assets/task-icons/task-calendar.svg";
import TaskClockIcon from "../../../assets/task-icons/task-clock.svg";

function AddTime() {
  return (
    <div className="add-time-container">
      <div className="add-time-table">
        <div className="add-time-text">Süre Ekle</div>
        <div className="add-time-select-person">
          <span className="add-time-main-text">Kim</span>
          <div className="add-time-person-button">
            <img src={TaskUserIcon} />
            <span className="add-time-person-text">Holly Golightly</span>
          </div>
        </div>
        <div>
          <span className="add-time-main-text">Tarih</span>
          <div className="add-time-calendar-button">
            <img src={TaskCalendarIcon} />
            <input
              className="add-time-select-text"
              type="date"
              placeholder="Tarih seçiniz"
            ></input>
            <span className="add-time-select-text">Tarih seçiniz</span>
            <img src={TaskDropDownIcon} />
          </div>
        </div>
        <div className="add-time-start-finish">
          <span className="add-time-main-text">Başlangıç Zamanı</span>
          <div className="add-time-start-finish-button">
            <img src={TaskClockIcon} />
            <input type="time"></input>
            <span className="add-time-calculate">09.10</span>
          </div>
          <span className="add-time-main-text">Bitiş Zamanı</span>
          <div className="add-time-start-finish-button">
            <img src={TaskClockIcon} />
            <input type="time"></input>
            <span className="add-time-calculate">09.50</span>
          </div>
        </div>
        <div className="add-time-calculator">
          <span className="add-time-main-text">Harcanan Süre</span>
          <span className="add-time-calculate">0.50</span>
        </div>
        <div className="add-time-description">
          <span className="add-time-main-text">Açıklama</span>
          <div className="add-time-note-button">
            <input
              className="add-time-note-text"
              type="text"
              placeholder="Not Yazınız"
            />
          </div>
        </div>
        <div className="add-time-add-button">
          <span className="add-time-add-text">Ekle</span>
        </div>
      </div>
    </div>
  );
}

export default AddTime;
