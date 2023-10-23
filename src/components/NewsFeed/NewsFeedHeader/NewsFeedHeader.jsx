import React from "react";
import "./NewsFeedHeader.css";
import newsfeed from "../../../assets/images/newsfeed.png";
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import Media from "../../Media/Media";
import Paragraph from "../../UI/Paragraph";
import MainHeaderWrapper from "../../UI/MainHeaderWrapper";
import { useData } from "../../../apis/auth_api/Createdata";
import { useState ,useEffect } from "react";
const NewsFeedHeader = (props) => {
const DataLocation = useData();
const page_home = DataLocation.config('community')
const [data , setData] = useState([page_home]);
 useEffect(()=>{
        page_home.then(res =>{
            setData(res)
            console.log(res);
        })
        .catch(err =>{
         
        })
    },[]);
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

            <MainHeaderWrapper configData={data} image={newsfeed}>
                <div className={`container-fluid px-70 py-5`}>
                    <div className='col-md-6 col-12'>
                        <p class="main_header mb-0">Community</p>
                                    <Paragraph className='head_paragraph mb-3'>News Feed</Paragraph>
                                    <Paragraph className='description mb-0'>
                                        Stay updated with all the latest happenings inside OZ, including community members' achievements and more. We believe in celebrating the success stories of our vibrant community, and this section serves as a platform to showcase the incredible accomplishments of our members. From ground-breaking projects to innovative collaborations, you'll have a front-row seat to the inspiring journeys taking place within OZ.
                                    </Paragraph>


                        {/* { data? data.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === "community_page_newsfeed_title" && (
                                    <Paragraph className='head_paragraph mb-3'>{configItem.value}</Paragraph>
                                )}
                                {configItem.key === "community_page_newsfeed_description" && (
                                    <Paragraph className='description mb-0'>{configItem.value}</Paragraph>
                                )}
                            </React.Fragment>
                        )): ''} */}
                    </div>
                </div>
            </MainHeaderWrapper>
        </>
    );
};

export default NewsFeedHeader;
