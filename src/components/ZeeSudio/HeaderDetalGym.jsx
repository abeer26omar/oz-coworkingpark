import React, { useState } from "react";
import MainHeaderWrapper from "../UI/MainHeaderWrapper";
import Paragraph from "../UI/Paragraph";
import { Skeleton } from "antd";
const HeaderDetalGym = ({ details, pending }) => {
  return (
    <>
    
      <MainHeaderWrapper image={details?.image} height="534px">
        <div className={`container-fluid px-70 py-5 mt-160`}>
          <div className="col-md-6 col-12 ">
            {pending ? (
              <Skeleton active title={true} paragraph={{ rows: 1 }} />
            ) : (
              <>
                <Paragraph className="head_paragraph mb-3">
                  {details?.title}
                </Paragraph>
                <Paragraph className="description mb-0">
                  {details?.descriptions}
                </Paragraph>
              </>
            )}
          </div>
        </div>
      </MainHeaderWrapper>
    </>
  );
};

export default HeaderDetalGym;
