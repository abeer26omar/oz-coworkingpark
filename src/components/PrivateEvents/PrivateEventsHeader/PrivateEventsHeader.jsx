import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import { Link } from 'react-scroll';
import prevent from "../../../assets/images/videos/prevent.mp4";
import './PrivateEventsHeader.css';
import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
import {PrivateEventsData} from "../../../Data/PrivateEventsData";
import Paragraph from '../../UI/Paragraph';
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
                                    <Link 
                                        className="nav-link-two links-margin" 
                                        to={address} 
                                        smooth={true} 
                                        duration={100}
                                        key={index} 
                                    >
                                        {address}
                                    </Link>
                                )
                            })}

                        </>
                    </Nav>
                </Container>
            </Navbar>

            <MainHeaderWrapper  video={prevent}>
                <div className={`container-fluid px-70 py-5`}>
                    <div className='col-md-6 col-12'>
                        {/* {props.configData ? props.configData.map((configItem, index) => (
                            <React.Fragment key={index}> */}
                                {/* {configItem.key === 'booking_page_title' && ( */}
                                    <Paragraph className='head_paragraph mb-3'>{'Private Events'}</Paragraph>
                                {/* )} */}
                                {/* {configItem.key === 'booking_page_description' && ( */}
                                    <Paragraph className='description mb-0'>
                                        {' Lorem ipsum dolor consectetuer Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit ameLorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit ameLorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit ame ,'}
                                    </Paragraph>
                                {/* )} */}
                            {/* </React.Fragment>
                        )): ''} */}
                    </div>
                </div>
            </MainHeaderWrapper>
        </>
    );
};

export default PrivateEventsHeader;
