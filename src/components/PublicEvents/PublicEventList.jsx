import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import Media from "../Media/Media";
import Button from "../UI/Button";
import {getEventsList} from '../../apis/Events';
import { AuthContext } from "../../apis/context/AuthTokenContext";

const PublicEventList = ({}) => {
    
    const [eventsData, setEventsData] = useState([]);
    const { token, userId } = useContext(AuthContext);

    const settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        cssEase: "linear",
        lazyLoad: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchNewsFeedPosts = async () => {
            try{
                const res = await getEventsList(token, userId, source);
                if (isMounted) {
                    setEventsData(res);
                }
            }catch (error){

            }
        }
        fetchNewsFeedPosts();

        return ()=>{
            isMounted = false;
            source.cancel();
        };
    },[token, userId]);

    return (
        <>
            <div className="col-lg-12">
                <Slider {...settings} className="home-events">
                    {eventsData && eventsData.map((event, index) => {
                            return (
                                <>
                                    <div className="card image-box" key={index}>
                                        <Media 
                                            type="img" 
                                            src={event.gallery[0].image} 
                                            className="card-img-top rounded-0" 
                                            alt={event.event_name} />

                                        <div className="card-body py-4">
                                            <Card.Title>{event.event_name}</Card.Title>
                                            <Card.Text className="py-2">{event.description.slice(0,50)} ...</Card.Text>
                                            <Button 
                                                to={`/events/communityEventsDetails/${event.id}`} 
                                                className="btn_outline_black "
                                                tagType='link'>{event.event_type.name}</Button>
                                        </div>
                                    </div>
                                </>
                            );
                    })}
                </Slider>
            </div>
        </>
    );
};

export default PublicEventList;
