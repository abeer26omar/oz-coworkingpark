import React, { useContext, useEffect, useState } from "react";
import { Modal, Steps, message } from "antd";
import Paragraph from "../UI/Paragraph";
import CaseOne from "./CasesPay/CaseOne";
import CaseTwo from "./CasesPay/CaseTwo";
import CaseThree from "./CasesPay/CaseThree";
import Button from "../UI/Button";
import { BookKnowledgeCourse } from "../../apis/OzKnowledge";
import { AuthContext } from "../../apis/context/AuthTokenContext";

const BookCourse = () => {

  const {token} = useContext(AuthContext)
  const [current, setCurrent] = useState(0);
  const [bookingResult, setBookingResult] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const [paymentDetails, setPaymentDetails] = useState(
    JSON.parse(sessionStorage.getItem("OZCourseDetails"))
  );
  const [inputValue, setInputValue] = useState();

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
      const result = await BookKnowledgeCourse(token, paymentDetails.id, paymentDetails.date, inputValue, signal)
      setBookingResult(result.data);
      Modal.success({
        title: result.status,
        content: result.message,
        afterClose: ()=>setCurrent(current + 1)
      });
    }catch(error){
      Modal.error({
        title: 'error',
        content: error.message,
      });
    }

  }
  const next = () => {
    if (current === 1) {
      if(inputValue === null || inputValue === undefined){
        messageApi.open({
          type: 'error',
          content: 'Please Choose Payment Method',
        });
      }else{
        bookRequset();
      }
    } else {
      setCurrent(current + 1);
    }
  };
 
  useEffect(() => {
    setPaymentDetails(JSON.parse(sessionStorage.getItem("OZCourseDetails")));
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
      {contextHolder}
    </>
  );
};

export default BookCourse;
