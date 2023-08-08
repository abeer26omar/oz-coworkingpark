import React from 'react';
import './NewsFeedBlog.css';
import {MasonryGrid} from "@egjs/react-grid";
import Card from "react-bootstrap/Card";
import cardLayout from '../../../assets/images/cardlayout.png';

import cardLayout2 from '../../../assets/images/cardlayout2.png';

const NewsFeedBlogs = () => {
    const columnSizeRatio = window.innerWidth / 1000;
    return (

        <MasonryGrid
            className="container-fluid"
            gap={200}
            defaultDirection={"center"}
            align={""}
            column={4}
            columnSize={296}
            columnSizeRatio={columnSizeRatio}
            onRenderComplete={e => {
                console.log(e);
            }}
        >

            <div className={"item"}>
                <Card className="">
                    <Card.Img variant="top" src={cardLayout} className="rounded-0" title="test"/>
                    <Card.Body>
                        <Card.Title>Lorem Ipsum</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod</Card.Text>
                        <a className="btn button-outLine btn-bg-white">Public Event</a>
                    </Card.Body>
                </Card>
            </div>
            <div className={"item"}>
                <Card className="">
                    <Card.Img variant="top" src={cardLayout} className="rounded-0" title="test"/>
                    <Card.Body>
                        <Card.Title>Lorem Ipsum</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod</Card.Text>
                        <a className="btn button-outLine btn-bg-white">Public Event</a>
                    </Card.Body>
                </Card>
            </div>
            <div className={"item"}>
                <Card className="">
                    <Card.Img variant="top" src={cardLayout2} className="rounded-0" title="test"/>
                    <Card.Body>
                        <Card.Title>Lorem Ipsum</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod</Card.Text>
                        <a className="btn button-outLine btn-bg-white">Public Event</a>
                    </Card.Body>
                </Card>
            </div>
            <div className={"item"}>
                <Card className="">
                    <Card.Img variant="top" src={cardLayout} className="rounded-0" title="test"/>
                    <Card.Body>
                        <Card.Title>Lorem Ipsum</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod</Card.Text>
                        <a className="btn button-outLine btn-bg-white">Public Event</a>
                    </Card.Body>
                </Card>
            </div>


        </MasonryGrid>


    )
};

export default NewsFeedBlogs;
