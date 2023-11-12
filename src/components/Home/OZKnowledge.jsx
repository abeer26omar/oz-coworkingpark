import React from "react";
// import "./Content.css";
import Button from "../UI/Button";
import Media from "../Media/Media";
import Paragraph from "../UI/Paragraph";
import Course from '../../assets/images/course.png';
import Vector from '../../assets/images/vectorRight.svg';
const OZKnowledge = (props) => {
    return (
        <>
            <section className=" ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                             <div className="head-content-sec">
                                    <Paragraph className='head_feature'>{'OZ Knowledge&B'}</Paragraph>                              
                             </div> 
                        </div>
                    </div>
                    <div className="row R-flex border-of-section  position-relative ">
                                <img className="img_courses_vector" src={Vector}/>
                        <div className="col-md-6 col-lg-4 col-sm-12 col-xs-6 m-auto">
                            <div className="box-content  px-4">
                                  <Paragraph className='paragraph_black'>Courses</Paragraph>
                                   <Paragraph className='description_black'>
                                    The OZ Knowledge program focuses on empowering individuals, start-ups, and SMEs with the knowledge and skills they need to thrive in today's dynamic world. With the aim of fostering personal and professional growth through a diverse range of learning experiences centred around wellness, making, and learning, we will cultivate a community of innovators and lifelong learners who are equipped with the tools and mindset to navigate challenges, seize opportunities, and drive positive change.
                                   </Paragraph>
                                {/* {props.configData ? props.configData.map((configItem , index)=>(
                                    <React.Fragment key={index}>
                                        {configItem.key === "home_page_fb_title" && <Paragraph className='paragraph_black'>{configItem.value}</Paragraph>}
                                        {configItem.key === "home_page_fb_description" && <Paragraph className='description_black'>{configItem.value}</Paragraph>}    
                                    </React.Fragment>
                                )):''} */}
                                <Button 
                                    to={"/community/newsfeed"} 
                                    className='btn button-outLine btn-bg-white'
                                    tagType='link'>Explore Courses</Button>
                            </div>
                        </div>
                        {/* {props.configData ? props.configData.map((configItem , index)=>(
                            <React.Fragment key={index}>
                                {configItem.key === "home_page_fb_image" && 
                                    <div className="col-md-6 col-lg-8 col-sm-12 col-xs-6 border-right img_block">
                                        <Media type="img"
                                            className="image-box w-100"
                                            src={configItem.value}
                                            alt="Our OZ Vision"
                                        />
                                    </div>
                                }
                            </React.Fragment>  
                        )):''} */}
                            <div className="col-md-6 col-lg-8 col-sm-12 col-xs-6 border-right img_block">
                                        <Media type="img"
                                            className="image-box w-100"
                                            src={Course}
                                            alt="Our OZ Vision"
                                        />
                                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default React.memo(OZKnowledge) ;
