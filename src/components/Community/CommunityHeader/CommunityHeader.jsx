import React from 'react';
import community from "../../../assets/images/videos/community.mp4";
import './CommunityHeader.css';
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import { Link } from 'react-scroll';
import Paragraph from '../../UI/Paragraph';
import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
const CommunityHeader = (props) => {
console.log(props.configData)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator">
                <Container fluid>
                            {props.configData ? props.configData.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === 'community_page_header_main_title' && (
                                       <Navbar.Brand className="title-name" href="#home">
                                           {configItem.value}
                                       </Navbar.Brand>
                                   
                                )}
                              
                            </React.Fragment>
                        )): ''}
                 
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
                            <Link 
                                className="nav-link-two links-margin" 
                                to={'community-newsfeed'} 
                                smooth={true} 
                                duration={100}
                            >
                                {'News Feed'}
                            </Link>
                            <Link 
                                className="nav-link-two links-margin" 
                                to={'community-events'} 
                                smooth={true} 
                                duration={100}
                            >
                                {'Events'}
                            </Link>
                            <Link 
                                className="nav-link-two links-margin" 
                                to={'community-gallery'} 
                                smooth={true} 
                                duration={100}
                            >
                                {'Gallery'}
                            </Link>
                        </>
                    </Nav>
                </Container>
            </Navbar>
            <MainHeaderWrapper configData={props.configData} video={community}>
                {/* <SectionHeader configData={props.configData} /> */}
                <div className={`container-fluid px-70 py-5`}>
                    <div className='col-md-6 col-12'>
                        {props.configData ? props.configData.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === 'community_page_header_sub_title' && (
                                    <Paragraph className='head_paragraph mb-3'>{configItem.value}</Paragraph>
                                )}
                                {configItem.key === 'community_page_header_description' && (
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

export default React.memo(CommunityHeader);
