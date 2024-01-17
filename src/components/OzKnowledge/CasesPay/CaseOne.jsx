import React from "react";
import Paragraph from "../../UI/Paragraph";
import Calunder from "../../UI/Icons/Calunder";
import Alarm from "../../UI/Icons/Alarm";
import Advanced from "../../UI/Icons/Advanced";
import Payment from "../../UI/Icons/Payment";
function CaseOne({ details, style }) {
  return (
    <>
      <div className="p-5">
        <Paragraph className="paragraph_black light py-3">
          {details.title}
        </Paragraph>
        <ul className="p-0">
          <li className="d-flex align-items-center mb-4">
            <Calunder />
            <Paragraph className="mb-0 mx-2">{details.date}</Paragraph>
          </li>
          <li className="d-flex align-items-center mb-4">
            <Alarm />
            <Paragraph className="mb-0 mx-2">{details.duration}</Paragraph>
          </li>
          <li className="d-flex align-items-center mb-4">
            <Advanced />
            <Paragraph className="mb-0 mx-2">{details.level}</Paragraph>
          </li>
          <li className="d-flex align-items-center mb-4">
            <Payment />
            <Paragraph className="mb-0 mx-2">
              {Math.floor(details.price)} EGP
            </Paragraph>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CaseOne;
