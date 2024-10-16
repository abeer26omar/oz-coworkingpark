import React, { useEffect, useState, useContext } from 'react';
import party from "../../../../../assets/images/party.png";
import './CommunityExploreHeader.css';
import { DataContext } from '../../../../../apis/context/SiteDataContext';
import MainHeaderWrapper from '../../../../UI/MainHeaderWrapper';
import Paragraph from '../../../../UI/Paragraph';

const CommunityExploreHeader = () => {

    const {config, getComponentValue} = useContext(DataContext);
    
    return (
        <>
          
            <MainHeaderWrapper image={party}>
                <div className={`container-fluid px-70 py-5`}>
                    <div className='col-md-6 col-12'>
                        <p class="main_header_title mb-0">Initiating</p>
                                    <Paragraph className='head_paragraph mb-3'>news feed</Paragraph>
                                    <Paragraph className='description mb-0'>Stay updated with all the latest
                                     happenings inside OZ, including community members' achievements and more.
                                      We believe in celebrating the success stories of our vibrant community, 
                                      and this section serves as a platform to showcase the incredible
                                       accomplishments of our members. From ground-breaking projects
                                        to innovative collaborations, you'll have a front-row seat to
                                         the inspiring journeys taking place within OZ.
                                      </Paragraph>


                        {/* { data? data.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === "community_page_event_title" && (
                                    <Paragraph className='head_paragraph mb-3'>{configItem.value}</Paragraph>
                                )}
                                {configItem.key === "community_page_event_description" && (
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

export default CommunityExploreHeader;
