import React, { useContext, useEffect, useState } from "react";
import { Modal, Steps, message } from "antd";
import Paragraph from "../UI/Paragraph";
import CaseOne from "./CaseOne";
import CaseTwo from "./CaseTwo";
import CaseThree from "./CaseThree";
import Button from "../UI/Button";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { useNavigate } from "react-router-dom";
import { attendEvent } from '../../apis/Events';

const BookingSummarySteps = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const {token, userId} = useContext(AuthContext)
  const [current, setCurrent] = useState(0);
  const [bookingResult, setBookingResult] = useState({});
  const eventDetails = JSON.parse(localStorage.getItem("OZEventAttend")) || {};
  const [inputValue, setInputValue] = useState();

  const getPaymentValue = (value) => {
    setInputValue(value);
  };

  const navigate = useNavigate();

  const steps = [
    {
      title: "Summary Booking",
      ContentTitle: "Summary Booking",
      content: <CaseOne details={eventDetails} />,
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

  const attendEventCheck = async () => {
    try{
        const res = await attendEvent(token, userId, eventDetails.id);
        Modal.success({
            title: res.status,
            content: res.message,
            centered: true,
            onOk: () => setCurrent(current + 1)
        });
    }catch(error){
        Modal.error({
            title: error.response.data.status,
            content: error.response.data.message,
            footer: false,
            centered: true,
            closable: true,
            maskClosable: true,
        });
    }
  };

  const next = () => {
    if (current === 1) {
      if(inputValue === null || inputValue === undefined){
        messageApi.open({
          type: 'error',
          content: 'Please Choose Payment Method',
        });
      }else{
        attendEventCheck();
      }
    } else {
      setCurrent(current + 1);
    }
  };

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
      {contextHolder}
    </>
  );
};

export default BookingSummarySteps;
