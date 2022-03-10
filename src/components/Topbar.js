import React from "react";
import "./Topbar.css";
import tree from "../assets/tree.png";
import dp from "../assets/dp.jpg";
import { NavDropdown } from "react-bootstrap";

function Topbar() {
  return (
    <div className="topbar">
      <div className="greet">Welcome, Omatsola Eyeoyibo</div>
      <div className="nav">
        <div className="search">
          <span className="icon">
            <i className="fa fa-search"></i>
          </span>
          <input type="text" placeholder="search" />
        </div>
        <div className="plant">
          <img src={tree} alt="" style={{ width: "20px", height: "20px" }} />
          <div className="txt">0 planted</div>
        </div>
        <div className="notif">
          <i className="fa fa-bell"></i>
        </div>
        <div className="user dropdown">
          <img src={dp} alt="" className="dp" />
          <div className="name">
            <div className="statuses">Verified</div>
            <div className="me">Omatsola</div>
          </div>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title=""
            menuVariant="dark"
            className="down"
          >
            <NavDropdown.Item href="#action/3.1" className="profile">
              <img src={dp} alt="" className="dp" />
              <div className="profile-intro">Omatsola Eyeoyibo</div>
            </NavDropdown.Item>
            <NavDropdown.Item className="profile-text">
              FrontEnd Developer
            </NavDropdown.Item>
            <NavDropdown.Item className="profile-text">
              Setting
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="text-danger profile-text">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          {/* <i className="fa fa-angle-down"></i> */}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
