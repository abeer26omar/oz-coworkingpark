import React from "react";
import "./Content.css";
import vision from "../../../assets/images/vision.png";
import Buttons from "../../Buttons/Buttons";
import Media from "../../Media/Media";

const LeftContent = (props) => {
    return (
        <>
            {/*<TestComponents title={'hello'} description={'ddhdhdjdjj'} className={'bg'}/>*/}
            <section className=" head-of-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head-content-sec">
                                <h2 className="h2-text">{props.head}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row border-of-section ">
                        <div className="col-md-6 col-lg-4 col-sm-4 col-xs-6 m-auto">
                            <div className="box-content px-60 ">
                                <h2 className="h2-text-box">{props.title}</h2>
                                <p className="p-text-box">
                                    {props.desc}
                                </p>
                                <Buttons href="#"> {props.link}</Buttons>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8 col-sm-8 col-xs-6   border-left">
                            <Media type="img"
                                   className="image-box w-100"
                                   src={vision}
                                   alt="Our OZ Vision"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/*<section className=" ">*/}
            {/*  <div className="container-fluid">*/}
            {/*    <div className="row">*/}
            {/*      <div className="col-lg-12">*/}
            {/*        <div className="head-content-sec">*/}
            {/*          <h2 className="h2-text">Our Amenities</h2>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="row border-of-section ">*/}
            {/*      <div className="col-md-8 col-lg-8 col-sm-8 col-xs-6 border-right ">*/}
            {/*        <img*/}
            {/*          className="image-box w-100"*/}
            {/*          src={aminites}*/}
            {/*          alt="Our OZ Vision"*/}
            {/*          lazyLoad*/}
            {/*        />*/}
            {/*      </div>*/}

            {/*      <div className="col-md-4 col-lg-4 col-sm-4 col-xs-6 m-auto ">*/}
            {/*        <div className="box-content px-60">*/}
            {/*          <h2 className="h2-text-box">The benefits</h2>*/}
            {/*          <p className="p-text-box">*/}
            {/*            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*            Lorem ipsum dolor sit amet, consectetur dipiscing eliteiusmod*/}
            {/*          </p>*/}
            {/*          <div className="d-flex justify-content-start align-items-center mb-5">*/}
            {/*            <div className="amenities-box">*/}
            {/*              <img*/}
            {/*                src={alarm}*/}
            {/*                alt="alarm amenities-icon"*/}
            {/*                className="amenties-icon"*/}
            {/*              />*/}
            {/*              <h5 className="amenities-text">24 hours</h5>*/}
            {/*            </div>*/}
            {/*            <div className="amenities-box">*/}
            {/*              <img*/}
            {/*                src={hand}*/}
            {/*                alt="alarm amenities-icon"*/}
            {/*                className="amenties-icon"*/}
            {/*              />*/}
            {/*              <h5 className="amenities-text">Perks</h5>*/}
            {/*            </div>*/}
            {/*            <div className="amenities-box">*/}
            {/*              <img*/}
            {/*                src={gym}*/}
            {/*                alt="alarm amenities-icon"*/}
            {/*                className="amenties-icon"*/}
            {/*              />*/}
            {/*              <h5 className="amenities-text">Fitness</h5>*/}
            {/*            </div>*/}
            {/*            <div className="amenities-box">*/}
            {/*              <img*/}
            {/*                src={user}*/}
            {/*                alt="alarm amenities-icon"*/}
            {/*                className="amenties-icon"*/}
            {/*              />*/}
            {/*              <h5 className="amenities-text">Community</h5>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*          <a href="#" className="btn button-outLine btn-bg-white">*/}
            {/*            Explore*/}
            {/*          </a>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}


            {/*<section className=" ">*/}
            {/*    <div className="container-fluid">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-lg-12">*/}
            {/*                <div className="head-content-sec">*/}
            {/*                    <h2 className="h2-text">News feed</h2>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row border-of-section ">*/}
            {/*            <div className="col-md-6 col-lg-8 col-sm-8 col-xs-6 border-right">*/}
            {/*                <Media type="img"*/}
            {/*                       className="image-box w-100"*/}
            {/*                       src={aminites}*/}
            {/*                       alt="Our OZ Vision"*/}

            {/*                />*/}
            {/*            </div>*/}

            {/*            <div className="col-md-6 col-lg-4 col-sm-4 col-xs-6 m-auto">*/}
            {/*                <div className="box-content px-60">*/}
            {/*                    <h2 className="h2-text-box achievement-text ">achievements for OZ</h2>*/}
            {/*                    <p className="p-text-box">*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur dipiscing eliteiusmod*/}
            {/*                    </p>*/}

            {/*                    <Buttons href="/community/newsfeed"> Explore</Buttons>*/}

            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}


            {/*<section className="fab ">*/}
            {/*    <div className="container-fluid">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-lg-12">*/}
            {/*                <div className="head-content-sec">*/}
            {/*                    <h2 className="h2-text">F&B</h2>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row border-of-section ">*/}
            {/*            <div className="col-md-6 col-lg-8 col-sm-8 col-xs-6 border-right ">*/}
            {/*                <Media type="img" className="image-box w-100" src={fb} alt="Our OZ Vision"/>*/}
            {/*            </div>*/}

            {/*            <div className="col-md-6 col-lg-4 col-sm-4 col-xs-6 m-auto ">*/}
            {/*                <div className="box-content px-60">*/}
            {/*                    <h2 className="h2-text-box">*/}
            {/*                        FRESH RECIPES*/}
            {/*                        <span> FOR SUCCESS</span>*/}
            {/*                    </h2>*/}
            {/*                    <p className="p-text-box">*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur dipiscing eliteiusmod*/}
            {/*                    </p>*/}
            {/*                    <Buttons href=""> F&B</Buttons>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    );
};

export default LeftContent;
