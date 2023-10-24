import React from "react";
import Button from "../UI/Button";
import Media from "../Media/Media";
import Paragraph from "../UI/Paragraph";
import { Nav, Tab } from "react-bootstrap";
import mediaOZ_1 from '../../assets/images/amenities/Rectangle 47.svg';
import mediaOZ_2 from '../../assets/images/amenities/Rectangle 47 (1).svg';
import mediaOZ_3 from '../../assets/images/amenities/Rectangle 47 (2).svg';
import mediaOZ_4 from '../../assets/images/amenities/Rectangle 47 (3).svg';
import './ExploreOz.css';
const ExploreOZ = (props) => {
    return (
        <>
            <section className="head-of-section ExploreOz">
                <div className="container-fluid">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="head-content-sec">
                                    <Paragraph className='head_feature'>{'Explore OZ'}</Paragraph>                              
                                </div>    
                            </div>
                        </div>
                        <div className="row border-of-section ">
                            <div className="col-md-6 col-lg-8 col-sm-12 col-xs-6 border-right img_block">
                                <Tab.Content animation>
                                    <Tab.Pane eventKey="first">
                                        <Media
                                            src={mediaOZ_1}
                                            type='img' />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Media
                                            src={mediaOZ_2}
                                            type='img' />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Media
                                            src={mediaOZ_3}
                                            type='img' />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <Media
                                            src={mediaOZ_4}
                                            type='img' />
                                    </Tab.Pane>
                                </Tab.Content>
                            {/* {props.configData ? props.configData.map((configItem , index)=>(
                                <React.Fragment key={index}>
                                    {configItem.key === "home_page_newsfeed_image" &&
                                            <Media type="img"
                                                className="image-box w-100"
                                                src={configItem.value}
                                                alt="Our OZ Vision"
                                            />
                                        }
                                        </React.Fragment>  
                                    )):''} */}
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-12 col-xs-6 m-auto">
                                <div className="box-content px-4">
                                    <Paragraph className='paragraph_black'>{'Book your space'}</Paragraph>
                                    <Nav variant="pills" className="flex-column py-4">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Markers Room</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Photography Studio</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Arts & Music School</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">Auditorium</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    {/* {props.configData ? props.configData.map((configItem , index)=>(
                                        <React.Fragment key={index}>
                                            {configItem.key === "home_page_newsfeed_title" &&  <Paragraph className='paragraph_black'>{configItem.value}</Paragraph>}
                                            {configItem.key === "home_page_newsfeed_description" && <Paragraph className='description_black'>{configItem.value}</Paragraph>}
                                        </React.Fragment>
                                    )):''} */}
                                    <Button tagType='link' className='btn_outline_black'>Our Vision</Button>
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
