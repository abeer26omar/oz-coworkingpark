import React from 'react';
import community from "../../../assets/images/videos/community.mp4";
import './CommunityHeader.css';
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Paragraph from '../../UI/Paragraph';
import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
import SectionHeader from '../../UI/SectionHeader';

const CommunityHeader = (props) => {
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
{/* 
            <div className="box community-header">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="rectangle-wrapper">
                                <div className="rectangle"/>
                            </div>
                            <video className="img" alt="Group" src={community} autoPlay muted loop/>
                            <div className="group-2">
                                <Paragraph>{'Community'}</Paragraph>
                                <Paragraph className={'my-40 w-50'}>
                                    {' Lorem ipsum dolor consectetuer Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit ameLorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit ameLorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit ame ,'}
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <MainHeaderWrapper configData={props.configData} video={community}>
                {/* <SectionHeader configData={props.configData} /> */}
                <div className={`container-fluid px-70`}>
                    <div className='col-md-6 col-12'>
                        {props.configData ? props.configData.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === 'community_page_header_main_title' && (
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
