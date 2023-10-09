import React from "react";
import "./Footer.css";
import logoWhite from "../../assets/images/logoWhite.svg";
import facebookWhite from "../../assets/images/icons/facebookWhite.png";
import twitterWhite from "../../assets/images/icons/twitterWhite.png";
import linkedinWhite from "../../assets/images/icons/insta.png";
import Media from "../Media/Media";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer-section container-fluid">
               <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-12">
                     <div className="footer-single-col footer-social d-flex justify-content-center ">
                         <Media
                             type="img"
                             src={logoWhite}
                             alt="logo"
                             className="img-fluid w-100 "
                         />
                     </div>
                  </div>
                     <div className="col-xl-8 col-lg-8 col-md-12">              
                       <div className="row  ">
                         <div className="col-xl-6 col-lg-6  col-md-12 col-sm-12   ">
                           <ul className="links-booking  p-0 m-0">
                             <Link to='/booking' className="links-footer">Booking</Link>
                             <Link to='/membership' className="links-footer">Membership</Link>
                             <Link to='/community' className="links-footer">  Community </Link>
                             <Link to="/community/events" className="links-footer"> Events</Link>
                           </ul>
                         </div>                                                                                          
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12  ">
                            <ul className=" links-booking p-0 m-0">
                             <Link to='/' className="links-footer">FAQs  </Link>
                             <Link to='/' className="links-footer" > Privacy Policy</Link>
                             <Link to='/' className="links-footer" >Term&conditions</Link>
                             <Link to='/' className="links-footer" >Site Map</Link>
                            </ul>
                          </div>                                      
                       </div>                   
                     </div>
                       <div className="col-xl-2 col-lg-2 col-md-12">
                          <div className="footer-social">
                              <div className="d-flex justify-content-center align-items-center ">                                                 
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
                                         <a className="media-link" href="#" target="_blank">
                                             <Media
                                                 type="img" src={facebookWhite} alt="facebook"/>
                                         </a>
                                         <a className="media-link" href="#" target="_blank">
                                             <Media
                                                 type="img" src={twitterWhite} alt="twitter"/>
                                         </a>
                                         <a className="media-link" href="#" target="_blank">
                                             <Media
                                                 type="img" src={linkedinWhite} alt="linkedin"/>
                                         </a>
                                     </div>
                              </div>
                          </div>
                       </div>
                 </div>              
            </footer>           
        </>
    );
};

export default Footer;
