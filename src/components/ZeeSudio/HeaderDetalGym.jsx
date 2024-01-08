import React, { useEffect, useState, useContext } from "react";
import Class from "../../assets/images/Classes.jpg";
import MainHeaderWrapper from "../UI/MainHeaderWrapper";
import Paragraph from "../UI/Paragraph";

const HeaderDetalGym = () => {
  return (
    <>
      <MainHeaderWrapper image={Class}>
        <div className={`container-fluid px-70 py-5`}>
          <div className="col-md-6 col-12">
         
            <Paragraph className="head_paragraph mb-3">
              Yoga As Therapy
            </Paragraph>
            <Paragraph className="description mb-0">
              Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit
              amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem
              ipsum dolor sit
            </Paragraph>

            {/* { data? data.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === "community_page_event_title" && (
                                    <Paragraph className='head_paragraph mb-3'>{configItem.value}</Paragraph>
                                )}
                                {configItem.key === "community_page_event_description" && (
                                    <Paragraph className='description mb-0'>{configItem.value}</Paragraph>
                                )}
                            </React.Fragment>
                        )): ''} */}
          </div>
        </div>
      </MainHeaderWrapper>
    </>
  );
};

export default HeaderDetalGym;
