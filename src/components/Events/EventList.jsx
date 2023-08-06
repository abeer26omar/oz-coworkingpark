import React, {useState} from 'react';
import Card from "react-bootstrap/Card";

const EventList = ({id, text, title, img}) => {
    return (
        <>
            <Card className="image-box">
                <Card.Img variant="top" src={img} className="rounded-0" title={title} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <a className="btn button-outLine btn-bg-white" >Public Event</a>
                </Card.Body>
            </Card>
        </>
    );
};

export default EventList;
