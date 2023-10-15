import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Container} from "react-bootstrap";
import booking from "../../../assets/images/videos/book.mp4";
import './BookinHeader.css';
import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
import SectionHeader from '../../UI/SectionHeader';
import Paragraph from '../../UI/Paragraph';

const BookingHeader = (props) => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator">
                <Container fluid>
                    <Navbar.Brand className="title-name" href="#home">
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
            {/* <div className="box community-header">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="rectangle-wrapper">
                                <div className="rectangle"/>
                            </div>
                            <video className="img" alt="Group" src={booking} autoPlay muted loop/>
                            <div className="group-2">
                                <Paragraph>{'Booking'}</Paragraph>                                 
                                <Paragraph className={'my-40 w-50'}>
                                    { 'Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,'}
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <MainHeaderWrapper configData={props.configData} video={booking}>
                <SectionHeader configData={props.configData} />
            </MainHeaderWrapper>
        </>
    );
};

export default React.memo(BookingHeader);
