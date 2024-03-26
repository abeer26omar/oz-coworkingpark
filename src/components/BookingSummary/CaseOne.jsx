import React from "react";
import Paragraph from "../UI/Paragraph";
import Calunder from "../UI/Icons/Calunder";
import Alarm from "../UI/Icons/Alarm";
import Advanced from "../UI/Icons/Advanced";
import Payment from "../UI/Icons/Payment";
import moment from "moment";

function CaseOne({ details }) {
  return (
    <>
    {console.log(details)}
      <div className="p-5 bg_white">
        <Paragraph className="paragraph_black light py-3">
          {details.title}
        </Paragraph>
        <ul className="p-0">
          <li className="d-flex align-items-center mb-4">
            <Calunder />
            <Paragraph className="mb-0 mx-2">{
                details.date.map(item => {
                   return moment(item.check_in_date).format("dddd, MMM. D, YYYY")
                })
           }</Paragraph>
          </li>
          <li className="d-flex align-items-center mb-4">
            <Alarm />
            <Paragraph className="mb-0 mx-2">{
                details.date.map(item => {
                    return item.check_in_time
                })
            }</Paragraph>
          </li>
          <li className="d-flex align-items-center mb-4">
            <Advanced />
            <Paragraph className="mb-0 mx-2">{details.genre}</Paragraph>
          </li>
          <li className="d-flex align-items-center mb-4">
            <Payment />
            <Paragraph className="mb-0 mx-2">
              {details.price === 'Free' ? 'Free' : `${Math.floor(details.price)} EGP`}
            </Paragraph>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CaseOne;