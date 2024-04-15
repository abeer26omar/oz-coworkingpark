import React, { useContext, useEffect, useState } from "react";
import { Modal, Steps, message } from "antd";
import Paragraph from "../../../../UI/Paragraph";
import CaseOne from "./CaseOne";
import CaseTwo from "../../../../PaymentCases/CaseTwo";
import CaseThree from "./CaseThree";
import Button from "../../../../UI/Button";
import { AuthContext } from "../../../../../apis/context/AuthTokenContext";
import { getInovice } from '../../../../../apis/config';
import { useSearchParams } from "react-router-dom";
import { getUserInfo } from '../../../../../apis/User';
import { confirmBooking, rescheduleBooking } from "../../../../../apis/Booking";
import "./BookingSummary.css";

const BookingSummaryVenue = () => {

    const bookingData = JSON.parse(localStorage.getItem("BookingOZDetails")) || {};
    const bookingServices = JSON.parse(localStorage.getItem("BookingOZServices"));
    const [promo_code_id, setPromo_code_id] = useState(0);
    const [promo_discount, setPromo_discount] = useState(0);
    const [price, setPrice] = useState(0);
    const [servicePrice, setservicePrice] = useState(bookingServices?.reduce((sum, item) => sum + item.price, 0));
    const { token, userId, modifyUserData } = useContext(AuthContext);
    const [messageApi, contextHolder] = message.useMessage();
    const [current, setCurrent] = useState(0);
    const [bookingResult, setBookingResult] = useState({});
    const [inputValue, setInputValue] = useState();
    
    const [searchParams] = useSearchParams();
    const reschedule = searchParams.get("reschedule");

    const getPaymentValue = (value) => {
        setInputValue(value);
    };

    const getServicesPrice = (value) => {
        setservicePrice(value);
    };

    const getPromoId = (value) => {
        setPromo_code_id(value);
    };

    const getPromoValue = (value) => {
        setPromo_discount(value);
    };

    const getInoviceTransaction = async (id) => {
        try{
            const result = await getInovice(token, id, 'Reservation');
            setBookingResult(result);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        const calcPrice = () => {
            if(bookingData.membershipPackageOffer){
                const price = bookingData.membershipPackageOffer.price;
                if(price === 0){
                    if(servicePrice){
                        setPrice(servicePrice);
                    }
                    else{
                      setPrice('0');
                    }
                }else{
                    if(servicePrice){
                        setPrice(servicePrice + price);
                    }else{
                        setPrice(price);
                    }
                }
            }
        };
        calcPrice()
    },[servicePrice]);

    const calcBooking_discount = () => {
        if(bookingData.membershipPackageOffer){
            const price = bookingData.membershipPackageOffer.price;
            if(price === 0){
                return bookingData.spaceDetails.price;
            }else {
                // const actualPrice = 
                return price;
            }
        }else{
            return bookingData.spaceDetails.price;
        }
    };

    const steps = [
        {
            title: "Summary Booking",
            ContentTitle: "Summary Booking",
            content: <CaseOne 
                bookingData={bookingData} 
                servicesPrice={getServicesPrice} 
                price={price}
                getPromoId={getPromoId}
                getPromoValue={getPromoValue}
            />,
        },
        {
            title: "Payment Method",
            ContentTitle: "Payment Method",
            content: <CaseTwo getPaymentValue={getPaymentValue} />,
        },
        {
            title: "Invoice details",
            ContentTitle: bookingResult?.status === 'paid' ? 'Receipt' : 'Amount Due',
            content: <CaseThree bookingResult={bookingResult} />,
        },
    ];

    const next = () => {
        if (current === 1) {
        if(inputValue === null || inputValue === undefined){
            messageApi.open({
            type: 'error',
            content: 'Please Choose Payment Method',
            });
        }else{
            confirmVenueBooking();
        }
        } else {
        setCurrent(current + 1);
        }
    };

    const setDateApi = (roomdate) => {
        const date = new Date(roomdate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const dateNew = `${year}-${month}-${day}`;
        return dateNew;
    };

    const setTimeApi = (roomdate) => {
        const date = new Date(roomdate);
        const newTime = date.toLocaleTimeString("en-us", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        });
        return newTime;
    };

    const confirmVenueBooking = async () => {
        try {
            if(reschedule){
              const result = await rescheduleBooking(
                    token,
                    userId,
                    bookingData.id,
                    bookingData.spaceDetails.id,
                    setDateApi(bookingData.date),
                    setTimeApi(bookingData.time.start),
                    setTimeApi(bookingData.time.end)
                );
              if (result) {
                Modal.success({
                    title: result.status,
                    content: result.message,
                    centered: true,
                    afterClose: ()=>{
                        getInoviceTransaction(result?.data?.transaction_id);
                        getUserDataInfo();
                        setCurrent(current + 1);
                    }
                });
              }
            }else{
              const total_price = promo_discount ? price - promo_discount : price ; 
              const result = await confirmBooking(
                    token,
                    userId,
                    bookingData.spaceDetails.amenitie.branche_id,
                    bookingData.spaceDetails.id,
                    bookingData.numberOfPeople,
                    bookingData.spaceDetails.booking_code,
                    bookingData.services,
                    bookingData.membershipPackageOffer.booking_price,
                    servicePrice,
                    promo_discount ? price - promo_discount : price,
                    setDateApi(bookingData.date),
                    setTimeApi(bookingData.time.start),
                    setTimeApi(bookingData.time.end),
                    promo_code_id,
                    promo_discount,
                    calcBooking_discount(),
                    '0'
              );
              if (result) {
                Modal.success({
                    title: result.status,
                    content: result.message,
                    centered: true,
                    afterClose: ()=>{
                        getInoviceTransaction(result?.data?.transaction_id);
                        getUserDataInfo();
                        setCurrent(current + 1);
                    }
                });
              }
            }
        } catch (error) {
          Modal.error({
            title: 'error',
            content: error.response.data.message,
          })
        }
    };
    // const CalcPrice = (discount, price, discount_type) => {
    //     if (price !== '0'){
    //         if(discount_type === 'fixed'){
    //             return eventDetails?.price - discount;
    //         }else{
    //             const priceDicounted =  eventDetails?.price * discount / 100;
    //             return eventDetails?.price - priceDicounted;
    //         }
    //     }else{
    //          return eventDetails?.price;
    //     }
    // };

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    const getUserDataInfo = async () => {
        const controller = new AbortController();
        const signal = controller.signal;
        try{
          const res = await getUserInfo(token, userId, signal);
          modifyUserData(res['user_data']);
        }catch(err){
          console.log(err);
        }
    };

    
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
          <div>
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

export default BookingSummaryVenue;
