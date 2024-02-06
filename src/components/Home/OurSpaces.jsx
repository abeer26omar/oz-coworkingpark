import React from "react";
import Buttons from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import Media from "../Media/Media";
import { Skeleton } from "antd";

const OurSpaces = (props) => {
  return (
    <>
      {console.log(props.pending)}
      <section className="locations">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="head-content-sec">
                <Paragraph className="head_feature">
                  {"Our Workspaces"}
                </Paragraph>
              </div>
            </div>
          </div>
          <div className="row flex_reverse border-of-section">
            <div className="col-lg-4 col-md-5 col-12 m-auto ">
              <div className="box-content p-lg-4 p-3">
                {props.pending ? (
                  <>
                    (
                    <Skeleton active title={true} paragraph={{ rows: 3 }} />)
                  </>
                ) : (
                  props.configData.map((configItem, index) => (
                    <React.Fragment key={index}>
                      {configItem.key === "home_page_space_title" && (
                        <Paragraph className="paragraph_black">
                          {configItem.value}
                        </Paragraph>
                      )}
                      {configItem.key === "home_page_space_description" && (
                        <Paragraph className="description_black">
                          {configItem.value}
                        </Paragraph>
                      )}
                    </React.Fragment>
                  ))
                )}
                <Buttons
                  tagType="link"
                  className="btn button-outLine btn-bg-white"
                  to={"/"}
                >
                  Explore
                </Buttons>
              </div>
            </div>

            {props.pending ? (
              <>
                (<Skeleton.Image active />)
              </>
            ) : (
              props.configData.map((configItem, index) => (
                <React.Fragment key={index}>
                  {configItem.key === "home_page_space_image" && (
                    <div className="col-lg-8 col-md-7 col-sm-12 border-left img_block">
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
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default OurSpaces;
