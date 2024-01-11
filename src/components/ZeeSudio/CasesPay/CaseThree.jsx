const CaseThree = () => {
    return (
      <div className="">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 order-summary">
            <div className="order-details">
              <h2>
                Amount Due
                <br /> #1123334
              </h2>
              <div className="d-flex align-items-center justify-content-between">
                <span className="date-period">
                  Date Period: {" Feb 2 , 2023  Invoice "}
                  <br />
                  <span className="invoice">Invoice</span>
                </span>
                <span className="location w-40">
                  OZ Working space
                  <br />
                  El- sheikh- zayed Giza, Egypt
                </span>
              </div>
            </div>
            <div className="order-description">
              <div className="pill">
                <div className="d-flex align-items-center justify-content-between line">
                  <span className="date-period">Description</span>
                  <span className="location">Subtotal</span>
                </div>
                <div className="d-flex align-items-center justify-content-between item-box ">
                  <span className="item-name">
                    {/* {"bookingData?.spaceDetails.title"} */}
                    Yoga As Therapy
                  </span>
                  <span className="item-price">
                    1100 EGP
                    {/* {"bookingData?.spaceDetails.price"} EGP */}
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between line">
                <span className="date-period">Tax 14%</span>
                <span className="location">
                  {/* {"(bookingData?.spaceDetails.price * 14) / 100"} */}
                  EGP
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between item-box">
                <span className="item-total">Total Price:</span>
                {/* <span className="item-total-price">
                  {`(bookingData?.spaceDetails.price * 14) / 100 +
                    bookingData?.spaceDetails.price`}{" "}
                  EGP
                </span> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 order-summary-black ">
            <div className="order-details">
              <div className="line">
                <h2>{"Yoga As Therapy"}</h2>
              </div>
              <div className="booking-items">
                <span>Date : Sunday, Feb. 2 , 2023</span>
                <span>Time : 09:00 PM - 12:00 PM (3 hours )</span>
                <span>Number of people : 3 People</span>
                <span>Cash notes : Total payment due in 2 days. </span>

                {/* {"getPeriod(bookingData?.time.start, bookingData?.time.end)"} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default CaseThree;