import React from "react";
import Card from "react-bootstrap/Card";
import Media from "../Media/Media";
import Button from "../UI/Button";

const PublicEventList = ({id, text, title, img}) => {
    return (
        <>
            <Card className="image-box">
                <Media type="img" src={img} class="card-img-top rounded-0" title={title}/>
                <Card.Body className="py-4">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="py-2">{text}</Card.Text>
                    <Button 
                        to={"/events/communityEventsDetails"} 
                        className="btn_outline_black "
                        tagType='link'>Public
                        Event</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default PublicEventList;
