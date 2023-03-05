import React from "react";
import ListIcon from "../../../assets/icons/list.svg";
import GalleryIcon from "../../../assets/icons/gallery.svg";
import TimelineIcon from "../../../assets/icons/timeline.svg";
import FilterItem from "./FilterItem";
import "./Filter.css";

const FilterData = [
  {
    icon: ListIcon,
    text: "Liste",
  },
  {
    icon: GalleryIcon,
    text: "Galeri",
  },
  {
    icon: TimelineIcon,
    text: "Timeline",
  },
];

function Filter() {
  return (
    <div className="filter-container-wrapper">
      {FilterData.map((item, index) => {
        return (
          <>
            <FilterItem key={index} item={item} index={index} />
          </>
        );
      })}
    </div>
  );
}

export default Filter;
