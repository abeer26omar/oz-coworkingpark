import React from "react";
import Paragraph from "../UI/Paragraph";
import Button from '../UI/Button';
import AmenitiesList from "./AmenitiesList";
import './OZAmenities.css';
const OZAmenities = (props) => {
    return (
        <>
            <section className="membership-types">
                <div className="container-fluid">
                    <div className="row">                
                        <div className="col-lg-12">
                            <div className="head-content-sec">
                                <Paragraph className='head_feature'>{'OZ Amenities'}</Paragraph>                              
                            </div> 
                        </div>               
                            {/*  */}
                        <div className="border-of-section">
                            <div className="row p-5 justify-content-between align-items-center">
                                <Paragraph className='paragraph_black'>{'The benefits'}</Paragraph>
                                <Paragraph className='description_black w-75'>{"We offer a wide range of amenities to support our members' personal and professional growth. Our approach focuses on creating a collaborative environment that fosters creativity and innovation. Whether you prefer a quiet workspace or a collaborative area, we have the perfect space for you. With high-speed internet and state-of-the-art facilities, you can stay connected and productive. We also provide well-equipped meeting rooms, workshops, networking and learning opportunities to enhance your skills and expand your professional network."}</Paragraph>
                                {/* {props.configData ? props.configData.map((configItem , index)=>(
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
                                )):''} */}
                            </div>
                                <AmenitiesList />                                 
                            <div className="col-lg-12 text-center py-4">
                            <Button
                                tagType='link' 
                                to={`/membership`} 
                                className="btn button-outLine btn-bg-white">{'explore'}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default React.memo(OZAmenities);
