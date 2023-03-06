import React from "react";
import "./TaskDetails.css";
import TaskDetailsHeader from "./TaskDetailsHeader";
import Details from "./Details";

function TaskDetails({ detailsOpen, setDetailsOpen }) {
  return (
    <>
      <div className="task-details">
        <TaskDetailsHeader
          detailsOpen={detailsOpen}
          setDetailsOpen={setDetailsOpen}
        />
        <Details />
      </div>
    </>
  );
}

export default TaskDetails;
