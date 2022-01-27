import svgImages from "../assets/images/svg-icons/svgImages";

const Referral = () => {
  const clipbordStyle = {
    position: "absolute",
    right: "1px",
    width: "39px",
    borderRadius: " 5px",
    height: "40px",
    top: "0",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      className="row shadow-lg"
      style={{
        height: "80vh",
        marginTop: "25px",
        backgroundImage: `url(${svgImages.referralBG})`,
        backgroundSize: "cover",
      }}
    >
      <div className="col-lg-8 ">
        <div className="referral-heading px-4 mt-3">
          <div className="font-h4">Invite Friends &</div>
          <div className="font-h3">Start Earning</div>
        </div>
        <div className="mt-3 p-4">
          Invite a friend to rego and enjoy a liftime of earnings from their
          activity. Earn
        </div>
        <div className="earn-feature mt-3 flex">
          <div className="earn-percentage-box ">
            <div className="earn-number">40%</div>
            <div className="text">Of their trading fees under pro trading</div>
          </div>
          <div className="earn-percentage-box">
            <div className="earn-number text-blue-400">5%</div>
            <div className="text">Of the interest paid out on the assets</div>
          </div>
          <div className="earn-percentage-box">
            <div className="earn-number">5%</div>
            <div className="text">Of the interest accrued on their loans</div>
          </div>
        </div>
        <div className="user-earing flex mt-5">
          <div className="user-earning-boc shadow-lg mx-3">
            <span className="user-earned-numbers text-blue-700">0.00</span>{" "}
            <br />
            <span>Total Referral Earnings</span>
          </div>
          <div className="user-earning-boc shadow-lg mx-3">
            <span className="user-earned-numbers">0</span> <br />
            <span>Total Referred Users</span>
          </div>
          <div className="user-earning-boc shadow-lg mx-3">
            <span className="user-earned-numbers">0.00</span> <br />
            <span>Earnings passed on as kickbacks</span>
          </div>
          <div className="user-earning-boc shadow-lg mx-3">
            <span className="user-earned-numbers">0.00</span> <br />
            <span>Earning Received As Kickbacks</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="user-refer-details p-10 mt-12 mr-5 shadow-md opacity-95">
          <div className="font-h3 text-center">Your Default Campaign</div>
          <div className="register-link bg-white mt-3 flex p-2 px-3 rounded shadow-sm relative">
            <div className="mr-2">Link</div>
            <div className="link-box">https://vauld.com/register/....</div>
            <div
              className="copy-icon ml-auto mr-0 bg-blue-400"
              style={clipbordStyle}
              onClick={() =>
                navigator.clipboard.writeText("https://vauld.com/register/")
              }
            >
              <img
                className="w-1/2 h-1/2"
                src={svgImages.copyIcon}
                height={15}
                width={15}
                style={{ color: "blue" }}
              />
            </div>
          </div>
          <div className="register-link bg-white mt-3 flex p-2 px-3 rounded shadow-sm relative">
            <div className="mr-2">Code</div>
            <div className="link-box">c11b9</div>
            <div
              className="copy-icon ml-auto mr-0 bg-blue-400"
              style={clipbordStyle}
            >
              <img
                className="w-1/2 h-1/2"
                src={svgImages.copyIcon}
                height={15}
                width={15}
                style={{ color: "blue" }}
              />
            </div>
          </div>
          <div className="bg-blue-400 w-full py-2.5 px-3 rounded mt-4 text-center text-white hover:shadow-lg">
            <button>Share</button>
          </div>
          <div className="w-full py-2.5 px-3 rounded mt-4 text-center text-blue-800">
            Your friends are not receiving kickbacks as part of this campaign
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
