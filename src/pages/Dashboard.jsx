import React, { useState, useCallback } from "react";
import { Card, Container } from "react-bootstrap";
import $ from "jquery";
import Switch from "react-switch";
import Search from "react-select-search";
import "./dashboard.css";
import { coins, scroll_arrow } from "../assets/coins/coins";
import img from "../assets/coins/inr.svg";

const Dashboard = () => {
  const [autoRenew, setAutoRenew] = useState(false);
  const [midCoin, setMidCoin] = useState(() => {
    const index = coins.findIndex((item) => item.name === "inr");
    if (index !== -1) return coins[index];
    return { name: "INR", url: img };
  });

  const handleAutoRenew = () => {
    setAutoRenew(!autoRenew);
  };

  function scroll(direction) {
    let far = ($(".wrapper-container").width() / 2) * direction;
    let pos = $(".wrapper-container").scrollLeft() + far;
    $(".wrapper-container").animate({ scrollLeft: pos }, 500);
  }

  const coinOptions = coins
    .map((item) => {
      return { id: item.id, name: item.name, value: item.name, url: item.url };
    })
    .filter((item) => item.name !== "inr");

  console.log(coinOptions);
  const tradeItmeStyle = {
    display: "flex",
    justifyContent: "space-around",
    boxShadow: "0 5px 10px 0px rgba(0,0,0,0.2)",
    padding: "5px 5px",

    margin: "5px 0px",
  };

  const TradeItem = () => {
    return (
      <div className="trade-item" style={tradeItmeStyle}>
        <span className="item-pair">BTC/USDT</span>
        <span className="item-price">42,983.82</span>
        <span className="item-change">2.654</span>
      </div>
    );
  };

  const CoinButton = (props) => {
    return (
      <div className="coin-selector-container">
        <button
          className="coin-select-btn"
          onClick={() => props.onClick(props.item)}
        >
          <div className="coin-holder small">
            <img src={props.img} height={25} width={25} />
            <span className="font-h4">{props.name}</span>
          </div>
        </button>
      </div>
    );
  };

  const handleCoinClick = (item) => {
    setMidCoin(item);
  };
  return (
    <div className="row">
      <div className="col-lg-4">
        <Card>
          <Card.Body>
            <div className="card-heading">
              <div className="font-h3">Your Funds</div>

              <div className="font-h6">Secured with bitGoBitGo</div>
            </div>
            <div className="card-content">
              <div className="balance">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="font-h1 text-bold color-awe">€ 0.00</div>
                    <div className="font-h4">Total Asset Value</div>
                  </div>
                  <div className="col-lg-6">
                    <div className="font-h1 text-bold color-awe">€ 0.00</div>
                    <div className="font-h4">Total Interest Earned </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="coin-selector-body">
                <button className="left-button" onClick={() => scroll(-1)}>
                  <img src={scroll_arrow.left} />
                </button>
                <div className="wrapper-container">
                  {coins.map((item) => (
                    <CoinButton
                      key={item.id}
                      img={item.url}
                      name={item.name}
                      item={item}
                      onClick={handleCoinClick}
                    />
                  ))}
                </div>
                <button className="right-button" onClick={() => scroll(1)}>
                  <img src={scroll_arrow.left} />
                </button>
              </div>
              <div className="row">
                <div className="coin-balance">
                  <div className="coin-holder main">
                    <img src={midCoin.url} height={35} width={35} />
                  </div>{" "}
                  &nbsp;
                  <span className="color-secondary-dark font-h3 text-uppercase">
                    {midCoin.name} 0.00
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="rate-section">
                  {midCoin.type === "currency" ? (
                    <>
                      <div>
                        <span className="font-h4 color-secondary-dark ">
                          Complete KYC &amp; deposit INR to buy crypto
                        </span>
                        <span className="font-h1 color-awe ">
                          {" "}
                          &nbsp;&nbsp;{" "}
                        </span>
                      </div>
                      <div className="font-h5 color-secondary-hint">
                        KYC takes only 2 minutes and is auto-approved instantly{" "}
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <span className="font-h4 color-secondary-dark ">
                          Add funds to earn
                        </span>
                        <span
                          className="font-h4 color-awe "
                          style={{ fontWeight: 600, fontSize: "35px" }}
                        >
                          &nbsp;{midCoin.interestMsg}
                        </span>
                        <span className="font-h4 color-secondary-dark ">
                          &nbsp;interest on this token
                        </span>
                      </div>
                      <div className="font-h5 color-secondary-hint">
                        {" "}
                        Paid out every week, or at the end of the FD term{" "}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <button className="btn btn-primary card-action-btn">
              <span>
                <span className="v-align-middle d-inline-block ">
                  {midCoin.type === "currency"
                    ? "Complete KYC to DEPOSIT INR"
                    : "Deposite Fund"}
                </span>
              </span>
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-4">
        <Card>
          <Card.Body>
            <div className="card-heading">
              <div className="font-h3">Fixed Deposit</div>
              <div className="d-flex justify-content-between">
                {" "}
                <span className="card12 m-3">Amount</span>
                <span className="card12 m-3">Balance 0.00 BTC</span>
              </div>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                marginTop: "20px",
                marginBottom: "80px",
              }}
            >
              <select
                className="form-control text-uppercase"
                style={{
                  width: "20%",
                  left: "20px",
                  position: "absolute",
                }}
              >
                {coinOptions.map((item) => (
                  <option
                    className="text-uppercase"
                    key={item.id}
                    value={item.value}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Amount"
                style={{
                  width: "65%",
                  marginLeft: "20px",
                  position: "absolute",
                  right: "20px",
                }}
              />
            </div>
            <div class="term btn m-3 d-flex justify-content-center ">
              <div class="term d-flex-column">
                <div class="termt">
                  <span>Term</span>
                </div>
                <div class="termd">
                  <span class="text-info">30 Days</span>
                </div>
              </div>
              <div class="btn d-flex justify-content-around ">
                <div class="rnwtext termt m-1">
                  <span>Auto Renew</span>
                </div>
                <div class="btnt m-1">
                  <Switch
                    checked={autoRenew}
                    onChange={handleAutoRenew}
                    onColor="#3c81a3"
                    offColor="#1a488f"
                  />
                </div>
                <div class="optn text-info m-1">
                  <span>Advanced Options</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="coin-balance">
                <span className="font-h3 text-uppercase">
                  INTEREST 6.70% APY
                </span>
              </div>
            </div>
            <div className="row text-center">
              <div className="rate-section" style={{ marginBottom: "105px" }}>
                <div>
                  <div className="font-h4 color-secondary-dark ">
                    Payout Amount BTC 0.00
                  </div>
                  <div className="font-h5 color-secondary-hint">
                    44.444% higher than our base return
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-primary card-action-btn">
              <span>
                <span class="v-align-middle d-inline-block ">
                  Create Fixed Deposit
                </span>
              </span>
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-4">
        <Card>
          <Card.Body>
            <div className="card-heading">
              <div className="font-h3">Start Trading</div>
            </div>
            <div
              className="title-bar card12 my-3"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <span>Pairs</span>
              <span className="two-titles" style={{}}>
                <span style={{}}>Price</span>
                <span style={{ marginLeft: "20px" }}>24H Change %</span>
              </span>
            </div>
            <div className="trade-item-table">
              <TradeItem />
              <TradeItem />
              <TradeItem />
              <TradeItem />
              <TradeItem />
              <TradeItem />
              <TradeItem />
              <TradeItem />
              <TradeItem />
              <TradeItem />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
