import React from "react";
import "./Footer.css";
import logoWhite from "../../assets/images/logoWhite.svg";
import facebookWhite from "../../assets/images/icons/facebookWhite.png";
import twitterWhite from "../../assets/images/icons/twitterWhite.png";
import linkedinWhite from "../../assets/images/icons/insta.png";
import Media from "../Media/Media";

const Footer = () => {
    return (
        <>
            {/*// <!-- Start Footer Section -->*/}
            <footer className="footer-section ">
                {/*// <!--footer top start-->*/}
                <div className="footer-top  text-white ">
                    <div className="container-fluid">
                        <div className="row  align-items-center">
                            <div className="col-md-3 col-lg-3 col-sm-12 mb-lg-0">
                                <div className="footer-single-col">
                                    <div className="footer-single-col d-flex justify-content-lg-start ">
                                        <Media
                                            type="img"
                                            src={logoWhite}
                                            alt="logo"
                                            className="img-fluid w-100 "
                                        />
                                    </div>

                                    {/*<span>© 2023, Made with passion by Macber EG</span>*/}
                                </div>
                            </div>
                            <div className="col-md-9 col-lg-9 col-sm-12 mt-md-0 mt-lg-0 ">
                                            <div className="footer-links">                                                <div className=" row  links-derictions">
                                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                    <div className="col-xl-4  col-lg-3 links-derictions">

                                                    <a href="#" target="_blank">
                                                        Booking
                                                    </a>
                                                    <a href="#" target="_blank">
                                                        Membership
                                                    </a>
                                                    <a href="#" target="_blank">
                                                        Community
                                                    </a>
                                                    <a href="#" target="_blank">
                                                        Events
                                                    </a>
                                                    </div>
                                                    <div className="col-xl-5 col-lg-3 links-derictions">

                                                    <a href="#" target="_blank">
                                                        FAQs
                                                    </a>
                                                    <a href="#" target="_blank">
                                                        Privacy Policy
                                                    </a>
                                                    <a href="#" target="_blank">
                                                        Term&conditions
                                                    </a>
                                                    <a href="#" target="_blank">
                                                        Site Map
                                                    </a>
                                                    </div>
                                                     <div className="col-xl-3 col-lg-3 footer-single-col ">
                                            <div className="footer-social">
                                                <div className="d-flex justify-content-center align-items-center ">
                                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                    <svg className="border-footer"
                                                         width="2"
                                                         height="170"
                                                         viewBox="0 0 2 170"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 0L1.00001 170"
                                                            stroke="#BDBDBD"
                                                            stroke-width="1.5"
                                                        />
                                                    </svg>
                                                    <div className="social-links d-flex align-items-center">
                                                        <a href="#" target="_blank">
                                                            <Media
                                                                type="img" src={facebookWhite} alt="facebook"/>
                                                        </a>
                                                        <a href="#" target="_blank">
                                                            <Media
                                                                type="img" src={twitterWhite} alt="twitter"/>
                                                        </a>
                                                        <a href="#" target="_blank">
                                                            <Media
                                                                type="img" src={linkedinWhite} alt="linkedin"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* </div> */}
                                                </div>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!--footer top end-->*/}
            </footer>
            {/*// <!-- End Footer Section -->*/}
        </>
    );
};

export default Footer;
