import React from "react";
import "./Content.css";
import Button from "../../UI/Button";
import Media from "../../Media/Media";
import Paragraph from "../../UI/Paragraph";
const RightContentFB = (props) => {
    return (
        <>
            <section className=" ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                             <div className="head-content-sec">
                                    <Paragraph className='head_feature'>{'F&B'}</Paragraph>                              
                             </div> 
                        </div>
                    </div>
                    <div className="row R-flex border-of-section">
                        <div className="col-md-6 col-lg-4 col-sm-12 col-xs-6 m-auto ">
                            <div className="box-content px-4">
                                {props.configData ? props.configData.map((configItem , index)=>(
                                    <React.Fragment key={index}>
                                        {configItem.key === "home_page_fb_title" && <Paragraph className='paragraph_black'>{configItem.value}</Paragraph>}
                                        {configItem.key === "home_page_fb_description" && <Paragraph className='description_black'>{configItem.value}</Paragraph>}    
                                    </React.Fragment>
                                )):''}
                                <Button 
                                    to={"/community/newsfeed"} 
                                    className='btn button-outLine btn-bg-white'
                                    tagType='link'> Explore</Button>
                            </div>
                        </div>
                        {props.configData ? props.configData.map((configItem , index)=>(
                            <React.Fragment key={index}>
                                {configItem.key === "home_page_fb_image" && 
                                    <div className="col-md-6 col-lg-8 col-sm-12 col-xs-6 border-right">
                                        <Media type="img"
                                            className="image-box w-100"
                                            src={configItem.value}
                                            alt="Our OZ Vision"
                                        />
                                    </div>
                                }
                            </React.Fragment>  
                        )):''}
                    </div>
                </div>
            </section>
        </>
    );
};

export default React.memo(RightContentFB) ;
