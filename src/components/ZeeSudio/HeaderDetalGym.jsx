import React from "react";
import MainHeaderWrapper from "../UI/MainHeaderWrapper";
import Paragraph from "../UI/Paragraph";

const HeaderDetalGym = ({details}) => {
  return (
    <>
      <MainHeaderWrapper image={details.image} height='534px'>
        <div className={`container-fluid px-70 py-5 mt-160`}>
          <div className="col-md-6 col-12 ">
            <Paragraph className="head_paragraph mb-3">{details.title}</Paragraph>
            <Paragraph className="description mb-0">
              {details.details}
            </Paragraph>
          </div>
        </div>
      </MainHeaderWrapper>
    </>
  );
};

export default HeaderDetalGym;
