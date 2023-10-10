import React from "react";
import "./PublicEvent.css";
import Slider from "react-slick";
import PublicEventList from "./PublicEventList";
import {EventsData} from "../../Data/EventsData";

const PublicEvent = (props) => {
// console.log(props.configData)

    // const [eventList, setEventList] = useState([]);
// const  isMobile = window.innerWidth <=768;
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1500,
        cssEase: "linear",
        lazyLoad: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 3000,
                    dots: false,
                    // className:'z'

                },
            },
        ],
    };
    return (
        <>
            <section className="events">
                <div className="container-fluid">
                    <div className="row">
                       {props.configData ? props.configData.map((configItem , index)=>(
                                <React.Fragment key={index}> 
                    
                        <div className="col-lg-12">
                            {configItem.key === "home_page_event_title" && 
                             <div className="head-content-sec">
                                <h2 className="h2-text">{configItem.value}</h2>
                             </div> }     
                        </div>
               
                                </React.Fragment>
                            )):''}

                        <div className=" border-of-section ">
                            {props.configData ? props.configData.map((configItem , index)=>(
                                <React.Fragment key={index}>
                            <div className="col-md-12 col-lg-12 col-sm-4 col-xs-6 m-auto ">
                               {configItem.key === "home_page_event_description"&& 
                            //    <div className="box-content  d-flex">
                                    <div className="row p-5 justify-content-between align-items-center">
                                        <div className=" col-sm-12 col-lg-4">
                                            <h2 className="h2-text-box">WHAT'S ON events </h2>
                                        </div>
                                        <div className=" col-sm-12 col-lg-8  m-auto">
                                            <p className="p-text-box">
                                            {configItem.value}
                                            </p>
                                        </div>
                                    {/* </div> */}
                                </div>}
                            </div>
                            {/* </div> */}
                                </React.Fragment>                                
                            )):''}
                            <div className="col-lg-12 ">
                                <Slider {...settings} className="home-events">
                                    {EventsData.map((events, index) => {
                                        const {id, title, img, text} = events;

                                        return (
                                            <div key={index}>
                                                <PublicEventList
                                                    id={id}
                                                    title={title}
                                                    img={img}
                                                    text={text}
                                                />
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                        </div>
                    </div>
            </section>
        </>
    );
};

export default PublicEvent;
