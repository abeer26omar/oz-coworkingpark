import React, { useState } from 'react';
import Slider from "react-slick";
import Buttons from "../UI/Button";
import Paragraph from '../UI/Paragraph';
import LocationsList from '../Locations/LocationsList';
import {locationsData} from '../../Data/LocationsData';
const OurSpaces = ()=>{
    const [spaces, setSpaces] = useState(locationsData)
    const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    cssEase: "linear",
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    lazyLoad: true
    }
        return (
            <>
                <section className="locations">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="head-content-sec">
                                    <Paragraph className='head_feature'>{'Our Spaces'}</Paragraph>                              
                                </div>
                            </div>
                        </div>
                        <div className="row border-of-section">
                            <div className="col-md-4 col-12 m-auto ">
                                <div className="box-content px-60">
                                    <Paragraph className='paragraph_black'>{'co-working'}</Paragraph>
                                    <Paragraph className='description_black'>{"Within OZ, you'll discover a wide range of workspaces designed with your preferences in mind. Whether you prefer a flexible spot amidst a bustling community, a dedicated space to call your own, or step into a quiet and personalised environment inside your very own private studio. We have the perfect workspace for you all within the stimulating backdrop of a vibrant community of like-minded professionals."}</Paragraph>                                            
                                    {/* {props.configData ? props.configData.map((configItem, index) => (
                                        <React.Fragment key={index}>
                                            {configItem.key === 'home_page_location_title' && (
                                                <Paragraph className='paragraph_black'>{configItem.value}</Paragraph>                                        
                                            )}
                                            {configItem.key === 'home_page_location_description' && (
                                                <Paragraph className='description_black'>{configItem.value}</Paragraph>    
                                            )}                                   
                                        </React.Fragment>
                                    )): ''} */}
                                        <Buttons
                                            tagType='link' 
                                            className="btn button-outLine btn-bg-white"
                                            to={'/'}>Explore</Buttons>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-12 border-left ">
                                        <Slider {...settings}>
                                            {spaces.length !== 0 && spaces.map((location, index) => {
                                                const {id, address, img, title} = location;
                                                return (
                                                    <div key={index}>
                                                        <LocationsList 
                                                            id={id} 
                                                            address={address} 
                                                            img={img} 
                                                            title={title} 
                                                            addAddress={false}/>
                                                    </div>
                                                )
                                            })}
                                        </Slider>
                                        {/* {spaces.length === 0 && <p className=''>theres is no partners yet!!</p>} */}
                                        {/* {response !== '' && <p className={`mt-2 mb-0`}>{response}</p>} */}
                                    </div>
                                </div>
                    </div>
                </section>
            </>
        );
    };
export default OurSpaces;