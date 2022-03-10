import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import "./Wallet.css";
import usa from "../assets/usa.png";
import fly from "../assets/fly.png";
import up from "../assets/up.png";
import down from "../assets/down.png";
import stock from "../assets/stock.png";
import Chart from "./Chart";
import exchange from "../assets/exchange.png"
import arrow from '../assets/bottom-left.png'

function Wallet() {
  return (
    <div className="wallet">
      <Sidebar />
      <div className="wallet-content">
        <Topbar />
        <main className="wallet-main">
          <div className="info">
            <div className="info-title">Your Wallet(s)</div>
            <button className="btn info-action">
              <i className="fas fa-plus"></i>Create New Wallet
            </button>
          </div>
          <div className="wallet-main-content">
            <div className="wallet-left">
              <div className="wallet-search">
                <div className="search">
                  <span className="icon">
                    <i className="fa fa-search"></i>
                  </span>
                  <input type="text" placeholder="search" />
                </div>
                <a href="#" className="all">
                  All
                  <i className="fas fa-angle-down"></i>
                </a>
              </div>

              <div className="status">
                <div className="active">Active (3)</div>
                <div className="inactive">Inactive (2)</div>
                <div className="closed">Closed(0)</div>
              </div>
              <div className="country-info">
                {/*first country */}
                <div className="cont">
                  <div className="title">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png"
                      alt=""
                      className="flag"
                    />
                    <div className="title-text">
                      <div className="title-text-up">EUR Wallet</div>
                      <div className="title-text-down">EUR</div>
                    </div>
                  </div>
                  <div className="wallet-cash">
                    <div className="cash-text-up">€2,000,000,50</div>
                    <div className="default">Default</div>
                  </div>
                </div>
                {/*second country */}
                <div className="cont">
                  <div className="title">
                    <img src={usa} alt="" className="flag" />
                    <div className="title-text">
                      <div className="title-text-up">Personal account</div>
                      <div className="title-text-down">USD</div>
                    </div>
                  </div>
                  <div className="wallet-cash">
                    <div className="cash-text-up">$10,250.00</div>
                  </div>
                </div>
                {/*third country */}
                <div className="cont">
                  <div className="title">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                      alt=""
                      className="flag"
                    />
                    <div className="title-text">
                      <div className="title-text-up">School savings</div>
                      <div className="title-text-down">GBP</div>
                    </div>
                  </div>
                  <div className="wallet-cash">
                    <div className="cash-text-up">£500.00</div>
                  </div>
                </div>
              </div>
            </div>

            {/*right item starts here */}
            <div className="wallet-right">
              <div className="funds">
                <div className="account">
                  <div className="act">
                    <i className="fas fa-circle"></i>
                    <span>Active</span>
                  </div>
                  <div className="wal1">EUR Wallet</div>
                  <div className="wal2">EUR</div>
                </div>
                <div className="funds-amt">€2,000,000.00</div>
              </div>

              <div className="calc">
                <div className="calc-info">
                  <div>
                    <span>Ledger Balance</span>
                    <span>2,000,000.50</span>
                  </div>
                  <div>
                    <span>Total Incoming</span>
                    <span>€2,000,000.50</span>
                  </div>
                </div>
                <div className="calc-info">
                  <div>
                    <span>Blocked Balance</span>
                    <span>€0.00</span>
                  </div>
                  <div>
                    <span>Total Outgoing</span>
                    <span>€5,000,000.50</span>
                  </div>
                </div>
              </div>

              <div className="buttons">
                <div className="button btn bbt">
                  <img src={fly} alt="" />
                  <span>Payment</span>
                </div>
                <div className="button btn bbt">
                <img src={arrow} alt="" className="ikon" />
                  <span>Pay In</span>
                </div>
                <div className="button btn bbt">
                  <img src={exchange} alt="" className="ikon" />
                  <span>Exchange</span>
                </div> 
              </div>
              <div className="more">
                <a href="#">
                  More Option
                  <i className="fas fa-angle-down"></i>
                </a>
              </div>
              <div className="status2">
                <div className="active">Activity</div>
                <div className="inactive">Transaction</div>
                <div className="closed">Invoices</div>
              </div>
              <div className="filter">
                <a href="#" className="filter-text">
                  Month
                  <i className="fas fa-angle-down"></i>
                </a>
              </div>
              {/*adding chart section */}
              <div class="t-display">
                <div class="t-info">
                  <div class="t-cover">
                    <div class="t-img">
                      <img src={stock} alt="" />
                    </div>
                    <div class="t-text">
                      <div className="pay-d">Total transaction</div>
                      <div className="pay-amt">$88,600.00</div>
                    </div>
                  </div>
                  <div class="t-cover">
                    <div class="t-img">
                      <img src={down} alt="" />
                    </div>
                    <div class="t-text">
                      <div className="pay-d">Pay-in</div>
                      <div className="pay-amt">$4,600.00</div>
                    </div>
                  </div>
                  <div class="t-cover">
                    <div class="t-img">
                      <img src={up} alt="" />
                    </div>
                    <div class="t-text">
                      <div className="pay-d">Pay-out</div>
                      <div className="pay-amt">$72,600.00</div>
                    </div>
                  </div>
                </div>
              </div>
              {/*chart */}
              <Chart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Wallet;
