import React from "react";
import "./Actions.css";
import Filter from "./Filter";
import ActionButton from "./ActionButton";
import FilterIcon from "../../assets/icons/filter.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import CopyIcon from "../../assets/icons/copy.svg";
import SortIcon from "../../assets/icons/sort.svg";

function Actions() {
  return (
    <div className="actions">
      <Filter />

      <ActionButton
        icon={FilterIcon}
        text={"Filtrele"}
        className={"actions-filter"}
      />
      <div className="actions-right">
        <ActionButton
          icon={PlusIcon}
          text={"Yeni Görev Ekle"}
          className={"add-new-task"}
        />
        <ActionButton icon={CopyIcon} text={"Alanları düzenle"} />
        <ActionButton icon={SortIcon} text={"Sırala"} />
      </div>
    </div>
  );
}

export default Actions;
