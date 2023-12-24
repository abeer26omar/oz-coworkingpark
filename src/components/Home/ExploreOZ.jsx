import React from "react";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import { Nav, Tab } from "react-bootstrap";
import './ExploreOz.css';

const ExploreOZ = (props) => {
    return (
        <>
            <section className=" ExploreOz">
                <div className="container-fluid">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="head-content-sec">
                                    <Paragraph className='head_feature'>{'Explore OZ'}</Paragraph>                              
                                </div>    
                            </div>
                        </div>
                        <div className="row border-of-section book-oz">
                          
                            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-6 border-right text-center">
                                <Tab.Content animation>
                                    <Tab.Pane eventKey="one">
                                        {props.configData ? props.configData.map((configItem , index)=>(
                                            <React.Fragment key={index}>
                                                {configItem.key === "home_page_explore_space_image_1" &&
                                                    <img
                                                        className="image-box img_notLazey w-100"
                                                        src={configItem.value}
                                                        alt="Our OZ Vision"
                                                    />
                                                }
                                            </React.Fragment>  
                                        )):''}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="two">
                                        {props.configData ? props.configData.map((configItem , index)=>(
                                            <React.Fragment key={index}>
                                                {configItem.key === "home_page_explore_space_image_2" &&
                                                    <img
                                                        className="image-box img_notLazey w-100"
                                                        src={configItem.value}
                                                        alt="Our OZ Vision"
                                                    />
                                                }
                                            </React.Fragment>  
                                        )):''}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three">
                                        {props.configData ? props.configData.map((configItem , index)=>(
                                            <React.Fragment key={index}>
                                                {configItem.key === "home_page_explore_space_image_3" &&
                                                    <img
                                                        className="image-box img_notLazey w-100"
                                                        src={configItem.value}
                                                        alt="Our OZ Vision"
                                                    />
                                                }
                                            </React.Fragment>  
                                        )):''}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                        {props.configData ? props.configData.map((configItem , index)=>(
                                            <React.Fragment key={index}>
                                                {configItem.key === "home_page_explore_space_image_4" &&
                                                    <img
                                                        className="image-box img_notLazey w-100"
                                                        src={configItem.value}
                                                        alt="Our OZ Vision"
                                                    />
                                                }
                                            </React.Fragment>  
                                        )):''}
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-6 m-auto">
                                <div className="box-content p-lg-4 p-2">
                                    <Paragraph className='paragraph_black mb-0'>{'Book your space'}</Paragraph>
                                    <Nav variant="pills" className="flex-column py-3">
                                        <Nav.Item>
                                            {props.configData ? props.configData.map((configItem , index)=>(
                                                <React.Fragment key={index}>
                                                    {configItem.key === "home_page_explore_space_title_1" &&
                                                        <Nav.Link className="explore_link" eventKey="one">{configItem.value}</Nav.Link>
                                                    }
                                                </React.Fragment>  
                                            )):''}
                                        </Nav.Item>
                                        <Nav.Item>
                                            {props.configData ? props.configData.map((configItem , index)=>(
                                                <React.Fragment key={index}>
                                                    {configItem.key === "home_page_explore_space_title_2" &&
                                                        <Nav.Link className="explore_link" eventKey="two">{configItem.value}</Nav.Link>
                                                    }
                                                </React.Fragment>  
                                            )):''}
                                        </Nav.Item>
                                        <Nav.Item>
                                            {props.configData ? props.configData.map((configItem , index)=>(
                                                <React.Fragment key={index}>
                                                    {configItem.key === "home_page_explore_space_title_3" &&
                                                        <Nav.Link className="explore_link" eventKey="three">{configItem.value}</Nav.Link>
                                                    }
                                                </React.Fragment>  
                                            )):''}
                                        </Nav.Item>
                                        <Nav.Item>
                                            {props.configData ? props.configData.map((configItem , index)=>(
                                                <React.Fragment key={index}>
                                                    {configItem.key === "home_page_explore_space_title_4" &&
                                                        <Nav.Link className="explore_link" eventKey="four">{configItem.value}</Nav.Link>
                                                    }
                                                </React.Fragment>  
                                            )):''}
                                        </Nav.Item>
                                    </Nav>
                                    <Button tagType='link' className='btn_outline_black' to={'/spaces'}>Explore More</Button>
                                </div>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
            </section>
        </>
    );
};

export default React.memo(ExploreOZ);
