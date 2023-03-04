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
    cName: "sidebar-text",
  },
  {
    title: "Projelerim",
    icon: Folder,
    cName: "sidebar-text",
  },
  {
    title: "Firmalar",
    icon: FirmBag,
    cName: "sidebar-text",
  },
  {
    title: "Takvim",
    icon: Calendar,
    cName: "sidebar-text",
  },
  {
    title: "Kişiler",
    icon: Users,
    cName: "sidebar-text",
  },
  {
    title: "Raporlar",
    icon: Report,
    cName: "sidebar-text",
  },
  {
    title: "Otomasyon",
    icon: Automation,
    cName: "sidebar-text",
  },
];
export default SidebarData;
