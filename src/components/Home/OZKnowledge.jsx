import React from "react";
// import "./Content.css";
import Button from "../UI/Button";
import Media from "../Media/Media";
import Paragraph from "../UI/Paragraph";
import Vector from '../../assets/images/vectorRight.svg';

const OZKnowledge = (props) => {
    return (
      <>
        <section className=" ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="head-content-sec">
                  <Paragraph className="head_feature">
                    {"OZ Knowledge&B"}
                  </Paragraph>
                </div>
              </div>
            </div>
            <div className="row border-of-section ">
          
            {props.configData
              ? props.configData.map((configItem, index) => (
                  <React.Fragment key={index}>
                    {configItem.key === "home_page_courses_image" && (
                      <div className="col-lg-8 col-md-7 col-sm-12 col-xs-6 img_block border-right">
                        <Media
                          type="img"
                          className="image-box w-100"
                          src={configItem.value}
                          alt="Our OZ Vision"
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))
              : ""}
              <div className="col-lg-4 col-md-5 col-sm-12 col-xs-6 m-auto">
              <div className="box-content p-lg-4 p-3">
                {props.configData
                  ? props.configData.map((configItem, index) => (
                      <React.Fragment key={index}>
                        {configItem.key === "home_page_courses_title" && (
                          <Paragraph className="paragraph_black">
                            {configItem.value}
                          </Paragraph>
                        )}
                        {configItem.key === "home_page_courses_description" && (
                          <Paragraph className="description_black">
                            {configItem.value}
                          </Paragraph>
                        )}
                      </React.Fragment>
                    ))
                  : ""}
                <Button
                  tagType="link"
                  className="btn_outline_black"
                  to={"/"}
                >Explore More</Button>
              </div>
            </div>
          </div>
          </div>
        </section>
      </>
    );
};

export default React.memo(OZKnowledge) ;
