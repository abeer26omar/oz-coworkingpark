import React, { useState, useEffect } from 'react';
import './NewsFeedBlog.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Paragraph from '../../UI/Paragraph';
import { getCommunityNewsFeed } from '../../../apis/Events';
import NewsFeedBlogList from "./NewsFeedBlogList";
import NewsFeedHeader from "../NewsFeedHeader/NewsFeedHeader";
import CardPlaceHolder from '../../UIPlaceholders/CardPlaceHolder';

const NewsFeedBlogs = () => {

    const [newsFeedData, setNewsFeedData] = useState([]);
    const [error, setError] = useState('');
    const [empty, setEmpty] = useState('');

    useEffect(()=>{
        getCommunityNewsFeed('no').then(res=>{
            setNewsFeedData(res['posts'])
        }).catch(err=>{})
    },[]);

    const getSearchResult = (searchResult, error, empty) => {
        setNewsFeedData(searchResult);
        setError(error); 
        setEmpty(empty);
    };

    return (
        <>
            <NewsFeedHeader getSearchResult={getSearchResult} />
            <section className="feed">
                <div className="container-fluid">
                    {empty && <Paragraph className='empty'>{empty}</Paragraph>}
                    {error && <Paragraph className='text-danger empty'>{error}</Paragraph>}
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
                    >
                        <Masonry columnsCount={4} gutter="30px" className="newsfeeds ">

                            {newsFeedData ? newsFeedData.map((feed, index) => {
                                const {id, content, title, banner, category_name} = feed;
                                return (
                                    <div key={index}>
                                        <NewsFeedBlogList 
                                            id={id} 
                                            title={title} 
                                            img={banner} 
                                            text={content} 
                                            category={category_name}/>
                                    </div>
                                )
                            }) : (
                                <CardPlaceHolder />
                            )}

                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </section>
        </>

    )
};

export default NewsFeedBlogs;
