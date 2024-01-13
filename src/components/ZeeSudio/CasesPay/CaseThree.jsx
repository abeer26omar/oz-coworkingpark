const CaseThree = ( {bookingRuslt} ) => {



  return (
    <div className="">
      <div className="row" >
        <div className="col-lg-6 col-md-6 col-sm-12 order-summary">
          <div className="order-details">
            <h2>
              Amount Due
              <br /> #1123334
            </h2>
            <div className="d-flex align-items-center justify-content-between">
              <span className="date-period">
                Date Period:{bookingRuslt.invoice_date}
                <br />
                <span className="invoice">Invoice</span>
              </span>
              <span className="location w-40">
                {bookingRuslt.invoice_address}
              </span>
            </div>
          </div>
          <div className="order-description">
            <div className="pill">
              <div className="d-flex align-items-center justify-content-between line">
                <span className="date-period">Description</span>
              </div>
              <div className="d-flex align-items-center justify-content-between item-box ">
                <span className="item-name">{bookingRuslt.training.title}</span>
                <span className="item-price">
                  {bookingRuslt.invoice_price} EGP
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between line">
              <span className="date-period">Tax 14%</span>
              <span className="location">
                {Math.floor(bookingRuslt.invoice_price * 14) / 100}
                EGP
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between item-box">
              <span className="item-total">Total Price:</span>
              <span className="item-total-price">
                {Math.floor(bookingRuslt.invoice_price * 14) / 100 +
                  bookingRuslt.invoice_price}
                EGP
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 order-summary-black ">
          <div className="order-details">
            <div className="line">
              <h2>{"Yoga As Therapy"}</h2>
            </div>
            <div className="booking-items">
              <span>Date : {bookingRuslt.training.start_date}</span>
              <span>
                Time :{bookingRuslt.training.start_time}{" "}
                {bookingRuslt.training.end_time}
              </span>
              <span>Number of people : 3 People</span>
              <span>Cash notes : {bookingRuslt.payment_type}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaseThree;
