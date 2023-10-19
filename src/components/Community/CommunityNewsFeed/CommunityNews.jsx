import React from "react";
import "./CommunityNewsFeed.css";
import Slider from "react-slick";
import CommunityNewsList from "./CommunityNewsList";
import { Element } from "react-scroll";
import {newsData} from "../../../Data/NewsData";
import { NavLink } from "react-router-dom";
import Paragraph from "../../UI/Paragraph";
const CommunityNews = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        // adaptiveHeight: true,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true,
    };

    return (
        <>
        <Element name="community-newsfeed">
            <section  className="news-feed">
                <div className="container-fluid">
                    <div className="row"></div>
                    <div className="row border-of-section ">
                        <div className="col-md-6 col-lg-4 col-sm-12 col-xs-6 m-auto ">
                            <div className="box-content px-60  flex-box-start">
                                    {props.configData ? props.configData.map((configItem, index) => (
                                    <React.Fragment key={index}>
                                        {configItem.key === "community_page_newsfeed_title" && 
                                            <Paragraph className='white_monoBlock_title black '>{configItem.value}</Paragraph>
                                        }
                                        {configItem.key === "community_page_newsfeed_description" &&
                                            <Paragraph className={' mb-5 monoBlock_description black'}>{configItem.value}</Paragraph>
                                        }
                                    </React.Fragment>
                                )):''}
                                  <NavLink to={"/community/newsfeed"}
                                    className="btn button-outLine btn-bg-white">Explore</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8 col-sm-12 col-xs-6 border-left ">
                            <Slider {...settings} className="news-feed">
                                {newsData.map((news, index) => {
                                    const {id, img} = news;
                                    return (
                                        <div key={index}>
                                            <CommunityNewsList id={id} img={img}/>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
        </>
    );
};

export default CommunityNews;
