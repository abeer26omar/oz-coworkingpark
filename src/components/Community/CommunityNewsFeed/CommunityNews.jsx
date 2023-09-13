import React from "react";
import "./CommunityNewsFeed.css";
import Slider from "react-slick";
import CommunityNewsList from "./CommunityNewsList";
import {newsData} from "../../../Data/NewsData";
import Buttons from "../../Buttons/Buttons";

const CommunityNews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true,
    };

    return (
        <>
            <section id="community-newsfeed" className="news-feed">
                <div className="container-fluid">
                    <div className="row"></div>
                    <div className="row border-of-section ">
                        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-6 m-auto ">
                            <div className="box-content px-60">
                                <h2 className="h2-text-box">News Feed</h2>
                                <p className="p-text-box">
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing eliteiusmod
                                </p>
                                <Buttons
                                    href="/community/newsfeed"
                                    className="btn button-outLine btn-bg-white"
                                >
                                    Explore
                                </Buttons>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-8 col-xs-6 border-left ">
                            <Slider {...settings}>
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
        </>
    );
};

export default CommunityNews;
