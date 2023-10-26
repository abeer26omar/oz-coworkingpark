import React from "react";
// import "./Content.css";
import Button from "../UI/Button";
import Media from "../Media/Media";
import Paragraph from "../UI/Paragraph";
import  Gym from '../../assets/images/gym.png';
const ZeeStudio = (props) => {
    return(
 <>
      <section className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head-content-sec">
                                <Paragraph className='head_feature'>{'Zee Studio'}</Paragraph>                              
                            </div>    
                        </div>
                    </div>
                        <div className="row border-of-section ">
                            <div className="col-md-6 col-lg-4 col-sm-12 col-xs-6 m-auto">
                                <div className="box-content px-4">
                                      <Paragraph className='paragraph_black'>Zee Studio</Paragraph>
                                       <Paragraph className='description_black'>Z Studio is smartly designed to ignite your professionals’ inner athlete, thanks to a state-of-the-art fitness zone and outdoor track that captures an indoor/outdoor philosophy for constant recreation.
The facility is mindfully designed to take in sweeping views of verdant landscapes while inviting long intervals of natural daylight. The Fitness Zone offers a full-host of sessions spanning yoga, pilates, high-intensity training, as well as Cross Fit programs. All offerings and nutrition programs are tailored to individual needs without interrupting work schedules.</Paragraph>
                                    {/* {props.configData ? props.configData.map((configItem , index)=>(
                                        <React.Fragment key={index}>
                                            {configItem.key === "home_page_about_us_title" &&  <Paragraph className='paragraph_black'>{configItem.value}</Paragraph>}
                                            {configItem.key === "home_page_about_us_description" && <Paragraph className='description_black'>{configItem.value}</Paragraph>}
                                        </React.Fragment>
                                    )):''} */}
                                    <Button tagType='link' className='btn_outline_black' to={'/about'}>Explore Studio</Button>
                                </div>
                            </div>
                             <div className="col-md-6 col-lg-8 col-sm-12 col-xs-6 border-left img_block">
                                        <Media type="img"
                                            className="image-box w-100"
                                            src={Gym}
                                            alt="Our OZ Gym"
                                        />
                                    </div>


                            {/* {props.configData ? props.configData.map((configItem , index)=>(
                                <React.Fragment key={index}>
                                {configItem.key === "home_page_about_us_image" &&
                                    <div className="col-md-6 col-lg-8 col-sm-12 col-xs-6 border-left img_block">
                                        <Media type="img"
                                            className="image-box w-100"
                                            src={configItem.value}
                                            alt="Our OZ Vision"
                                        />
                                    </div> }
                            </React.Fragment>  )):''} */}
                  </div>
                </div>
            </section>
        </>
    );
};

export default React.memo(ZeeStudio);
