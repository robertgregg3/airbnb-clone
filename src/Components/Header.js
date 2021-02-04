import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../images/airbnb-logo.png";
import "../css/Header.css";
import { Avatar } from "@material-ui/core";
import { ExpandMore, Language } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
