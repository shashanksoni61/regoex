import { useState } from "react";
import { Card } from "react-bootstrap";
import Switch from "react-switch";
import { coins } from "../assets/coins/coins";
import svgImages from "../assets/images/svg-icons/svgImages";

const FixedDeposit = () => {
  const coinOptions = coins
    .map((item) => {
      return { id: item.id, name: item.name, value: item.name, url: item.url };
    })
    .filter((item) => item.name !== "inr");

  const [autoRenew, setAutoRenew] = useState(false);
  const handleAutoRenew = () => {
    setAutoRenew(!autoRenew);
  };

  return (
    <div className="row mt-5">
      <div className="col-lg-4">
        <Card className="shadow-lg">
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
      <div className="col-lg-8">
        <Card className="shadow-lg" style={{ height: "100%" }}>
          <Card.Body>
            <div className="card-heading">
              <div className="font-h3">Fixed Deposit</div>
            </div>
            <div className="card-body">
              <div className="table-heading flex gap-20 mt-2">
                <div className="ml-8">Principle Amount</div>
                <div>Start Date</div>
                <div>Term</div>
                <div>Payout Amount</div>
                <div>Payout Date</div>
              </div>
              <div className="table-body flex justify-center items-center mt-28 flex-col">
                <img src={svgImages.noFd} height={120} width={120} />
                <div className="font-h3 mt-3">
                  Create A Fixed Deposit To Get Started
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FixedDeposit;
