import { Card } from "react-bootstrap";
import svgImages from "../assets/images/svg-icons/svgImages";
import { coins } from "../assets/coins/coins.js";

const InternalCard = () => (
  <div className="internal-card shadow-md px-2.5 py-2 rounded mt-3">
    <div className="font-h4 text-blue-700">Hedge Against INR</div>
    <div className="text text-gray-500 mt-2">
      Concerned about currency inflation ? This bucket is designed to beat it.
    </div>
    <div className="flex justify-between mt-3">
      <div className="icons flex">
        <img src={coins[1].url} height={25} width={25} />
        <img src={coins[2].url} height={25} width={25} />
        <img src={coins[3].url} height={25} width={25} />
      </div>
      <div className="price text-green-500">₹ 934,629,51</div>
    </div>
  </div>
);
const AIP = () => {
  return (
    <div className="row shadow-lg rounded">
      <div className="col-lg-8 p-20 relative">
        <div className="page-text ml-20 mb-10">
          <h3 className="font-f3">Automatic Investment Plan</h3>
        </div>
        <div className="text ml-10 w-1/2">
          Automatic Investment Plans (AIPs) help reduce the impact of volatility
          on your investment.
        </div>
        <div className="text ml-10 mt-10 w-1/2">
          By splitting the amount you invest across intervals, you no longer
          need to time the market to get the best prices.
        </div>
        <div className="aip-img absolute right-0 bottom-0">
          <img src={svgImages.aip} />
        </div>
      </div>
      <div className="col-lg-4 m-0">
        <Card>
          <Card.Body style={{ height: "80vh", border: "none" }}>
            <div className="card-heading">
              <div className="font-h4 text-blue-600">Create Your AIP</div>
            </div>
            <InternalCard />
            <InternalCard />
            <InternalCard />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AIP;
