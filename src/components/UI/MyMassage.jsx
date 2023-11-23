import React from 'react'
import Paragraph from './Paragraph';
const MyMassage = (props) => {
        const AllMyMassages = props.AllMy.map((Myone, index) => (
          <>
            <Paragraph className="send py-2 px-3" key={index}>
              {Myone.MyMassage}
            </Paragraph>
          </>
        ));
        return (
          <>
            <div className="m-4 d-flex align-items-start">
              <img src={props.src} alt="img" className="me-4" />
              <div className="">{AllMyMassages}</div>
            </div>
          </>
        );

}

export default MyMassage
