import React from "react";
import DetailTabs from "../DetailTabs";
import SubTasks from "../SubTasks";
import "./Details.css";
import AddTime from "../AddTime";
import TimeGraph from "../TimeGraph";
import DetailsAcilIcon from "../../../assets/task-icons/task-status-acil.svg";
import DetailsUserIcon from "../../../assets/task-icons/task-details-avatar.svg";

function Details() {
  return (
    <div className="details-container">
      <DetailTabs />
      <div className="details-dashboard">
        <div>
          <SubTasks />
          <TimeGraph />
        </div>
        <div className="details">
          <div className="details-description">
            <span className="details-descriptions">Açıklama</span>
            <span className="details-description-text">
              Lorem ipsum dolor sit amet consectetur. Diam nibh mi elementum
              imperdiet sit mauris tempus. Ornare quisque tortor rhoncus nisl
              sed diam. Eget porttitor amet congue cum laoreet dictum at cras.
              Ipsum pellentesque convallis.
            </span>
          </div>
          <div className="details-tags">
            <span className="details-descriptions">Etiket</span>
            <span className="details-tag-text">
              Etiket-1, Etiket-2, Etiket-3, Etiket-4
            </span>
          </div>
          <div>
            <div>
              <span className="details-descriptions">Başlangıç Tarihi</span>
              <span className="details-calendar">09.01.2022</span>
            </div>
            <div>
              <span className="details-descriptions">Bitiş Tarihi</span>
              <span className="details-calendar">12.01.2022</span>
            </div>
          </div>
          <div>
            <span className="details-descriptions">Süre</span>
            <span className="details-hour">Saat 24 </span>
            <span className="details-hour">Dakika 00</span>
          </div>
          <div>
            <span className="details-descriptions">Öncelik</span>
            <img src={DetailsAcilIcon} />
          </div>
          <div>
            <span className="details-descriptions">Kişiler</span>
            <div className="details-person-edit">
              <img src={DetailsUserIcon} />
              <span className="details-person-text">Guillemette Jacob</span>
            </div>
            <div className="details-person-edit">
              <img src={DetailsUserIcon} />
              <span className="details-person-text">Yasmine Thys</span>
            </div>
            <div className="details-person-edit">
              <img src={DetailsUserIcon} />
              <span className="details-person-text">Solene Aubert</span>
            </div>
          </div>
        </div>
        <div>
          <AddTime />
        </div>
      </div>
    </div>
  );
}

export default Details;
