const CaseThree = ( {bookingResult} ) => {



  return (
    <div className="">
      <div className="row" >
        <div className="col-lg-6 col-md-6 col-sm-12 order-summary">
          <div className="order-details">
            <h2>
              {bookingResult.invoice_title}
              <br /> #{bookingResult.invoice_id}
            </h2>
            <div className="d-flex align-items-center justify-content-between">
              <span className="date-period">
                Date Period: {bookingResult.invoice_date}
                <br />
                <span className="invoice">Invoice</span>
              </span>
              <span className="location w-40" 
              dangerouslySetInnerHTML={{
                __html: bookingResult.invoice_address.replace(/\n/g, "<br />"),
              }}>
                {/* {bookingResult.invoice_address} */}
              </span>
            </div>
          </div>
          <div className="order-description">
            <div className="pill">
              <div className="d-flex align-items-center justify-content-between line">
                <span className="date-period">Description</span>
              </div>
              <div className="d-flex align-items-center justify-content-between item-box ">
                <span className="item-name">{bookingResult.training.title}</span>
                <span className="item-price">
                  {bookingResult.invoice_price} EGP
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between line">
              <span className="date-period">Tax 14%</span>
              <span className="location">
                {Math.floor(bookingResult.invoice_price * 14) / 100}
                EGP
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between item-box">
              <span className="item-total">Total Price:</span>
              <span className="item-total-price">
                {Math.floor(bookingResult.invoice_price * 14) / 100 +
                  bookingResult.invoice_price}
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
              <span>Date : {bookingResult.training.start_date}</span>
              <span>
                Time :{bookingResult.training.start_time}{"-"}
                {bookingResult.training.end_time}
              </span>
              <span>Cash notes: {bookingResult.payment_type}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaseThree;
