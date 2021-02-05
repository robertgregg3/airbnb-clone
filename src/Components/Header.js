import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../images/airbnb-logo.png";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { ExpandMore, Language } from "@material-ui/icons";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon className="header__searchIcon" />
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
