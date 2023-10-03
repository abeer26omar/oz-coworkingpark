import { useEffect, useState} from 'react';
import './Locations.css'
import Slider from "react-slick";
import LocationsList from "./LocationsList";
import {locationsData} from "../../Data/LocationsData";
import Buttons from "../Buttons/Buttons";
import axios from "axios";

const Locations = () => {
    const [locations, setLocations] = useState([]);
    useEffect(()=>{
        const getLocations = async ()=>{
            try{
                const config = {
                    method: 'get',
                    url: `${process.env.REACT_APP_API_CONFIG_URL}/api/locations`
                };
                const response = await axios(config);
                console.log(response.data.data);
                setLocations(response.data.data);
            }catch(error){
                console.error(error);
            }
        }
        getLocations();
    },[]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        // adaptiveHeight: true,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true
    }
    return (
        <>
            <section className="locations ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head-content-sec">
                                <h2 className="h2-text">Explore Houses</h2>

                            </div>

                        </div>
                    </div>
                    {locations.map((location)=>{
                        return (
                            <div className="row border-of-section">
                                <div className="col-md-6 col-lg-4 col-sm-4 col-xs-6 m-auto ">
                                    <div className="box-content px-60">
                                        <h2 className="h2-text-box">{location.title}</h2>
                                        <p className="p-text-box">{location.description}</p>
                                        <Buttons
                                            href="/houses" className="btn button-outLine btn-bg-white">Explore</Buttons>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-8 col-sm-8 col-xs-6  border-left ">
                                    <Slider {...settings}>
                                        {locationsData.map((location, index) => {
                                            const {id, address, img} = location;
                                            return (
                                                <div key={index}>
                                                    <LocationsList id={id} address={address} img={img}/>
                                                </div>
                                            )
                                        })}
                                    </Slider>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </section>

        </>
    );
};

export default Locations;
