import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Container} from "react-bootstrap";
import booking from "../../../assets/images/videos/book.mp4";
import './BookinHeader.css';
import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
import Paragraph from '../../UI/Paragraph';

const BookingHeader = (props) => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator">
                <Container fluid className='justify-content-start'>
                    <Navbar.Brand className="title-name" to={'/booking'}>
                        Booking
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

                </Container>
            </Navbar>
            <MainHeaderWrapper configData={props.configData} video={booking}>
                <div className={`container-fluid px-70`}>
                    <div className='col-md-6 col-12'>
                        {props.configData ? props.configData.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === 'booking_page_title' && (
                                    <Paragraph className='head_paragraph mb-3'>{configItem.value}</Paragraph>
                                )}
                                {configItem.key === 'booking_page_description' && (
                                    <Paragraph className='description mb-0'>{configItem.value}</Paragraph>
                                )}
                            </React.Fragment>
                        )): ''}
                    </div>
                </div>
            </MainHeaderWrapper>
        </>
    );
};

export default React.memo(BookingHeader);
