import React from "react";
import logo from "../../assets/images/logo.svg";
import "./LogoGroup.css";

const LogoGroup = () => {
  return (
    <>
      <div className="logo-group">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="header-title">
          Let's Learn / <span>Online Code Editor</span>
        </h3>
      </div>
    </>
  );
};

export default LogoGroup;
