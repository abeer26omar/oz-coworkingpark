import React from 'react';
import './NewsFeedBlog.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {NewsFeedData} from "../../../Data/NewsFeedData";
import NewsFeedBlogList from "./NewsFeedBlogList";

const NewsFeedBlogs = () => {


    return (
        <section className="feed">
            <div className="container-fluid">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
                >
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
                </ResponsiveMasonry>
            </div>
        </section>


    )
};

export default NewsFeedBlogs;
