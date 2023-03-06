import React from "react";
import DetailTabs from "../DetailTabs";
import SubTasks from "../SubTasks";
import "./Details.css";

function Details() {
  return (
    <div className="details-container">
      <DetailTabs />
      <div className="details-dashboard">
        <div>
          <SubTasks />
          {/* <TimeGraph /> */}
        </div>
        <div className="">{/* Ortadaki Alan */}</div>
        <div>{/* <AddTime /> */}</div>
      </div>
    </div>
  );
}

export default Details;
