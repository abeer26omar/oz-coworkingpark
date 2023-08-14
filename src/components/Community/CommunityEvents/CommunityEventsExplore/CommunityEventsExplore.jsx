import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import './CommunityEventsExplore.css';
import MultipleEventSlider from "./CommunityEventsSliders/MultipleEventSlider";
import SingleEventSlider from "./CommunityEventsSliders/SingleEventSlider";
import CommunityExploreHeader from "./CommunityEventsExploreHeader/CommunityExploreHeader";

const CommunityEventsExplore = () => {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator-feed">
                <Container fluid>
                    <Navbar.Brand className="title-name" href="#home">
                        Community events
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
                    <Nav className="ms-auto">
                        <>

                        </>
                    </Nav>

                </Container>
            </Navbar>


            <CommunityExploreHeader/>

            <section className="events-show border-bottom border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 single-margin ">
                            <div className="single-event-slider ">
                                <SingleEventSlider/>
                            </div>
                        </div>
                        <div className="col-lg-6 border-left">
                            <div className="multiple-event-slider ">
                                <MultipleEventSlider/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="monoBlock monoBlock-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block"><h1 className="text-h1">I'LL BE AT OZ </h1>
                                <p className="text-p">
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem
                                    ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet,
                                    consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing
                                    elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod</p>
                            </div>
                            <div className="buttons d-flex justify-content-center align-items-center"><
                                a href="#" className="btn button-outLine btn-bg-white">Become a Member</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CommunityEventsExplore;
