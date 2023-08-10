import React from 'react';
import Card from "react-bootstrap/Card";
import './NewsFeedBlog.css';
import {NavLink} from "react-router-dom";

const NewsFeedBlogList = ({id, img, text, linkText, title, category}) => {
    return (
        <>
            <NavLink to={"/community/newsfeed/singleFeed"}>
                <Card className="Card-news" key={id}>
                    {/*<LazyLoadImage src={img}*/}

                    {/*               alt="Image Alt"*/}
                    {/*               className="img"*/}
                    {/*               placeholdersrc={placeholder}*/}
                    {/*               effect="blur"*/}
                    {/*               variant="top"*/}
                    {/*               className="rounded-0 " title={title}*/}
                    {/*/>*/}
                    <Card.Img variant="top" src={img} className="rounded-0 " title={title} loading="lazy"/>
                    <Card.Body>
                        <span className="feed-category">{category}</span>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                        {/*<a className="btn button-outLine btn-bg-white">{linkText}</a>*/}
                    </Card.Body>
                </Card>
            </NavLink>

        </>
    );
};

export default NewsFeedBlogList;
