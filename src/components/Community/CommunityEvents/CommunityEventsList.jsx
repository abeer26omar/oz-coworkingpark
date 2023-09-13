import React from "react";
import Card from "react-bootstrap/Card";
import Media from "../../Media/Media";
import Buttons from "../../Buttons/Buttons";

const CommunityEventsList = ({id, text, title, img, linkText}) => {
    return (
        <>
            <Card className="image-box">
                {/*<Card.Img variant="top" className="rounded-0" title={title}/>*/}
                <Media type="img" src={img} class="card-img-top rounded-0" title={title}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Buttons href="#">{linkText}</Buttons>
                </Card.Body>
            </Card>
        </>
    );
};

export default CommunityEventsList;
