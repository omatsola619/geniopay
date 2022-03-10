import React from "react";
import "./Sidebar.css";
import Logo from "../assets/logo.png";
import icon1 from "../assets/59.png";
import star from "../assets/star.png";
import sound from "../assets/sound.png";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      {/*dashboard logo */}
      <div className="logo">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      {/*card start here */}
      <div className="card money-card">
        <div className="card-body">
          <div className="money">
            <div className="left">
              <div className="icon-cover">
                <img src={icon1} alt="" className="icon1" />
              </div>
              <div className="balance">
                <div>Wallet Balance</div>
                <div className="sec">$15,001,00</div>
              </div>
            </div>
          </div>

          <div className="line text-center"></div>

          <div className="money">
            <div className="left">
              <div className="icon-cover">
                <img src={star} className="star" />
              </div>
              <div className="balance">
                <div>Awarded Points</div>
                <div className="sec">35</div>
              </div>
            </div>
          </div>
          <div className="line text-center"></div>
          <div className="buttons">
            <button className="btn btn-one">Pay In</button>
            <button className="btn  btn-two">Pay Out</button>
          </div>
        </div>
      </div>
      {/*navigation list */}

      <div className="navigation">
        <NavLink to="/" ActiveClassName="active">
          <i className="fas fa-border-all"></i>
          <div className="txt">Dashboard</div>
        </NavLink>
        <NavLink to="/wallet" ActiveClassName="active">
          <i className="fas fa-wallet"></i>
          <div className="txt">Wallet</div>
        </NavLink>
        <a href="#" className="six">
          <i className="fa fa-credit-card"></i>
          <div className="txt">Cards</div>
        </a>
        <a href="#" className="three">
          <i className="fas fa-dollar-sign"></i>
          <div className="txt">FX Centre</div>
        </a>
        <a href="#" className="four">
          <i className="fas fa-user-friends"></i>
          <div className="txt">Benefeciaries</div>
        </a>
        <a href="#" className="five">
          <i className="fas fa-tag"></i>
          <div className="txt">Perks</div>
        </a>
      </div>

      {/*refer and earn */}
      <div className="card refer">
        <div className="card-body">
          <div className="refer-info">
            <div className="img-con">
              <img src={sound} alt="" className="sound" />
            </div>

            <div className="refer-text">
              <h4>Refer and earn</h4>
              <div className="info">Use the below link to invite friends</div>
            </div>
          </div>
          <div className="btn w-100 text-center mt-3 inv">Invite Friends</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
