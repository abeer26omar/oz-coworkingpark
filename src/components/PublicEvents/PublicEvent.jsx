import React from "react";
import "./PublicEvent.css";
import PublicEventList from './PublicEventList';
import Paragraph from "../UI/Paragraph";

const PublicEvent = (props) => {
    return (
        <>
            <section className="events">
                <div className="container-fluid">
                    <div className="row">                
                        <div className="col-lg-12">
                            <div className="head-content-sec">
                                <Paragraph className='head_feature'>{'Community Events'}</Paragraph>                              
                            </div> 
                        </div>               
                        <div className="border-of-section">
                            <div className="row p-5 justify-content-between align-items-center">
                                {props.configData ? props.configData.map((configItem , index)=>(
                                    <React.Fragment key={index}>
                                        {configItem.key === "home_page_event_title" &&                            
                                            <div className="col-sm-12 col-lg-5">
                                                <Paragraph className='paragraph_black'>{configItem.value}</Paragraph>
                                            </div>
                                        }
                                        {configItem.key === "home_page_event_description" &&                            
                                            <div className="col-sm-12 col-lg-7 m-auto">
                                                <Paragraph className='description_black'>{configItem.value}</Paragraph>
                                            </div>
                                        }
                                    </React.Fragment>                                
                                )):''}
                            </div>                                 
                           <PublicEventList />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default React.memo(PublicEvent) ;
