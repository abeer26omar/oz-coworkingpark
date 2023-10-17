import React from "react";
import "./Footer.css";
import logoWhite from "../../assets/images/logoWhite.svg";
import facebookWhite from "../../assets/images/icons/facebookWhite.png";
import twitterWhite from "../../assets/images/icons/twitterWhite.png";
import linkedinWhite from "../../assets/images/icons/insta.png";
import Media from "../Media/Media";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";

 const config = async(page_name)=>{
 
    try{
        const config = {
            method: 'get',
            url: `${process.env.REACT_APP_API_CONFIG_URL}/api/config?page=${page_name}`
        };
       const response = await axios(config)
            return response.data.data;
    
    }catch(error){
        console.error(error);
    }


}
const Footer = () => {
    const [data , setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        config('social').then(res =>{
            setData(res)
            setLoading(false)
         
        })
        .catch(err =>{
            setError(err)
            setLoading(false)
        })
    },[]);
    return (
        <>
        <footer className="footer-section container-fluid">
            <div className="row align-items-center">
                <div className="col-xl-10 col-lg-8 col-md-12">
                    <div className="row align-items-center justify-content-between py-lg-0 py-4">
                        <div className="col-xl-2 col-lg-3 col-md-3">
                            <div className="footer-single-col d-flex justify-content-center">
                                <Media
                                    type="img"
                                    src={logoWhite}
                                    alt="logo"
                                    className="img-fluid w-100"
                                />
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-10 col-lg-9 col-md-9 py-sm-0 py-5">              
                            <div className="row g-3">
                                <div className="col-xl-6 col-lg-12 d-flex justify-content-between align-items-center sm-wrap">
                                    <Link to='/booking' className="links-footer">Booking</Link>
                                    <Link to='/membership' className="links-footer">Membership</Link>
                                    <Link to='/community' className="links-footer">Community</Link>
                                    <Link to="/community/events" className="links-footer">Events</Link> 
                                </div> 
                                <div className="col-xl-6 col-lg-12 d-flex justify-content-between align-items-center sm-wrap">
                                    <Link to='/' className="links-footer">FAQs</Link>
                                    <Link to='/' className="links-footer">Privacy Policy</Link>
                                    <Link to='/' className="links-footer">Term&conditions</Link>
                                    <Link to='/' className="links-footer">Site Map</Link>
                                </div> 
                            </div>                   
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-12">
                    <div className="footer-social">
                        <div className="d-flex justify-content-center align-items-center ">  
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="170" viewBox="0 0 2 170" fill="none">
                                <path d="M1 0L1.00001 170" stroke="#BDBDBD" stroke-width="1.5"/>
                            </svg>
                            <div className="social-links d-flex align-items-center">
                        {data.map((configItem , index)=>(
                            <React.Fragment key={index}>
                                {configItem.key === "facebook_url" && 
                                   <a className="media-link" href={configItem.value} target="_blank">
                                    <Media
                                        type="img" 
                                        src={ facebookWhite} 
                                        alt="facebook"
                                    />
                                </a>
                                }
                                {configItem.key === "instagram_url" &&
                                <a className="media-link" href={configItem.value} target="_blank">
                                    <Media
                                        type="img" 
                                         src={twitterWhite} 
                                        alt="twitter"
                                    />
                                </a>
                                }
                                     { configItem.key === "twitter_url" &&
                                      <a className="media-link" href={configItem.value} target="_blank">
                                            <Media
                                                type="img" 
                                                src={linkedinWhite} 
                                                alt="linkedin"
                                            />
                                       </a>
                                       }
                            </React.Fragment>
                        ))}                                               
                             
                             </div>
                              </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default React.memo(Footer) ;
