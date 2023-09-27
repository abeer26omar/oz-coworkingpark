import React from 'react';
import './SingleNewFeed.css';
import '../NewsFeedBlog.css';
import vector from "../../../../assets/images/VectorRight.png";
import headNews from "../../../../assets/images/news/test.png";
import blog2 from "../../../../assets/images/news/newsblog2.png";
import blog1 from "../../../../assets/images/news/newsblog.png";
import {NavLink} from "react-router-dom";
import Card from "react-bootstrap/Card";
import imageone from "../../../../assets/images/news/news1.png"

const SingleNewFeed = () => {
    return (
        <>
            <div className="position-relative">
                <img
                    src={vector}
                    alt="shape" className="position-absolute "
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
                        <h2 className="name-feed">Lorem Ipsum</h2>
                        <span className="category-head">Category:<span className="category-name">Arts</span></span>
                    </span>

                                </div>
                                <div className="fav">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M40.203 12.9117L40.2033 12.9122C42.154 16.907 41.4118 21.4786 37.6715 26.623L37.6701 26.6248C34.714 30.717 30.4556 34.8183 24.2373 39.6473L24.2361 39.6483C24.1702 39.6997 24.089 39.7276 24.0054 39.7276C23.9218 39.7276 23.8406 39.6997 23.7747 39.6483L23.7736 39.6474C17.5465 34.8092 13.2966 30.6727 10.3383 26.6217C6.58752 21.4778 5.84568 16.9067 7.79621 12.9122L7.79649 12.9117C9.14073 10.153 13.096 7.79884 17.8177 9.15202C20.0685 9.80233 22.0322 11.1966 23.3881 13.1072L23.9998 13.969L24.6114 13.1072C25.9675 11.1964 27.9315 9.80203 30.1825 9.15182L30.1844 9.15126C34.8902 7.7783 38.8574 10.1502 40.203 12.9117Z"
                                            fill="#585858" fill-opacity="0.7" stroke="#BDBDBD" stroke-width="1.5"/>
                                    </svg>
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
                                <img src={headNews} alt="" className="details-image"/>
                            </div>
                        </div>
                        <div className="col-lg-8 border-right ">
                            <div className="box-details border-bottom">
                                <h3>
                                    The artist and designer Rogan Gregory is something of an enigma, or perhaps a
                                    shape-shifter.
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit
                                    amet, consectetur dipiscing elit eiusmod ipsum dolor sit amet, dipiscing elit
                                    eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum
                                    dolor sit a elit eiusmod Lorem ipsum dolor sit amet, consectetur di consectetur
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                    eiusmod Lorem ipsum dolor sit amet, consectet ipsum dolor sit amet, consectetur
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                    eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit Lorem ipsum dolor sit
                                    amet, consectetur dipiscing elit eiusmod
                                </p>
                            </div>
                            <div className="box-details border-bottom">
                                <div
                                    className="d-lg-flex justify-content-between align-items-center d-sm-block m-sm-auto ">
                                    <img src={blog1}/>
                                    <img src={blog2}/>
                                </div>
                            </div>
                            <div className="box-details border-bottom">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit
                                    amet, consectetur dipiscing elit eiusmod ipsum dolor sit amet, dipiscing elit
                                    eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum
                                    dolor sit a elit eiusmod Lorem ipsum dolor sit amet, consectetur di consectetur
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                    eiusmod Lorem ipsum dolor sit amet, consectet ipsum dolor sit amet, consectetur
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                    eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit Lorem ipsum dolor sit
                                    amet, consectetur dipiscing elit eiusmod
                                </p>
                                <a href="#" className="btn button-outLine btn-bg-white ">Our Vision</a>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="box-details ">
                                <h3>
                                    Articles Related
                                </h3>
                                <div className="newsfeeds border-0 m-0 p-0 ">
                                    <NavLink to={"/community/newsfeed/singleFeed"}>
                                        <Card className="Card-news">
                                            <Card.Img variant="top" src={imageone} className="rounded-0 " title="art"
                                                      loading="lazy"/>
                                            <Card.Body>
                                                <span className="feed-category">Art</span>
                                                <Card.Title>Lorem ipsum</Card.Title>
                                                <Card.Text>Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                                    eiusmod</Card.Text>
                                                {/*<a className="btn button-outLine btn-bg-white">{linkText}</a>*/}
                                            </Card.Body>
                                        </Card>
                                    </NavLink>

                                    <NavLink to={"/community/newsfeed/singleFeed"}>
                                        <Card className="Card-news">
                                            <Card.Img variant="top" src={imageone} className="rounded-0 " title="art"
                                                      loading="lazy"/>
                                            <Card.Body>
                                                <span className="feed-category">Art</span>
                                                <Card.Title>Lorem ipsum</Card.Title>
                                                <Card.Text>Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                                    eiusmod</Card.Text>
                                                {/*<a className="btn button-outLine btn-bg-white">{linkText}</a>*/}
                                            </Card.Body>
                                        </Card>
                                    </NavLink>
                                    <NavLink to={"/community/newsfeed/singleFeed"}>
                                        <Card className="Card-news">
                                            <Card.Img variant="top" src={imageone} className="rounded-0 " title="art"
                                                      loading="lazy"/>
                                            <Card.Body>
                                                <span className="feed-category">Art</span>
                                                <Card.Title>Lorem ipsum</Card.Title>
                                                <Card.Text>Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                                    eiusmod</Card.Text>
                                                {/*<a className="btn button-outLine btn-bg-white">{linkText}</a>*/}
                                            </Card.Body>
                                        </Card>
                                    </NavLink>

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
