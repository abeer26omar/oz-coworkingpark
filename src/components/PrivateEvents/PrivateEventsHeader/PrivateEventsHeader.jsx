import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import prevent from "../../../assets/images/videos/prevent.mp4";
import './PrivateEventsHeader.css';
import {PrivateEventsData} from "../../../Data/PrivateEventsData";

const PrivateEventsHeader = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator">
                <Container fluid>
                    <Navbar.Brand className="title-name" href="#home">
                        Private Events
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

                    <Nav className="ms-auto nav-head private-events-head ">
                        <>

                            {PrivateEventsData.map((addevent, index) => {
                                const {address} = addevent;
                                return (
                                    <NavLink className="nav-link-two links-margin" key={index}>
                                        {address}

                                    </NavLink>
                                )
                            })}


                            {/*<NavLink className="nav-link-two links-margin" onClick={() => {*/}
                            {/*    window.location.href = '#community-newsfeed';*/}
                            {/*}}>*/}
                            {/*    El- sheikh Zayed*/}
                            {/*</NavLink>*/}

                        </>
                    </Nav>
                </Container>
            </Navbar>

            <div className="box prevent-header">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="rectangle-wrapper">
                                <div className="rectangle"/>
                            </div>
                            <video className="img" alt="Group" src={prevent} autoPlay muted loop/>
                            <div className="group-2">
                                <h1 className="an-innovative-co">
                                    <span className="text-wrapper-2">Private Events</span>
                                </h1>
                                <p className="p">
                                    Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,

                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default PrivateEventsHeader;
