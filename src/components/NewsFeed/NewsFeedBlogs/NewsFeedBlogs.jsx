import React from 'react';
import './NewsFeedBlog.css';
import Masonry from "react-responsive-masonry";
import {NewsFeedData} from "../../../Data/NewsFeedData";
import NewsFeedBlogList from "./NewsFeedBlogList";

const NewsFeedBlogs = () => {


    return (
        <section className="feed">
            <div className="container-fluid">
                <Masonry columnsCount={4} gutter="30px" className="newsfeeds ">

                    {NewsFeedData.map((feed, index) => {
                        const {id, text, title, img, linkText, category} = feed;
                        return (
                            <div key={index}>
                                <NewsFeedBlogList id={id} title={title} img={img} text={text} linkText={linkText}
                                                  category={category}/>
                            </div>
                        )
                    })}

                </Masonry>
            </div>
        </section>


    )
};

export default NewsFeedBlogs;
