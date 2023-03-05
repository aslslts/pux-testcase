import React from "react";
import ErrorIcon from "../../assets/icons/error.svg";
import InfoIcon from "../../assets/icons/info.svg";
import SuccessIcon from "../../assets/icons/success.svg";
import StatusTag from "./StatusTag";
import "./MyTasks.css";

function MyTasks() {
  return (
    <div className="my-tasks">
      <p className="my-tasks-text">Görevlerim</p>

      <StatusTag icon={ErrorIcon} count={"5"} text={"Geç"} />
      <StatusTag icon={InfoIcon} count={"12"} text={"Devam Eden"} />
      <StatusTag icon={SuccessIcon} count={"35"} text={"Tamamlanan"} />
    </div>
  );
}

export default MyTasks;
