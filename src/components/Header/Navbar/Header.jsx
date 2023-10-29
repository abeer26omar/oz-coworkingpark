import React, {useState} from "react";
import "./Header.css";
import logo from "../../../assets/images/logo.svg";
import galleryLogo from "../../../assets/images/logoWhite.svg";
import userblack from '../../../assets/images/icons/userblack.svg';
import userwhite from '../../../assets/images/icons/userwhite.svg';
import listBlack from '../../../assets/images/icons/listBlack.svg';
import listWhite from '../../../assets/images/icons/listWhite.svg';
import {Link, NavLink, useRouteLoaderData} from "react-router-dom";
import {Container, Nav} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Media from "../../Media/Media";
import close from '../../../assets/images/close.svg'
import twitter from '../../../assets/images/icons/twitter_nav.svg'
import facebook from '../../../assets/images/icons/face_nav.svg'
import instagram from '../../../assets/images/icons/insta_nav.svg'

// import {AiOutlineClose} from 'react-icons/ai';
// import {AiOutlineBars} from 'react-icons/ai';
const Header = ({showBlackNav}) => {
    const [Open , SetOpen] = useState(true);
    const [OpenUser , SetOpenUser] = useState(true);
    const [showBasic, setShowBasic] = useState(false);
    const logoImage = showBlackNav ? galleryLogo : logo;
    const userIcon = showBlackNav ? userwhite : userblack;
    const listIcon = showBlackNav ? listWhite : listBlack;
    const [Close , setClose] = useState(true);
    const token = useRouteLoaderData('root');
    // console.log(token);
    return (
        <>
            <div className="container-fluid py-2 border_bottom main_header">
                <nav className={`navbar navbar-expand-xl justify-content-between`}>
                    <NavLink className="navbar-brand d-block-md me-0 p-0" to={'/'}>
                        <Media type="img" src={logoImage} className="logo" alt={logoImage} width='100%'/>
                    </NavLink>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="nav">
                            <li className="nav-item px-3  dropdown">
                                <NavLink className={`nav-link px-0`} 
                                // style={({ isActive }) => ({
                                //     color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                                //     borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                                //     fontWeight: isActive ? 800 : 400
                                // })} 
                                to={'/booking'}><span>booking</span></NavLink>
                                  <ul class="dropdown-nav">
				                	<li className="drop_event">MR</li>
				                	<li className="drop_event"> Spaces</li>
					                <li className="drop_event">Office </li>
			                	</ul>
                            </li>
                            <li className="nav-item px-3  dropdown">
                                <NavLink className={`nav-link px-0`} 
                                // style={({ isActive }) => ({
                                //     color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                                //     borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                                //     fontWeight: isActive ? 800 : 400
                                // })}
                                to={'/membership'}><span>membership</span></NavLink>
                                 <ul class="dropdown-nav">
				                	<li className="drop_event"> The Social</li>
				                	<li className="drop_event"> The Native</li>
					                <li className="drop_event"> The Studio </li>
					                <li className="drop_event"> Virtual </li>
			                	</ul>
                            </li>
                            <li className="nav-item px-3 dropdown">
                                <NavLink className={`nav-link px-0`} 
                                // style={({ isActive }) => ({
                                //     color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                                //     borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                                //     fontWeight: isActive ? 800 : 400
                                // })}
                                to={'/private'}><span>private events</span></NavLink>
                            </li>
                            
                            <li className="nav-item px-3 dropdown">
                                <NavLink className={`nav-link px-0`} 
                                // style={({ isActive }) => ({
                                //     color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                                //     borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                                //     fontWeight: isActive ? 800 : 400
                                // })}
                                to={'/community'}><span>community</span></NavLink>
                                 <ul class="dropdown-nav">
				                	<li className="drop_event"> Community Newsfeed</li>
				                	<li className="drop_event"> Community Events</li>
					                <li className="drop_event"> Gallery </li>

			                	</ul>
                            </li>
                            <li className="nav-item px-3 dropdown">
                                <NavLink className={`nav-link px-0`}
                                // style={({ isActive }) => ({
                                //     color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                                //     borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                                //     fontWeight: isActive ? 800 : 400
                                // })}
                                to={'/about'}><span>events</span></NavLink>
                                <ul class="dropdown-nav">
				                	<li className="drop_event"> Previous Events</li>
					                <li className="drop_event"> Upcoming Events </li>
			                	</ul>
                            </li>
                            
                        </ul>
                        
                    </div>
                    <div className="d-flex justify-content-end align-items-center ">
                        <div className="d-flex justify-content-between">
                            <NavLink
                                onClick={()=>SetOpen(!Open)}
                                    className="nav-link links-margin"
                                    to={"/contactus"}
                                >
                                    inquire
                            </NavLink>
                                <svg
                                        width="2"
                                        height="34"
                                        viewBox="0 0 2 34"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 0L0.999999 34"
                                            stroke="black"
                                            stroke-width="0.5"
                                            className="log-border  "
                                        />
                                </svg>
                            {!token && (<NavLink
                                onClick={()=>SetOpen(!Open)}
                                    className="nav-link links-margin"
                                    to={"/login"}
                                >
                                    Login
                            </NavLink>)}
                        </div>
                        {token && (<NavLink onClick={()=>SetOpen(!Open)} 
                            to="/profile">
                             <Media type="img" src={userIcon}
                              className="margin-links user-icon"/>
                        </NavLink>)}
                        <li onClick={()=>SetOpenUser(!OpenUser)} className="dropdown"
                        >
                        <img type="img" src={listIcon}/>
                         <ul className={OpenUser ? 'dropdown-nav-user': 'dropdown-nav-user hide'}>
                                    <div className="close-drop border-dropdown"> 
                                        <p className="drop_event m-0">close</p>
                                        <img onClick={()=>SetOpenUser(!OpenUser)}  src={close}/>
                                    </div>
				                	<li className="drop_event border-dropdown">Explore</li>
				                	<li className="drop_event border-dropdown"> About OZ</li>
					                <li className="drop_event border-dropdown">Report an issue</li>
				                	<li className="drop_event border-dropdown">Favorite</li>
				                	<li className="drop_event border-dropdown"> Rewards</li>
					                <li className="drop_event border-dropdown">Al-sheikh Zayed</li>
					                <li className="drop_event border-dropdown">Talent Market</li>
                                    <div className="dropdown-socail">
                                        <img alt="facebook" src={facebook}/>
                                        <img alt="instagram" src={instagram}/>
                                     <img alt="twitter" src={twitter}/>
                                     </div>			                	
			             </ul>

                        </li>
                        <div className="d-flex justify-content-evenly align-items-center dis-none">
                            <svg
                                className="line-nav"
                                viewBox="0 0 2 96"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1 0L1 96" stroke="#BDBDBD"/>
                            </svg>
                            <svg
                                className="circle-nav mx-sm-3 mx-1"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle opacity="0.5" cx="16" cy="16" r="16" fill="#D0DF00"/>
                            </svg>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};
export default React.memo(Header);
