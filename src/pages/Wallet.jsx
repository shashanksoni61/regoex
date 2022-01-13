import React from "react";
import Table from "react-bootstrap/Table";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { coins } from "../assets/coins/coins";

export default function Wallet() {
  const coinOptions = coins
    .map((item) => {
      return { id: item.id, name: item.name, value: item.name, url: item.url };
    })
    .filter((item) => item.name !== "inr");

  console.log(coinOptions);
  return (
    <div className="row main-row">
      <div className="col-lg-8" style={{ padding: "30px" }}>
        <div className="fiat-section">
          <div className="currency">Fiat</div>
          <Table hover size="sm">
            <thead>
              <tr>
                <th className="color-secondary-hint">Asset Type</th>
                <th className="color-secondary-hint">Balance</th>
                <th className="color-secondary-hint">Available Balance</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {coins.map((item) => {
                if (item.type === "currency") {
                  return (
                    <tr key={item.id}>
                      <td className="text-uppercase">
                        <img src={item.url} /> {item.name}
                      </td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>
                        <img src={item.imps} /> &nbsp;
                        <img src={item.rtgs} />
                        &nbsp;
                        <img src={item.neft} />
                        &nbsp;
                        <img src={item.upi} />
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </div>
        <div className="crypto-section">
          <div className="currency">Crypto</div>
          <Table striped hover size="sm">
            <thead>
              <tr>
                <th className="color-secondary-hint">Asset Type</th>
                <th className="color-secondary-hint">Total Balance</th>
                <th className="color-secondary-hint">Asset Value</th>
                <th className="color-secondary-hint">Available Balance</th>
                <th className="color-secondary-hint">Interest Earned</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((item) => {
                if (item.type !== "currency") {
                  return (
                    <tr key={item.id}>
                      <td className="text-uppercase">
                        <img src={item.url} /> {item.name}
                      </td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="col-lg-4" style={{ padding: "30px" }}>
        <div style={{ display: "block" }}>
          <Tabs defaultActiveKey="first">
            <Tab eventKey="first" title="Deposit">
              <div className="deposit-tab">
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div className="token">
                    <div>Select Token</div>
                    <div>
                      <select
                        className="form-control text-uppercase"
                        style={{
                          marginTop: "20px",
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
                    </div>
                  </div>
                  <div className="qr-code">Scan QR</div>
                </div>
                <div className="crypto-address" style={{ marginTop: "30px" }}>
                  <h3 className="font-h4" style={{ marginLeft: "20px" }}>
                    Address
                  </h3>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </Tab>
            <Tab eventKey="second" title="Send">
              <div
                className="deposit-tab"
                style={{ display: "flex", padding: "10px" }}
              >
                <div className="token">
                  <div>Select Token</div>
                  <div>
                    <select
                      className="form-control text-uppercase"
                      style={{
                        marginTop: "20px",
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
                  </div>
                </div>
              </div>
              <div className="sending-amount">
                Amount
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.59)",
                  }}
                >
                  <div
                    className="coin"
                    style={{
                      display: "block",
                    }}
                  >
                    <img src={coinOptions[0].url} /> BTC
                  </div>
                  <div className="amount">
                    <input
                      type="text"
                      className="form-control"
                      style={{ border: "none", width: "120%" }}
                      placeholder="Enter Amount"
                    />
                  </div>
                </div>
              </div>
              <div className="receiver-amount" style={{ marginTop: "50px" }}>
                Receiver's Amount
                <div
                  style={{
                    boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.59)",
                  }}
                >
                  <div className="amount">
                    <input
                      type="text"
                      className="form-control"
                      style={{ border: "none", width: "120%" }}
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="third" title="Loan">
              Hii, I am 3rd tab content
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
