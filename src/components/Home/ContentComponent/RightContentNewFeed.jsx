import React from "react";
import "./Content.css";
import Button from "../../UI/Button";
import Media from "../../Media/Media";
import Paragraph from "../../UI/Paragraph";
const RightContentNewFeed = (props) => {
    return (
        <>
            <section className="head-of-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head-content-sec">
                                <Paragraph className='head_feature'>{'News feed'}</Paragraph>                              
                            </div>    
                        </div>
                    </div>
                    <div className="row border-of-section ">
                        {props.configData ? props.configData.map((configItem , index)=>(
                            <React.Fragment key={index}>
                                {configItem.key === "home_page_newsfeed_image" &&
                                    <div className="col-md-6 col-lg-8 col-sm-12 col-xs-6 border-right img_block">
                                        <Media type="img"
                                            className="image-box w-100"
                                            src={configItem.value}
                                            alt="Our OZ Vision"
                                        />
                                    </div>
                                }
                            </React.Fragment>  
                        )):''}
                        <div className="col-md-6 col-lg-4 col-sm-12 col-xs-6 m-auto">
                            <div className="box-content px-4">
                                {props.configData ? props.configData.map((configItem , index)=>(
                                    <React.Fragment key={index}>
                                        {configItem.key === "home_page_newsfeed_title" &&  <Paragraph className='paragraph_black'>{configItem.value}</Paragraph>}
                                        {configItem.key === "home_page_newsfeed_description" && <Paragraph className='description_black'>{configItem.value}</Paragraph>}
                                    </React.Fragment>
                                )):''}
                                <Button tagType='link' className='btn_outline_black'>Our Vision</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default React.memo(RightContentNewFeed);
