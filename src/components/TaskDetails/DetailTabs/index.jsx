import React from "react";
import "./DetailTabs.css";
import DetailTabsButton from "./DetailTabsButton";

const DetailTabsButtonData = [
  {
    text: "Detaylar",
  },
  {
    text: "Dosyalar",
  },
  {
    text: "Süreler",
  },
  {
    text: "Yorumlar",
  },
  {
    text: "Gannt",
  },
  {
    text: "Ayarlar",
  },
  {
    text: "Bağlantılar",
  },
];

function DetailTabs() {
  return (
    <div className="detail-tabs-container-wrapper">
      {DetailTabsButtonData.map((item, index) => {
        return (
          <>
            <DetailTabsButton key={index} item={item} index={index} />
          </>
        );
      })}
    </div>
  );
}

export default DetailTabs;
