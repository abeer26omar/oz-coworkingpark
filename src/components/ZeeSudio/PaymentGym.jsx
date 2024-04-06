import React, { useContext, useEffect, useState } from "react";
import { Modal, Steps, message } from "antd";
import Paragraph from "../UI/Paragraph";
import CaseOne from "./CasesPay/CaseOne";
import CaseTwo from "../PaymentCases/CaseTwo";
import CaseThree from "../PaymentCases/CaseThree";
import Button from "../UI/Button";
import { BookGymClass } from "../../apis/ZeeStudio";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { useNavigate } from "react-router-dom";
import { getInovice } from '../../apis/config';

const PaymentGym = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const {token, userProfileData} = useContext(AuthContext)
  const [current, setCurrent] = useState(0);
  const [bookingResult, setBookingResult] = useState({});
  const paymentDetails = JSON.parse(localStorage.getItem("OZgymCourseDetails"))
  const [inputValue, setInputValue] = useState();

  const getPaymentValue = (value) => {
    setInputValue(value);
  };

  const navigate = useNavigate();

  const HandelSummery = (value) => {
    const zeePackage = userProfileData.zee_studio; 
      if(zeePackage){
        if(zeePackage.total_remaining_courses > 0){
          return `You Have ${zeePackage.total_free_courses} Free Courses Included In Your Package,
          Remaning: ${zeePackage.total_remaining_courses} Course`;
          
        }else{
          const discount_type = zeePackage.zee_studio_discount_type === 'percentage' ? '%' : '';
          return `You Have Consumed Your Free Courses, Now Enjoy ${zeePackage.discount} ${discount_type} Discount,
            Course Price: ${calcPrice(value.price, zeePackage.discount, discount_type)} EGP`;
        }
      }else{
        return '';
      }
  };
  const calcPrice = (price, discount, discount_type) => {
    if(discount_type === 'fixed'){
      return price - discount;
    }else{
        const priceDicounted =  price * discount / 100;
        return price - priceDicounted;
    }
  }

  const steps = [
    {
      title: "Summary Booking",
      ContentTitle: "Summary Class",
      content: <CaseOne details={paymentDetails} discountRoles= {HandelSummery()} />,
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
      setBookingResult(result.data);
      if(result){
        getInoviceTransaction(result?.data?.transaction_id);
        Modal.success({
          title: result.status,
          content: result.message,
          afterClose: ()=>{
            setCurrent(current + 1);
          }
        });
      }
    }catch(error){
      Modal.error({
        title: "error",
        content: error.response.data.message,
        afterClose: () => navigate("/ourgymclasses"),
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
      <div className="container-fluid p-70 steps-payment">
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
          <div className={current < steps.length - 1 ? "px_7" : null}>
            <div className="d-flex flex-column justify-content-center align-items-center"
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

export default PaymentGym;
