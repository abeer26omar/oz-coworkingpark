import React, { useContext, useState } from "react";
import { Modal, Steps, message } from "antd";
import Paragraph from "../UI/Paragraph";
import CaseOne from "./CasesPay/CaseOne";
import CaseTwo from "./CasesPay/CaseTwo";
import CaseThree from "./CasesPay/CaseThree";
import Button from "../UI/Button";
import { upgradePlan } from '../../apis/User';
import { getInovice } from '../../apis/config';
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { useNavigate } from "react-router-dom";

const MembershipSummary = () => {

  const {token} = useContext(AuthContext)
  const [current, setCurrent] = useState(0);
  const [bookingResult, setBookingResult] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const [invoice, setInvoice] = useState({});
  const paymentDetails = JSON.parse(localStorage.getItem("selectedPlanOZ"));
  
  const [inputValue, setInputValue] = useState();

  const navigate = useNavigate();

  const getPaymentValue = (value) => {
    setInputValue(value);
  };

  const steps = [
    {
      title: "Summary Membership",
      ContentTitle: "Summary Membership",
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
    try {
      const result = await upgradePlan(token, paymentDetails.planId, paymentDetails.selected_plan_price);
      setBookingResult(result.data);
      Modal.success({
        title: result.status,
        content: result.message_data,
        afterClose: ()=>{
          getInoviceTransaction(result?.transaction_id);
          setCurrent(current + 1);
        }
      });
    }catch(error){
      Modal.error({
        title: 'error',
        content: error.response.data.message,
        afterClose: ()=>navigate('/membership')
      });
    }
  };

  const getInoviceTransaction = async (id) => {
    try{
      const result = await getInovice(token, id, 'all');
      console.log(result);
    }catch(error){
      console.log(error);
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
        bookRequset();
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
        className="container-fluid p-70 steps-payment"
        // style={{
        //   minHeight: "50vh",
        // }}
      >
        <div className="px_7" style={{
              textAlign: '-webkit-center'
        }}>
          <div className="col-9 d-flex justify-content-center align-items-center">
            <Steps
              type="navigation"
              size="small"
              current={current}
              className="site-navigation-steps"
              items={items}
            />
          </div>
        </div>
        <div>
          <Paragraph className="paragraph_black py-5 font-5">
            {steps[current].ContentTitle}
          </Paragraph>
          <div className={current < steps.length - 1 ? "" : null}>
            <div
              className="d-flex flex-column justify-content-center align-items-center"
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

export default MembershipSummary;
