import React from "react";
import Card from "react-bootstrap/Card";
import Media from "../Media/Media";
import Buttons from "../Buttons/Buttons";

const PublicEventList = ({id, text, title, img}) => {
    return (
        <>
            <Card className="image-box">
                <Media type="img" src={img} class="card-img-top rounded-0" title={title}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Buttons href={"/events/communityEventsDetails"} className=" btn-bg-white">Public
                        Event</Buttons>
                </Card.Body>
            </Card>
        </>
    );
};

export default PublicEventList;
