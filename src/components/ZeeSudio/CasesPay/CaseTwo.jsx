import React , { useState }  from "react";
import CashPay from "../../UI/Icons/CashPay";
import CridetPay from "../../UI/Icons/CridetPay";
import Paragraph from "../../UI/Paragraph";
const CaseTwo = ({ getPaymentValue }) => {
  const handleCheckboxChange = (e) => {
    getPaymentValue(e.target.value);
 
  };
  return (
    <>
      <div className="p-5">
        <Paragraph className="paragraph_black light py-3">
          Choose Payment Method
        </Paragraph>
        <ul className="p-0">
          <li className="d-flex align-items-center justify-content-between mb-4 pb-4 border-bottom">
            <label className="d-flex align-items-center" htmlFor="cash">
              <CashPay />
              <Paragraph className="mb-0 mx-2">Cash Payment</Paragraph>
            </label>
            <input
              type="radio"
              checked
              value={"cash"}
              onChange={handleCheckboxChange}
              name="payment"
              id="cash"
            />
          </li>
          <li className="d-flex align-items-center justify-content-between  mb-4 pb-4 border-bottom">
            <label className="d-flex align-items-center" htmlFor="credit">
              <CridetPay />
              <Paragraph className="mb-0 mx-2">Credit Payment</Paragraph>
            </label>
            <input
              type="radio"
              value={"credit"}
              name="payment"
              onChange={handleCheckboxChange}
              id="credit"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default CaseTwo;
