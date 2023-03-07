import React from "react";
import "./TimeGraph.css";
import TimeGraphPieIcon from "../../../assets/task-icons/graph-pie.svg";

function TimeGraph() {
  return (
    <div className="time-graph-container">
      <div>
        <span>Süre Grafiği</span>
      </div>
      <div>
        <span>İlerleme Durumu</span>
        <span>Toplam </span>
        <span>24 sa</span>
        <span>İlerleme </span>
        <span>11 sa 32 dk</span>
      </div>
      <img src={TimeGraphPieIcon} />
    </div>
  );
}

export default TimeGraph;
