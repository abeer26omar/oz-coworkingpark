import React from "react";
import Paragraph from "./Paragraph";
const YourMassage = (props) => {
    const AllYourMassages = props.AllYour.map((Myone, index) => (
      <>
        <Paragraph className="send_black py-2 px-3" key={index}>
          {Myone.YourMassage}
        </Paragraph>
      </>
    ));
  return (
    <>
      <div className=" m-4 d-flex justify-content-end  align-items-start">
        <div className="rtl">

            {AllYourMassages}
      
        </div>
        <img src={props.src} alt="img" className="ms-4" />
      </div>
    </>
  );
};

export default YourMassage;
