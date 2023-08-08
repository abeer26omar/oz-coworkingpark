import React from "react";
import Card from "react-bootstrap/Card";

const CommunityEventsList = ({id, text, title, img, linkText}) => {
    return (
        <>
            <Card className="image-box">
                <Card.Img variant="top" src={img} className="rounded-0" title={title}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <a className="btn button-outLine btn-bg-white">{linkText}</a>
                </Card.Body>
            </Card>
        </>
    );
};

export default CommunityEventsList;
