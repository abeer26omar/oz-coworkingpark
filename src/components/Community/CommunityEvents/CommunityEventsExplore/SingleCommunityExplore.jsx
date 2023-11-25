import React from 'react';
import Card from "react-bootstrap/Card";
import date from "../../../../assets/images/icons/calendar-event.svg";
import user from "../../../../assets/images/icons/user.svg";
import time from "../../../../assets/images/icons/alarm-event.svg";
import './CommunityEventsExplore.css';
import Button from '../../../UI/Button';
import ShareButton from '../../../UI/ShareButton';
import AddToFavButton from '../../../UI/AddToFavButton';

const SingleCommunityExplore = ({id, img, title, text, category, day, host, clock, img_style}) => {
    return (
        <>
            <Card className="slider-card" key={id}>
                <div className="position-relative">
                    <Card.Img variant="top" src={img} className={`rounded-0 ${img_style}`} title={title}/>
                    <AddToFavButton />
                </div>

                <Card.Body>
                    <span className="card-category">{category}</span>
                    <Card.Title className="title-explore">{title}</Card.Title>
                    <Card.Text>{text.lenght > 50 ? text.slice(0,50) :  text}</Card.Text>
                    <div className="d-flex justify-content-start align-items-center">
                        <div className="details-event d-flex align-items-center">
                            <img src={date} alt={day}/>
                            <span>{day}</span>
                        </div>
                        <div className="details-event d-flex align-items-center">
                            <img src={time} alt={clock}/>
                            <span>{clock}</span>
                        </div>
                        <div className="details-event d-flex align-items-center">
                            <img src={user} alt={host}/>
                            <span>{host}</span>
                        </div>
                    </div>
                    <div className="cards-event-buttons">
                        <Button tagType='link' to={`/events/communityEventsDetails/${id}`}
                              className="btn button-outLine btn-bg-white attend-btn">Attend</Button>
                        <ShareButton />
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default SingleCommunityExplore;
