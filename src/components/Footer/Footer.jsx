import React from "react";
import "./Footer.css";
import logoWhite from "../../assets/images/logoWhite.svg";
import facebookWhite from "../../assets/images/icons/facebookWhite.png";
import twitterWhite from "../../assets/images/icons/twitterWhite.png";
import linkedinWhite from "../../assets/images/icons/insta.png";
import { Link } from "react-router-dom";
import SocialMedia from "../UI/SocialMedia";


const Footer = ({data}) => {

    return (
        <>
        <footer className="footer-section container-fluid">
            <div className="row align-items-center">
                <div className="col-xl-10 col-lg-8 col-md-12">
                    <div className="row align-items-center justify-content-between py-lg-0 py-4">
                        <div className="col-xl-2 col-lg-3 col-md-3">
                            <div className="footer-single-col d-flex justify-content-center">
                                <img
                                    src={logoWhite}
                                    alt="logo"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-xxl-9 col-xl-10 col-lg-9 col-md-9 py-sm-0 py-5">              
                            <div className=''>
                                <div className="d-flex justify-content-center align-items-center flex-wrap">
                                    <Link to='/booking' className="links-footer">Booking</Link>
                                    <Link to='/membership' className="links-footer">Membership</Link>
                                    <Link to='/community' className="links-footer">Community</Link>
                                    <Link to="/community/events" className="links-footer">Events</Link> 
                                    <Link to='/faq' className="links-footer">FAQs</Link>
                                    <Link to='/' className="links-footer">Privacy Policy</Link>
                                    <Link to='/' className="links-footer">Term&conditions</Link>
                                    <Link to='/sitemap' className="links-footer">Site Map</Link>
                                </div> 
                                {/* <div className="col-xl-6 col-lg-12 d-flex justify-content-between align-items-center sm-wrap">
                                </div>  */}
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
                                <SocialMedia footer={true}/>
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
