import React from "react";
import AssistantIcon from "../../assets/icons/assistant.svg";
import NotepadIcon from "../../assets/icons/notepad.svg";

function FooterTab() {
  return (
    <div className="footer-tabs">
      <div className="footer-tab1">
        <img src={NotepadIcon} />
        <span className="footer-text">Not Defteri</span>
      </div>
      <div className="footer-tab2">
        <img src={AssistantIcon} />
        <span className="footer-text">Asistan</span>
      </div>
    </div>
  );
}

export default FooterTab;
