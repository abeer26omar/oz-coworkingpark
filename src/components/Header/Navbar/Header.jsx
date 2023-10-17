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
import {AiOutlineClose} from 'react-icons/ai';
import {AiOutlineBars} from 'react-icons/ai';
const Header = ({showBlackNav}) => {
    const [Open , SetOpen] = useState(true);
    const [showBasic, setShowBasic] = useState(false);
    const logoImage = showBlackNav ? galleryLogo : logo;
    const userIcon = showBlackNav ? userwhite : userblack;
    const listIcon = showBlackNav ? listWhite : listBlack;
    const [Close , setClose] = useState(true);
    const token = useRouteLoaderData('root');
    console.log(token);
    return (
        <>
            {/* <Navbar className="position-relative" expand="lg" sticky="top">
                <div className="container-fluid">
                    <Link className="navbar-brand " to={"/"}
                          onClick={() => {
                              window.scroll({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                              });
                          }}
                    >
                        <Media type="img" src={logoImage} className="logo " alt={logo}/>
                    </Link>
                    <nav className={ Open ? "d-flex nav-mobile"  : "d-flex nav-mobile block"} id="basic-navbar-nav" show={showBasic.toString()}>
                        <div className=" d-flex ul-mobile">
                            <Link
                            onClick={()=>SetOpen(!Open)}
                                className="nav-link links-margin"
                                to="/booking"
                            >
                                Booking
                            </Link>
                            <Link
                              onClick={()=>SetOpen(!Open)}
                                className="nav-link links-margin "
                                to="/about"
                            >
                                About OZ
                            </Link>

                            <NavLink
                              onClick={()=>SetOpen(!Open)}
                                className="nav-link links-margin"
                                to={"/community"}
                            >
                                Community
                            </NavLink>

                            <NavLink
                              onClick={()=>SetOpen(!Open)}
                                className="nav-link links-margin"
                                to={"/membership"}
                            >
                                Membership
                            </NavLink>
                            <NavLink
                              onClick={()=>SetOpen(!Open)}
                                className="nav-link links-margin"
                                to={"/private"}
                            >
                                Private Event
                            </NavLink>
                        </div>
                    </nav>
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
                                <NavLink
                                onClick={()=>SetOpen(!Open)}
                                    className="nav-link links-margin"
                                    to={"/login"}
                                >
                                    Login
                                </NavLink>
                            </div>
                            <NavLink onClick={()=>SetOpen(!Open)} 
                            to="/profile">
                             <Media type="img" src={userIcon}
                              className="margin-links user-icon"/>
                            </NavLink>
                            <Media type="img" src={listIcon}/>
                            <div className="d-flex justify-content-evenly align-items-center">
                                <svg
                                   className="line-nav"
                                    viewBox="0 0 2 96"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1 0L1 96" stroke="#BDBDBD"/>
                                </svg>
                                <svg
                                    className="circle-nav ms-1"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle opacity="0.5" cx="16" cy="16" r="16" fill="#D0DF00"/>
                                </svg>
                            </div>
                     <button onClick={()=>SetOpen(!Open)} className='icons'>
                    {Open ?  <AiOutlineBars/> : <AiOutlineClose/>}
                    </button>
                        </div>
                </div>
            </Navbar> */}
            <div className="container-fluid py-2 border_bottom">
                <nav className={`navbar navbar-expand-xl justify-content-between`}>
                    <NavLink className="navbar-brand d-block-md me-0 p-0" to={'/'}>
                        <Media type="img" src={logoImage} className="logo" alt={logoImage} width='100%'/>
                    </NavLink>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="nav">
                            <li className="nav-item px-3">
                                <NavLink className={`nav-link px-0`} 
                                // style={({ isActive }) => ({
                                //     color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                                //     borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                                //     fontWeight: isActive ? 800 : 400
                                // })} 
                                to={'/booking'}><span>booking</span></NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className={`nav-link px-0`}
                                // style={({ isActive }) => ({
                                //     color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                                //     borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                                //     fontWeight: isActive ? 800 : 400
                                // })}
                                to={'/about'}><span>about OZ</span></NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className={`nav-link px-0`} 
                                // style={({ isActive }) => ({
                                //     color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                                //     borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                                //     fontWeight: isActive ? 800 : 400
                                // })}
                                to={'/community'}><span>community</span></NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className={`nav-link px-0`} 
                                // style={({ isActive }) => ({
                                //     color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                                //     borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                                //     fontWeight: isActive ? 800 : 400
                                // })}
                                to={'/membership'}><span>membership</span></NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className={`nav-link px-0`} 
                                // style={({ isActive }) => ({
                                //     color: isActive ? `${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : `${isStrickyFixed ? '#000000' : '#F4F7FE'}`,
                                //     borderBottom: isActive ? `2px solid ${isStrickyFixed ? '#2C60F2' : '#69DEEF'}` : 'none',
                                //     fontWeight: isActive ? 800 : 400
                                // })}
                                to={'/private'}><span>private events</span></NavLink>
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
                        <Media type="img" src={listIcon}/>
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
