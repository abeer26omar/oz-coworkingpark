import React from 'react';
import community from "../../../assets/images/videos/community.mp4";
import './CommunityHeader.css';
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const CommunityHeader = () => {
    const navLinks = () => {


    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator">
                <Container fluid>
                    <Navbar.Brand className="title-name" href="#home">
                        Community
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
                    <Nav className="ms-auto nav-head">
                        <>
                            <NavLink className="nav-link-two links-margin" onClick={() => {
                                window.location.href = '#community-newsfeed';
                            }}>
                                News Feed
                            </NavLink>
                            <NavLink className="nav-link-two  links-margin"
                                     onClick={() => {
                                         window.location.href = '#community-events';
                                     }}
                                     smooth={true}
                                     smoothScrollTimeout={1000}
                            >
                                Events
                            </NavLink>
                            <NavLink className="nav-link-two links-margin"
                                     onClick={() => {
                                         window.location.href = '#community-gallery';
                                     }
                                     }
                            >
                                Gallery
                            </NavLink>
                        </>
                    </Nav>
                </Container>
            </Navbar>

            <div className="box community-header">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="rectangle-wrapper">
                                <div className="rectangle"/>
                            </div>
                            <video className="img" alt="Group" src={community} autoPlay muted loop/>
                            <div className="group-2">
                                <h1 className="an-innovative-co">
                                    <span className="text-wrapper-2">Community</span>
                                </h1>
                                <p className="p">Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet,</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CommunityHeader;
