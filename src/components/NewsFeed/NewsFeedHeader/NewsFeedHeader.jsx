import React from "react";
import "./NewsFeedHeader.css";
import newsfeed from "../../../assets/images/newsfeed.png";
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import Media from "../../Media/Media";


const NewsFeedHeader = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator-feed">
                <Container fluid>
                    <Navbar.Brand className="title-name" href="#home">
                        News Feed
                    </Navbar.Brand>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="127"
                        viewBox="0 0 2 127"
                        fill="none"
                    >
                        <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5"/>
                    </svg>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <>
                                <svg
                                    width="2"
                                    height="127"
                                    viewBox="0 0 2 127"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="searchIcon"
                                >
                                    <path
                                        d="M1 0L1.00001 127"
                                        stroke="#BDBDBD"
                                        stroke-width="1.5"
                                    />
                                </svg>
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="23.4"
                                        cy="23.4"
                                        r="11.4"
                                        stroke="#BDBDBD"
                                        stroke-width="1.5"
                                    />
                                    <path
                                        d="M33.5996 33.5996L35.9996 35.9996"
                                        stroke="black"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="box news-header">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="rectangle-wrapper">
                                <div className="rectangle"/>
                            </div>
                            <Media
                                type="img"
                                className="img"
                                alt="Group"
                                src={newsfeed}
                                autoPlay
                                muted
                                loop
                            />
                            <div className="group-2">
                                <h1 className="an-innovative-co position-relative">
                                    <span className="text-wrapper head-co">Community</span>
                                    <span className="text-wrapper-2">News feed</span>
                                </h1>
                                <p className="p">
                                    Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit
                                    amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, Lorem ipsum dolor sit
                                    amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, consectetuerLorem
                                    ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsFeedHeader;
