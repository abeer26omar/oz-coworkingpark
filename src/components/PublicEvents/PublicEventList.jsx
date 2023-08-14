import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

const PublicEventList = ({id, text, title, img}) => {
    return (
        <>
            <Card className="image-box">
                <Card.Img variant="top" src={img} className="rounded-0" title={title}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Link to={"/events/communityEventsDetails"} className="btn button-outLine btn-bg-white">Public
                        Event</Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default PublicEventList;
