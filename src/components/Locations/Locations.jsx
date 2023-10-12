import React, { useEffect, useState } from 'react';
import './Locations.css';
import Slider from "react-slick";
import LocationsList from "./LocationsList";
import Buttons from "../Buttons/Buttons";
import axios from "axios";
import HeadFeature from '../UI/HeadFeature';
import ParagraphBlack from '../UI/ParagraphBlack';
import DescriptionBlack from '../UI/DescriptionBlack';
const Locations = (props) => {
    const [locations, setLocations] = useState([]);
    const [response, setResponse] = useState('');
    useEffect(()=>{
        const getLocations = async ()=>{
            try{
                const config = {
                    method: 'get',
                    url: `${process.env.REACT_APP_API_CONFIG_URL}/api/locations`
                };
                const response = await axios(config);
                setLocations(response.data.data);
            }catch(error){
                setResponse(error.response.data.message)
            }
        }
        getLocations();
    },[]);
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
                        {props.configData ? props.configData.map((configItem , index)=>(
                                <React.Fragment key={index}> 
                    <div className="row">
                        <div className="col-lg-12">
                            {configItem.key === "home_page_location_title" && 
                             <div className="head-content-sec">
                                <HeadFeature HeadFeature={configItem.value}/>                              
                             </div> }     
                        </div>
                    </div>
                                </React.Fragment>
                            )):''}
                            <div className="row border-of-section">
                                <div className="col-md-4 col-12 m-auto ">
                                    <div className="box-content px-60">
                                    {props.configData.map((configItem, index) => (
                                        <React.Fragment key={index}>
                                            {configItem.key === 'home_page_location_title' && (
                                                 <ParagraphBlack titleBox={configItem.value}/>                                        
                                                 )}
                                            {configItem.key === 'home_page_location_description' && (
                                                 <DescriptionBlack descBlack={configItem.value}/>    
                                                )}                                   
                                        </React.Fragment>
                                    ))}
                                        <Buttons
                                            tagType='link' 
                                            className="btn button-outLine btn-bg-white"
                                            to={'/houses'}>our houses</Buttons>
                                    </div>
                                </div>
                                <div className="col-md-8 col-12 border-left ">
                                    <Slider {...settings}>
                                        {locations.length !== 0 && locations.map((location, index) => {
                                            const {id, address, main_image, title} = location;
                                            return (
                                                <div key={index}>
                                                    <LocationsList id={id} address={address} img={main_image} title={title}/>
                                                </div>
                                            )
                                        })}
                                    </Slider>
                                    {locations.length === 0 && <p className=''>theres is no partners yet!!</p>}
                                    {response !== '' && <p className={`mt-2 mb-0`}>{response}</p>}
                                </div>
                            </div>
                </div>
            </section>

        </>
    );
};

export default React.memo( Locations);
