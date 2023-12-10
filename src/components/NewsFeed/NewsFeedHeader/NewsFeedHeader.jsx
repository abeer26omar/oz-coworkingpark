import React, { useState ,useEffect, useContext } from "react";
import "./NewsFeedHeader.css";
import newsfeed from "../../../assets/images/newsfeed.png";
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import Media from "../../Media/Media";
import Paragraph from "../../UI/Paragraph";
import MainHeaderWrapper from "../../UI/MainHeaderWrapper";
import { DataContext } from "../../../apis/context/SiteDataContext";
import { AuthContext } from '../../../apis/context/AuthTokenContext';
import Button from "../../UI/Button";
import { searchEvents } from '../../../apis/Events';

const NewsFeedHeader = ({getSearchResult}) => {

    const {config, getComponentValue} = useContext(DataContext);
    // const { token, userId } = useContext(AuthContext)
    // const [openSearch, setOpenSearch] = useState(false);
    
    // const handelSearch = (event)=>{
    //     searchEvents(token, userId, event.target.value).then(res=>{
    //         getSearchResult(res);
    //     }).catch(err=>{
    //         if(err){
    //         //     setError(err.response.data.message);
    //         //     setEmpty('');
    //         // }else{
    //         //     setError('');
    //         //     setEmpty('');
    //         }
    //     })
    // };

    return (
        <>
            <div className="bg-body-tertiary navigator-feed">
                <Container fluid>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <h1 className="title-name mb-0">
                                News Feed
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
                        <div>
                            <div className="ms-auto">
                                <>
                                    {/* <svg
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
                                    </svg> */}
                                    {/* <Button
                                        tagType='link'
                                        className='p-0 m-4'
                                        onClick={()=>{setOpenSearch(!openSearch)}}>
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
                                    </Button> */}
                                </>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* {openSearch && <div className={`bg-body-tertiary search_container navigator-feed ${openSearch ? 'show' : ''}`}>
                <Container fluid>
                    <div className="d-flex justify-content-between align-items-center py-4 px-5">
                        <div className='col-6'>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    className="form__field placeholderSelect" 
                                    placeholder="Search for news feed"
                                    onChange={handelSearch}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>} */}
            <MainHeaderWrapper configData={config('')} image={newsfeed}>
                <div className={`container-fluid px-70 py-5`}>
                    <div className='col-xl-6 col-lg-9 col-12'>
                        <h2 class="main_header mb-0">Community</h2>
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
