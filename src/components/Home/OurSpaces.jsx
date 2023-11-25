import React, { useState } from 'react';
import Slider from "react-slick";
import Buttons from "../UI/Button";
import Paragraph from '../UI/Paragraph';
import LocationsList from '../Locations/LocationsList';
import {locationsData} from '../../Data/LocationsData';
import Media from '../Media/Media';
const OurSpaces = (props)=>{
        return (
          <>
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
                <div className="row border-of-section">
                  <div className="col-md-4 col-12 m-auto ">
                    <div className="box-content px-60">
                      {props.configData
                        ? props.configData.map((configItem, index) => (
                            <React.Fragment key={index}>
                              {configItem.key === "home_page_space_title" && (
                                <Paragraph className="paragraph_black">
                                  {configItem.value}
                                </Paragraph>
                              )}
                              {configItem.key ===
                                "home_page_space_description" && (
                                <Paragraph className="description_black">
                                  {configItem.value}
                                </Paragraph>
                              )}
                            </React.Fragment>
                          ))
                        : ""}
                      <Buttons
                        tagType="link"
                        className="btn button-outLine btn-bg-white"
                        to={"/"}
                      >
                        Explore
                      </Buttons>
                    </div>
                  </div>
                  {props.configData
                    ? props.configData.map((configItem, index) => (
                        <React.Fragment key={index}>
                          {configItem.key === "home_page_space_image" && (
                            <div className="col-md-6 col-lg-8 col-sm-12 col-xs-6 border-left img_block">
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
export default OurSpaces;