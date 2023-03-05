import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import HeaderButton from "./HeaderButton";
import Reminder from "../../assets/icons/reminder.svg";
import Target from "../../assets/icons/target.svg";
import Notification from "../../assets/icons/notification.svg";
import Users from "../../assets/icons/avatar.svg";
import Tag from "../Common/Tag";

const HeaderData = [
  {
    title: "Hatırlatıcılar",
    icon: Reminder,
  },
  {
    title: "Hedefler",
    icon: Target,
  },
  {
    title: "Bildirimler",
    icon: Notification,
  },
  {
    title: "Profil",
    icon: Users,
  },
];
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <SearchBar />
        <div className="header-left-bottom">
          <p className="header-text">Örnek Girdiler</p>
          <Tag type={"primary"} text={"X'in Aylık Performans raporu"} />
          <Tag
            type={"primary"}
            text={"UI/UX Maintenance adında bir görev yarat"}
          />
          <Tag
            type={"primary"}
            text={"Yarın saat 15:00 için toplantı oluştur"}
          />
        </div>
      </div>
      <div className="header-right">
        {HeaderData.map((item, index) => {
          return (
            <>
              <HeaderButton key={index} item={item} index={index} />
              {index === 1 && <div className="header-line"></div>}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
