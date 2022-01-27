import Modal from "react-modal";
import kycIcon from "../assets/images/svg-icons/KYC_s2.svg";
import docIcon from "../assets/images/svg-icons/id-card.svg";

const KycModal = ({ showModel, setShowModel }) => {
  const customStyles = {
    content: {
      inset: "70px",
      overflow: "hiddem",
    },
  };
  return (
    <div>
      <Modal
        isOpen={showModel}
        onRequestClose={() => setShowModel(false)}
        style={customStyles}
      >
        <div>
          <div class="grid grid-cols-7">
            <div
              class="col-span-2"
              style={{ height: "530px", borderRight: "1px solid lightgray" }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <img src={kycIcon} height={100} width={100} />
                <div className="font-h4 color-secondary-dark mt-6 text-center">
                  Upload an identiy document (Passport, Voter ID, Aadhar Card)
                  and a copy of your PAN card
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <div className="heading px-5 py-4">
                <div className="font-h4 color-secondary-dark mt-2">
                  3 Step KYC Process
                </div>
                <span className="font-h5 color-secondary-hint mt-3">
                  Process Promptly With Automated Verification
                </span>
              </div>
              <div className="kyc-progress-widget">
                <div id="app" class="bg-green-300">
                  <span class="head bg-green-300"></span>
                  <span class="arrow-tail"></span>
                  <span class="text"> Step 1 : Upload Documents</span>
                </div>
                <div id="app" class="bg-blue-100">
                  <span class="head bg-blue-100"></span>
                  <span class="arrow-tail"></span>
                  <span class="text bg-blue-100">Step 2 Take Selfie</span>
                </div>
                <div id="app" class="bg-blue-100">
                  <span class="head bg-blue-100"></span>
                  <span class="arrow-tail"></span>
                  <span class="text">Step 3: Confirm Your Details</span>
                </div>
              </div>
              <div className="document-section px-5 py-4 my-2">
                <div className="doc-heading">Select Document Type</div>
                <select
                  class="form-select mt-2"
                  aria-label="Default select example"
                  style={{ width: "25%" }}
                >
                  <option disabled selected>
                    Choose
                  </option>
                  <option value="1">Passport</option>
                  <option value="2">VoterId</option>
                  <option value="3">Aadhar Card</option>
                </select>
              </div>
              <div className="document-images">
                <div className="row px-5 py-2">
                  <div className="col-lg-4 flex justify-center h-40 w-40">
                    <div className="form-control !flex items-center justify-center">
                      <label htmlFor="frontImage">
                        <div>
                          <img src={docIcon} />
                          <input
                            type="file"
                            id="frontImage"
                            style={{ display: "none" }}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4  flex justify-center h-40 w-40">
                    <div className="form-control !flex items-center justify-center">
                      <label htmlFor="backImage">
                        <div>
                          <img src={docIcon} />
                          <input
                            type="file"
                            id="backImage"
                            style={{ display: "none" }}
                          />
                        </div>
                      </label>
                    </div>{" "}
                  </div>
                  <div className="col-lg-4  flex justify-center h-40 w-40">
                    <div className="form-control !flex items-center justify-center">
                      <label htmlFor="pancard">
                        <div>
                          <img src={docIcon} />
                          <input
                            type="file"
                            id="pancard"
                            style={{ display: "none" }}
                          />
                        </div>
                      </label>
                    </div>{" "}
                  </div>
                  <div className="col-lg-4 my-4">
                    <button type="submit" className="btn btn-primary">
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default KycModal;
