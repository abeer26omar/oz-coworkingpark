import React, { useContext, useEffect, useState } from "react";
import { message, Steps, theme } from "antd";
import Paragraph from "../UI/Paragraph";
import CaseOne from "./CasesPay/CaseOne";
import CaseTwo from "./CasesPay/CaseTwo";
import CaseThree from "./CasesPay/CaseThree";
import Button from "../UI/Button";
import { BookGymClass } from "../../apis/ZeeStudio";
import { AuthContext } from "../../apis/context/AuthTokenContext";

const PaymentGym = () => {

  const {token} = useContext(AuthContext)
  const [current, setCurrent] = useState(0);
  const [bookingResult, setBookingResult] = useState({});
  const [paymentDetails, setPaymentDetails] = useState(
    JSON.parse(sessionStorage.getItem("OZgymCourseDetails"))
  );
  const [inputValue, setInputValue] = useState("cash");

  const getPaymentValue = (value) => {
    setInputValue(value);
  };

  const steps = [
    {
      title: "Summary Booking",
      ContentTitle: "Summary Booking",
      content: <CaseOne details={paymentDetails} />,
    },
    {
      title: "Payment Method",
      ContentTitle: "Payment Method",
      content: <CaseTwo getPaymentValue={getPaymentValue} />,
    },
    {
      title: "Invoice details",
      ContentTitle: bookingResult?.invoice_title,
      content: <CaseThree bookingResult={bookingResult} />,
    },
  ];
  
  const bookRequset = async () => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      const result = await BookGymClass(token, paymentDetails.id, paymentDetails.date, inputValue, signal)
      setBookingResult(result)
      setCurrent(current + 1);
    }catch(error){
      console.log(error);
    }

  }
  const next = () => {
    if (current === 1) {
      bookRequset();
    } else {
      setCurrent(current + 1);
    }
  };
 
  useEffect(() => {
    setPaymentDetails(JSON.parse(sessionStorage.getItem("OZgymCourseDetails")));
  }, []);

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
   
      <div
        className="container py-5 steps-payment"
        style={{
          minHeight: "50vh",
        }}
      >
        <div className="px_7">
          <Steps
            type="navigation"
            size="small"
            current={current}
            className="site-navigation-steps"
            items={items}
          />
        </div>
        <div>
          <Paragraph className="paragraph_black py-5 font-5">
            {steps[current].ContentTitle}
          </Paragraph>
          <div className={current < steps.length - 1 ? "px_7" : null}>
            <div
              className=""
              // style={current < steps.length - 1 ? '' : null}
            >
              {steps[current].content}

              <div className="text-center p-5">
                {current < steps.length - 1 && (
                  <Button
                    tagType="link"
                    className="button-outLine btn-bg-white"
                    onClick={() => next()}
                  >
                    confirm
                  </Button>
                )}
              </div>
            </div>
            <div className="text-center">
              {current === steps.length - 1 && (
                <Button
                  to="/"
                  className="button-outLine btn-bg-white"
                  tagType="link"
                >
                  Back Home
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentGym;
