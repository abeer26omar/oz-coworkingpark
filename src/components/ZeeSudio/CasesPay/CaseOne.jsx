import React from "react";
import Paragraph from "../../UI/Paragraph";
import Calunder from "../../UI/Icons/Calunder";
import Alarm from "../../UI/Icons/Alarm";
import Advanced from "../../UI/Icons/Advanced";
import Payment from "../../UI/Icons/Payment";
function CaseOne({ details, style }) {
  return (
    <>
      {console.log(details)}
      <div className="p-5">
        <Paragraph className="paragraph_black light py-3">
          Yoga As Therapy
        </Paragraph>
        <ul className="p-0">
          <li className="d-flex align-items-center mb-4">
            <Calunder />
            <Paragraph className="mb-0 mx-2">Monday, Feb. 2 , 2023</Paragraph>
          </li>
          <li className="d-flex align-items-center mb-4">
            <Alarm />
            <Paragraph className="mb-0 mx-2">45 Minutes</Paragraph>
          </li>
          <li className="d-flex align-items-center mb-4">
            <Advanced />
            <Paragraph className="mb-0 mx-2">Advanced</Paragraph>
          </li>
          <li className="d-flex align-items-center mb-4">
            <Payment />
            <Paragraph className="mb-0 mx-2">150 EGP</Paragraph>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CaseOne;
