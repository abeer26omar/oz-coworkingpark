import {useState, useEffect} from 'react';
import './Partners.css';
import Slider from "react-slick";
import Media from "../Media/Media";
import axios from "axios";

const Partners = () => {
    const [partners, setpartners] = useState([]);
    useEffect(()=>{
        const getPartners = async ()=>{
            try{
                const config = {
                    method: 'get',
                    url: `${process.env.REACT_APP_API_CONFIG_URL}/api/partners`
                };
                const response = await axios(config);
                console.log(response.data.data);
                setpartners(response.data.data);
            }catch(error){
                console.error(error);
            }
        }
        getPartners();
    },[]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true
    }
    return (
        <>
            <section className="partners p-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head-content">
                                <h3 className="h3-text">Over 100+ Growing With Us</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "40px"}}>
                        <Slider {...settings}>
                            {partners.map((partner, index) => {
                                const {id, name, image} = partner;
                                    return (
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center border-right" key={index}>
                                            <Media
                                                type="img" 
                                                src={image} 
                                                alt={name} 
                                                className="d-flex m-auto"/>
                                        </div>
                                    )
                            })}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Partners;
