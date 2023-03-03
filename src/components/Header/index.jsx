import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <SearchBar />
      </div>
      <div className="header-right"></div>
    </div>
  );
}

export default Header;
