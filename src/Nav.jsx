import React from "react";

function Nav() {
  return (
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header">
        <a id="nav-title" href="#" target="_blank" className="m-5">
          <i className="fab fa-codepen"></i>Todo
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button">
          <i className="fas fa-palette"></i>
          <span>Home</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-images"></i>
          <span>Dashboard</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-thumbtack"></i>
          <span>User</span>
        </div>
        <hr />
        <div className="nav-button">
          <i className="fas fa-heart"></i>
          <span>All Tasks</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-chart-line"></i>
          <span>To do</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-fire"></i>
          <span>In progress</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-magic"></i>
          <span>Done</span>
        </div>
        <hr />
        <div className="nav-button">
          <i className="fas fa-gem"></i>
          <span>About us</span>
        </div>
        <div id="nav-content-highlight"></div>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" />
          </div>
          <div id="nav-footer-titlebox">
            <a id="nav-footer-title" href="#" target="_blank">
              Ghori
            </a>
            <span id="nav-footer-subtitle">Admin</span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <i className="fas fa-caret-up"></i>
          </label>
        </div>
        <div id="nav-footer-content">
          {/* <Lorem> */}
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
          {/* </Lorem> */}
        </div>
      </div>
    </div>
  );
}

export default Nav;
