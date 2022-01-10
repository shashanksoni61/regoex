import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import "./dashboard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/coins/atom.svg";

const Dashboard = () => {
  const settings = {
    dots: false,

    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const CoinButton = () => {
    return (
      <div className="coin-selector-container">
        <button className="coin-selector-btn">
          <div className="coin-holder small">
            <img src={img} />
            <span className="font-h4">Atom</span>
          </div>
        </button>
      </div>
    );
  };

  const vauldCoinButton = () => {
    return (
      <div class="coin-select-container ng-star-inserted">
        <button class="coin-select-btn">
          <div class="coin-holder small v-align-middle">
            <img
              src="../assets/coins/bch.svg"
              alt="inr"
              class="v-align-middle"
            />
          </div>
          <span class="coin-label font-h5">inr</span>
        </button>
      </div>
    );
  };
  return (
    <div className="row">
      <div className="col-lg-5">
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
                <button className="left-button">{`<`}</button>
                <div className="wrapper-container">
                  <CoinButton />
                  <CoinButton />
                  <CoinButton />
                  <CoinButton />
                  <CoinButton />
                  <CoinButton />
                  <CoinButton />
                  <CoinButton />
                </div>
                <button className="right-button">{`>`}</button>
              </div>
              <div>currency</div> complete kyc
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-4"></div>
      <div className="col-lg-3">Card 3</div>
      <div>
        <div class="coin-select-container ng-star-inserted">
          <button class="coin-select-btn">
            <div class="coin-holder small v-align-middle">
              <img
                src="./assets/coins/inr.svg"
                alt="inr"
                class="v-align-middle"
              />
            </div>
            <span class="coin-label font-h5">inr</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
