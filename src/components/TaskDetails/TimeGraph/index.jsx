import React from "react";
import "./TimeGraph.css";
import TimeGraphPieIcon from "../../../assets/task-icons/graph-pie.svg";

function TimeGraph() {
  return (
    <div className="time-graph-container">
      <div className="time-graph-main">
        <span className="time-graph-text">Süre Grafiği</span>
      </div>
      <div className="time-graph-ps-container">
        <div className="time-graph-progress-status">
          <span className="progress-status-text ps-text">İlerleme Durumu</span>
          <div className="progress-status-total">
            <span className="progress-status-text total-text ">Toplam </span>
            <span className="progress-status-text hour-text">24 sa</span>
          </div>
          <div className="progress-status-progression">
            <span className="progress-status-text total-text ">İlerleme </span>
            <span className="progress-status-text hour-text">11 sa 32 dk</span>
          </div>
        </div>
        <img className="time-graph-pie-icon" src={TimeGraphPieIcon} />
      </div>
    </div>
  );
}

export default TimeGraph;
