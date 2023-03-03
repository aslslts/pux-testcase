import React from "react";
import "./SearchBar.css";
import SearchIcon from "../../assets/icons/search.svg";
import MicIcon from "../../assets/icons/mic.svg";
function SearchBar() {
  return (
    <div className="search-bar-wrapper">
      <input
        className="search-bar"
        placeholder="Tüm PM'de aramaya veya yaratmaya başlayın"
      />
      <div className="icons">
        <img className="icons-search" src={SearchIcon} width={12} height={12} />
        <div className="icons-line"></div>
        <img className="icons-mic" src={MicIcon} width={8} height={12} />
      </div>
    </div>
  );
}

export default SearchBar;
