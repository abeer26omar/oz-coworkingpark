import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SingleNewFeed.css';
import '../NewsFeedBlog.css';
import vector from "../../../../assets/images/VectorRight.png";
import {NavLink, useParams} from "react-router-dom";
import { getNewFeedsPost, getCommunityNewsFeed } from '../../../../apis/Events';
import Card from "react-bootstrap/Card";

const SingleNewFeed = () => {

    const { id } = useParams();
    const [post, setPost] = useState({});
    const [relatiedArticles, setRelatiedArticles] = useState([]);

    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchNewsFeedPosts = async () => {
            try{
                const res = await getNewFeedsPost(id, source);
                if (isMounted) {
                    setPost(res);
                }
            }catch (error){

            }
        }
        fetchNewsFeedPosts();

        return ()=>{
            isMounted = false;
            source.cancel()
        };
    },[id]);

    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchRelatedArticles = async () => {
            try{
                const res = await getCommunityNewsFeed('no', source);
                if (isMounted) {
                    setRelatiedArticles(res['posts']);
                }
            }catch (error){
                console.log(error);
            }
        }
        fetchRelatedArticles()
        return ()=>{
            isMounted = false;
            source.cancel()
        };
    },[id]);

    return (
        <>
            <div className="position-relative">
                <img
                    src={vector}
                    alt="shape" className="position-absolute  vector-news"
                    style={{top: "115px", right: "0", width: "100px"}}
                />
            </div>
            <section className="title-feed-header">

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-lg-12 ">

                            <div className="section-wrap d-flex justify-content-between ">
                                <div className="head-news-section">
                                <span className="news-feed-head">
                        News Feed :
                        <h2 className="name-feed">{post.title}</h2>
                        <span className="category-head">Category:<span className="category-name">{post.category_name}</span></span>
                    </span>

                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="ms-auto">

                        <>


                        </>
                    </div>


                </div>

            </section>
            <section className="news-details">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-header">
                                <img src={post.banner} alt={post.title} className="details-image"/>
                            </div>
                        </div>
                        <div className="col-lg-7 border-right ">
                            <div className="box-details border-bottom">
                                <h3>
                                    {post.title}
                                </h3>
                                <p>{post.content}</p>
                            </div>
                            <div className="box-details border-bottom">
                                <div className='row m-auto'>
                                    <div className='col-xl-6  col-sm-12'>
                                    <img className='w-100 pb-2' src={post.banner}/>
                                    </div>
                                     <div className='col-xl-6 col-sm-12 pb-2'>
                                    <img className='w-100' src={post.banner}/>
                                    </div>
                                </div>
                            </div>
                            <div className="box-details border-bottom">
                                <a href="#" className="btn button-outLine btn-bg-white ">Share</a>
                            </div>

                        </div>
                        <div className="col-lg-5">
                            <div className="box-details ">
                                <h3>
                                    Articles Related
                                </h3>
                                <div className="newsfeeds border-0 m-0 p-0 ">
                                    {relatiedArticles && relatiedArticles.filter(item=> item.category_name === post.category_name).map(article=>{
                                        const {id, content, title, banner, category_name} = article;
                                        return (
                                            <NavLink to={`/community/newsfeed/singleFeed/${id}`}>
                                                <Card className="Card-news">
                                                    <Card.Img variant="top" src={banner} className="rounded-0 " 
                                                        title={title}
                                                        loading="lazy"/>
                                                    <Card.Body className='mb-4'>
                                                        <span className="feed-category">{category_name}</span>
                                                        <Card.Title>{title}</Card.Title>
                                                        <Card.Text>{content.slice(0,90)}...</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </NavLink>
                                        )
                                    })}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleNewFeed;
