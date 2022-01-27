import { useState } from "react";
import { Card, Tabs, Tab } from "react-bootstrap";
import svgImages from "../assets/images/svg-icons/svgImages";

const History = () => {
  const sideTabs = [
    {
      id: 1,
      name: "Transaction",
      img: svgImages.transactionActive,
    },
    {
      id: 2,
      name: "Fixed Deposit",
      img: svgImages.fd_active,
    },
    {
      id: 3,
      name: "Exchanges",
      img: svgImages.exchangeActive,
    },
  ];

  const [activeSideTab, setActiveSideTab] = useState(sideTabs[0]);
  return (
    <div className="row mt-5">
      <div className="col-lg-3 p-0 shadow-inner">
        <Card>
          <Card.Body style={{ height: "80vh" }}>
            {sideTabs.map((item, i) => (
              <div
                key={item.id}
                className={`custom-tab flex px-4 py-3.5 hover:shadow-lg ${
                  activeSideTab.id === item.id && "shadow-lg"
                }`}
                onClick={() => setActiveSideTab(item)}
              >
                <img src={item.img} /> {item.name}
              </div>
            ))}
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-9 p-0 shadow-lg">
        <Card>
          <Card.Body style={{ height: "80vh" }}>
            {activeSideTab.id === 1 || activeSideTab.id === 3 ? (
              <div className="tab-heading-bar">
                <Tabs defaultActiveKey="crypto">
                  <Tab
                    eventKey="crypto"
                    title="Crypto"
                    className="shadow-md py-2"
                  >
                    <div className="table-heading flex gap-20 mt-2">
                      <div className="ml-4">Date & Time</div>
                      <div>Type</div>
                      <div>Asset Amount</div>
                      <div>Address</div>
                      <div>Status</div>
                      <div>Updated Ledger Balance</div>
                    </div>
                  </Tab>
                  <Tab eventKey="fiat" title="Fiat" className="shadow-md py-2">
                    <div className="table-heading flex gap-20 mt-2">
                      <div className="ml-4">Date & Time</div>
                      <div>Type</div>
                      <div>Asset Amount</div>
                      <div>Address</div>
                      <div>Status</div>
                      <div>Updated Ledger Balance</div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            ) : (
              <>
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
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default History;
