import React, { Component } from "react";

export default class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <form className="topbar__searchBox">
          <input
            className="topbar__searchBox--input"
            type="text"
            id="inputSearchBox"
            name="Search"
            placeholder="Search"
          />
          <img
            src="/Assets/Icons/Search.svg"
            className="topbar__searchBox--img"
            alt="myImg"
          />
        </form>
        <div className="topbar__rightBox">
          <img
            src="../Assets/Avatar/Avatar.jpg"
            className="topbar__rightBox--userImg"
            alt="myImg"
          />
          <div className="topbar__rightBox--optionForm">
            <img
              src="../Assets/Icons/Dropdown.svg"
              className="topbar__rightBox--optionForm__icon"
              alt="myImg"
            />
          </div>
        </div>
      </div>
    );
  }
}
