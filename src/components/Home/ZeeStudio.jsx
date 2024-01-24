import React from "react";
import Button from "../UI/Button";
import Media from "../Media/Media";
import Paragraph from "../UI/Paragraph";

const ZeeStudio = (props) => {
  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="head-content-sec">
                <Paragraph className="head_feature">{"Zee Studio"}</Paragraph>
              </div>
            </div>
          </div>
          <div className="row flex_reverse border-of-section ">
            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-6 m-auto">
              <div className="box-content p-lg-4 p-3">
                {props.configData
                  ? props.configData.map((configItem, index) => (
                      <React.Fragment key={index}>
                        {configItem.key === "home_page_zee_title" && (
                          <Paragraph className="paragraph_black">
                            {configItem.value}
                          </Paragraph>
                        )}
                        {configItem.key === "home_page_zee_description" && (
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
                  to={"/zeestudio"}
                >
                  Explore Studio
                </Button>
              </div>
            </div>

            {props.configData
              ? props.configData.map((configItem, index) => (
                  <React.Fragment key={index}>
                    {configItem.key === "home_page_zee_image" && (
                      <div className="col-lg-8 col-md-7 col-sm-12 col-xs-6 border-left img_block">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(ZeeStudio);
