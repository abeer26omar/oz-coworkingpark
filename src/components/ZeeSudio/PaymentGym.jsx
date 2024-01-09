import React, { useEffect, useState } from "react";
import { Button, message, Steps, theme } from "antd";
import Paragraph from "../UI/Paragraph";
import CaseOne from "./CasesPay/CaseOne";
import CaseTwo from "./CasesPay/CaseTwo";
import CaseThree from "./CasesPay/CaseThree";
import { Link } from "react-router-dom";
// import Button from "../UI/Button";

const PaymentGym = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [paymentDetails, setPaymentDetails] = useState(
    JSON.parse(sessionStorage.getItem("OZgymCourseDetails"))
  );

  const contentStyle = {
    backgroundColor: token.colorBgBase,
  };

  const steps = [
    {
      title: "Summary Booking",
      ContentTitle: "Summary Booking",
      content: <CaseOne details={paymentDetails} style={""} />,
    },
    {
      title: "Payment Method",
      ContentTitle: "Payment Method",
      content: <CaseTwo />,
    },
    {
      title: "Invoice details",
      ContentTitle: "Amount Due",
      content: <CaseThree />,
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };
  // const prev = () => {
  //   setCurrent(current - 1);
  // };
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
              style={current < steps.length - 1 ? contentStyle : null}
            >
              {steps[current].content}

              <div className="text-center p-5">
                {current < steps.length - 1 && (
                  <Button
                    // to="/"
                    // tagType="link"
                    className="btn_default btn button-outLine btn-bg-white"
                    onClick={() => next()}
                  >
                    confirm
                  </Button>
                )}
              </div>
            </div>
            <div className="text-center">
              {current === steps.length - 1 && (
                <Link
                to ='/'
                  className="btn_default btn button-outLine btn-bg-white"
                  type=""
                  onClick={() => message.success("Processing complete!")}
                >
                  Back Home
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentGym;
