import React, { useEffect, useState, useContext } from "react";
import Class from "../../assets/images/Classes.jpg";
import MainHeaderWrapper from "../UI/MainHeaderWrapper";
import Paragraph from "../UI/Paragraph";

const HeaderClasses = () => {
  return (
    <>
      <MainHeaderWrapper image={Class}>
        <div className={`container-fluid px-70 py-5`}>
          <div className="col-md-6 col-12">
            <p class="main_header_title mb-0">Zee Studio</p>
            <Paragraph className="head_paragraph mb-3">
              OUR Popular TRAINING
            </Paragraph>
            <Paragraph className="description mb-0">
              Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit
              amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem
              ipsum dolor sit
            </Paragraph>

          </div>
        </div>
      </MainHeaderWrapper>
    </>
  );
};

export default HeaderClasses;
