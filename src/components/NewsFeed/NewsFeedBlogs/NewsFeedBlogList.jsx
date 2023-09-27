import React from 'react';
import Card from "react-bootstrap/Card";
import './NewsFeedBlog.css';
import {NavLink} from "react-router-dom";
import Media from "../../Media/Media";

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
                    <Media
                        type="img" src={img} className="card-img-top rounded-0 " title={title}/>
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
