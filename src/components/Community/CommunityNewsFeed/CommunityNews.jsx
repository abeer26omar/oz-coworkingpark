import React, { useEffect } from "react";
import "./CommunityNewsFeed.css";
import Slider from "react-slick";
import { Element } from "react-scroll";
import { NavLink } from "react-router-dom";
import Paragraph from "../../UI/Paragraph";
import { getCommunityNewsFeed } from '../../../apis/Events';
import { useState } from "react";
import Media from "../../Media/Media";

const CommunityNews = (props) => {

    const [newsData, setNewsData] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true,
    };
    
    useEffect(()=>{
        getCommunityNewsFeed('yes').then(res=>{
            setNewsData(res['slider'])
        }).catch(err=>{})
    },[]);

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
                                            <Paragraph className='paragraph_black black '>{configItem.value}</Paragraph>
                                        }
                                        {configItem.key === "community_page_newsfeed_description" &&
                                            <Paragraph className={' mb-5 monoBlock_description black'}>{configItem.value}</Paragraph>
                                        }
                                    </React.Fragment>
                                )):''}
                                  <NavLink to={"/community/newsfeed"}
                                    className="btn button-outLine btn-bg-white mx-0">Explore</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8 col-sm-12 col-xs-6 border-left ">
                            <Slider {...settings} className="news-feed">
                                {newsData && newsData.map((news, index) => {
                                    const {id, banner} = news;
                                    return (
                                        <div key={index}>
                                            <Media
                                                type='img'
                                                src={banner}
                                                alt='img'
                                                className="img-book"
                                                height={'520px'} />
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
