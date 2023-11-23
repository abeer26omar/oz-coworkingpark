import React from 'react'
import Paragraph from './Paragraph';
const Massages = (props) => {
  return (
    <>
      <div className="massage_1 my-4 d-flex" onClick={props.onClick}>
        <img className="" src={props.src} alt="img" />
        <div className="ms-3">
          <Paragraph className="m-0 requests">{props.name}</Paragraph>
          <Paragraph className="mt-1 massage_hidden">
            {props.massage}
          </Paragraph>
        </div>
      </div>
    </>
  );
}

export default Massages
