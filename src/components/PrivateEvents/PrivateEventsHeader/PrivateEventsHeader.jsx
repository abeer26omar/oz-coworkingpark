import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-scroll';
import prevent from "../../../assets/images/videos/prevent.mp4";
import './PrivateEventsHeader.css';
import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
import {PrivateEventsData} from "../../../Data/PrivateEventsData";
import Paragraph from '../../UI/Paragraph';

const PrivateEventsHeader = () => {
    return (
        <>
            <div className="bg-body-tertiary navigator private">
                <Container fluid>
                    <div className='d-flex align-items-center justify-content-between change_dir'>
                        <div className='d-flex'>
                            <h1 className="title-name mb-0">
                                Private Events
                            </h1>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2"
                                height="127"
                                viewBox="0 0 2 127"
                                fill="none"
                            >
                                <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5"/>
                            </svg>
                        </div>
                        <div className="d-flex align-items-centerprivate-events-head py-3 change_dir_sm">
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

                        </div>
                    </div>
                </Container>
            </div>

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
                                        {` Welcome to the vibrant world of OZ, where creativity thrives, and connections are made. Nestled in the heart of the city, OZ offers a range of versatile venues for rent, perfect for hosting a wide variety of events. Whether you're planning a corporate conference, a product launch, a networking event, or a social gathering, our venues are designed to meet your every need. With state-of-the-art facilities, flexible spaces, and a dynamic atmosphere, our coworking park provides the ideal backdrop for a successful and memorable event,`}
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
