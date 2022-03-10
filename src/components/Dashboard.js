import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import usa from "../assets/usa.png";
import mob from "../assets/mobmoney.png";
import voucher from "../assets/voucher.png";
import transfer from "../assets/transfer.png";
import stock from "../assets/stock.png";
import up from "../assets/up.png";
import down from "../assets/down.png";
import Chart from "./Chart";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />
        <main>
          <div className="cont d-flex justify-content-between">
            <div>Wallet(5)</div>
            <div>
              <a href="#">View all wallets</a>
            </div>
          </div>
          <div className="account-cards">
            <div className="container fluid">
              <div className="row">
                {/*first card */}
                <div className="col-lg-4">
                  <div className="card country-display1">
                    <div className="card-body">
                      <div className="country d-flex align-items-center justify-content-between">
                        <div className="country-details">
                          <div className="item">Personal account</div>
                          <div className="item">USD</div>
                        </div>
                        <img src={usa} alt="" className="flag" />
                      </div>
                      <div className="cash mt-3">$10,250.00</div>
                    </div>
                  </div>
                </div>
                {/*second card */}
                <div className="col-lg-4">
                  <div className="card country-display2">
                    <div className="card-body">
                      <div className="country d-flex align-items-center justify-content-between">
                        <div className="country-details">
                          <div className="item">EUR Wallet</div>
                          <div className="item">EUR</div>
                        </div>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png"
                          alt=""
                          className="flag"
                        />
                      </div>
                      <div className="cash mt-3">€4000.53</div>
                    </div>
                  </div>
                </div>
                {/*third card */}
                <div className="col-lg-4">
                  <div className="card country-display3">
                    <div className="card-body">
                      <div className="country d-flex align-items-center justify-content-between">
                        <div className="country-details">
                          <div className="item">School fees</div>
                          <div className="item">GBP</div>
                        </div>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                          alt=""
                          className="flag"
                        />
                      </div>
                      <div className="cash mt-3">£50.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*quick links */}
          <div className="quick-links">
            <div className="links-intro">
              <h4>Quick Links</h4>
              <div className="link-intro">
                Your frequently used actions for easy access
              </div>
            </div>
            <div className="link-cards">
              <div className="container fluid">
                <div className="row roww">
                  {/*item 1 */}
                  <div className="link-info">
                    <div className="link-icon">
                      <i className="fas fa-wallet"></i>
                    </div>
                    <div className="link-text">Add new Wallet</div>
                  </div>
                  {/*item 2 */}
                  <div className="link-info">
                    <div className="link-icon">
                      <i className="fa fa-credit-card"></i>
                    </div>
                    <div className="link-text">Add new Card</div>
                  </div>
                  {/*item 3 */}
                  <div className="link-info">
                    <div className="link-icon">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                    <div className="link-text">Balance Exchange</div>
                  </div>
                  {/*item 4 */}
                  <div className="link-info">
                    <div className="link-icon">
                      <img src={transfer} alt="" className="icon-img" />
                    </div>
                    <div className="link-text">Transfer to Account</div>
                  </div>
                  {/*item 5 */}
                  <div className="link-info">
                    <div className="link-icon">
                      <img src={voucher} alt="" className="icon-img" />
                    </div>
                    <div className="link-text">Generate Voucher</div>
                  </div>
                  {/*item 6 */}
                  <div className="link-info">
                    <div className="link-icon">
                      <img src={mob} alt="" className="icon-img" />
                    </div>
                    <div className="link-text">Mobile Money</div>
                  </div>
                  {/*item 7 */}
                  <div className="link-info">
                    <div className="link-icon">
                      <i className="fas fa-wallet"></i>
                    </div>
                    <div className="link-text">Payment link</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*chart section */}
          <div class="chart-section">
            <div class="activity">
              <div class="activity-month">
                <div className="act-txt">Activity</div>
                <a href="#" class="month">
                  <span>Month</span>
                  <i class="fas fa-chevron-down"></i>
                </a>
              </div>
              <div class="transaction">
                <a href="#">View Transaction History</a>
              </div>
            </div>
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
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
