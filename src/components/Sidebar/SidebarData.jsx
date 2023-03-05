import React from "react";
import TaskSolid from "../../assets/icons/task-solid.svg";
import Folder from "../../assets/icons/folder.svg";
import FirmBag from "../../assets/icons/firm-bag.svg";
import Calendar from "../../assets/icons/calendar.svg";
import Users from "../../assets/icons/users.svg";
import Report from "../../assets/icons/reports.svg";
import Automation from "../../assets/icons/automation.svg";

export const SidebarData = [
  {
    title: "Görevlerim",
    icon: TaskSolid,
  },
  {
    title: "Projelerim",
    icon: Folder,
  },
  {
    title: "Firmalar",
    icon: FirmBag,
  },
  {
    title: "Takvim",
    icon: Calendar,
  },
  {
    title: "Kişiler",
    icon: Users,
  },
  {
    title: "Raporlar",
    icon: Report,
  },
  {
    title: "Otomasyon",
    icon: Automation,
  },
];
export default SidebarData;
