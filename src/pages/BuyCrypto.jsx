import React, { useState } from "react";
import svgImages from "../assets/images/svg-icons/svgImages";
import { coins } from "../assets/coins/coins";

const chartButtons = [
  { id: 0, url: svgImages.lineChart, name: "Line Chart" },
  { id: 1, url: svgImages.graphChart, name: "Graph Chart" },
];

const CoinItem = (props) => (
  <div
    className={`flex flex-col text-center my-1 hover:border-l-4
   border-blue-400
   ${props.item.id === props.selectedCoin?.id ? "border-l-4 shadow-md" : ""}
   `}
    onClick={() => props.onClick(props.item)}
  >
    <div className="coin flex justify-center text-lg">
      <img src={props.img} width={25} height={25} />
      <span className="text-uppercase">{props.name}</span>
    </div>
    <div className="text-sm">B : 2,951,155,0.6</div>
  </div>
);

const BuyCrypto = () => {
  const [chartType, setChartType] = useState(0);
  const [isCoinSelected, setIsCoinSelected] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const chartCoinClickHandle = (item) => {
    setIsCoinSelected(true);
    setSelectedCoin(item);
  };

  return (
    <div className="row mt-5 shadow-lg">
      <div className="col-lg-8">
        {/* Heading */}
        <div className="flex justify-between px-4 py-3 border-b-2 ">
          <div className="font-h4">Buy And Sell Rates</div>
          <div className="flex gap-1">
            {chartButtons.map((item) => (
              <div
                key={item.id}
                className={`p-2  shadow-md ${
                  chartType === item.id ? "bg-blue-100" : ""
                }`}
                onClick={() => setChartType(item.id)}
              >
                <img src={item.url} height={15} width={15} />
              </div>
            ))}
          </div>
        </div>
        {/* Chart & Table Start */}
        <div className="row">
          <div className="col-lg-2">
            <div
              className="overflow-y-scroll chart-coins"
              style={{ height: "500px" }}
            >
              {coins.map((item) => {
                if (item.name !== "inr") {
                  return (
                    <CoinItem
                      key={item.id}
                      name={item.name}
                      img={item.url}
                      item={item}
                      onClick={chartCoinClickHandle}
                      selectedCoin={selectedCoin}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="col-lg-10 bg-red-400">Coin Chart Here</div>
        </div>
      </div>
      <div className="col-lg-4 bg-green-200" style={{ height: "80vh" }}>
        Buy & sell form
      </div>
    </div>
  );
};

export default BuyCrypto;
