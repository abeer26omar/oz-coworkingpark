import React from "react";
import CashPay from "../../UI/Icons/CashPay";
import CridetPay from "../../UI/Icons/CridetPay";
import Paragraph from "../../UI/Paragraph";
const CaseTwo = () => {
  return (
    <>
      <div className="p-5">
        <Paragraph className="paragraph_black light py-3">
          Choose Payment Method
        </Paragraph>
        <ul className="p-0">
          <li className="d-flex align-items-center justify-content-between mb-4 pb-4 border-bottom">
            <div className="d-flex  align-items-center">
              <CashPay />
              <Paragraph className="mb-0 mx-2">Cash Payment</Paragraph>
            </div>
            <input type="radio" />
          </li>
          <li className="d-flex align-items-center justify-content-between  mb-4 pb-4 border-bottom">
            <div className="d-flex  align-items-center">
              <CridetPay />
              <Paragraph className="mb-0 mx-2">Credit Payment</Paragraph>
            </div>
            <input type="radio" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default CaseTwo;
