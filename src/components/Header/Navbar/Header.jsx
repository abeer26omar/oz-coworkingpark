import React, {useState} from "react";
import "./Header.css";
import logo from "../../../assets/images/logo.svg";
import galleryLogo from "../../../assets/images/logoWhite.svg";
import userblack from '../../../assets/images/icons/userblack.svg';
import userwhite from '../../../assets/images/icons/userwhite.svg';
import listBlack from '../../../assets/images/icons/listBlack.svg';

import listWhite from '../../../assets/images/icons/listWhite.svg';

import {Link, NavLink} from "react-router-dom";
import {Container, Nav} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Media from "../../Media/Media";
import {AiOutlineClose} from 'react-icons/ai';
import {AiOutlineBars} from 'react-icons/ai';
const Header = ({showBlackNav}) => {
    const [showBasic, setShowBasic] = useState(false);
    const logoImage = showBlackNav ? galleryLogo : logo;
    const userIcon = showBlackNav ? userwhite : userblack;
    const listIcon = showBlackNav ? listWhite : listBlack;
    return (
        <>
            <Navbar className="position-relative" expand="lg" sticky="top">
                <Container fluid>
                    <Link className="navbar-brand" to={"/"}
                          onClick={() => {
                              window.scroll({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                              });
                          }}
                    >
                        <Media
                            type="img" src={logoImage} className="w-100" alt={logo}/>

                    </Link>
                    {/* <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => setShowBasic(!showBasic)}
                    /> */}
                    <nav className="d-flex nav-mobile" id="basic-navbar-nav" show={showBasic.toString()}>
                        <div className="m-auto d-flex ul-mobile">
                            <Link
                                className="nav-link links-margin"
                                to="/booking"
                            >
                                Booking
                            </Link>
                            <Link
                                className="nav-link links-margin"
                                to="/about"
                            >
                                About OZ
                            </Link>

                  


                            <NavLink
                                className="nav-link links-margin"
                                to={"/community"}
                            >
                                Community
                            </NavLink>

                            <NavLink
                                className="nav-link links-margin"
                                to={"/membership"}
                            >
                                Membership
                            </NavLink>
                            <NavLink
                                className="nav-link links-margin"
                                to={"/private"}
                            >
                                Private Event
                            </NavLink>
                        </div>
                        <div className="d-flex justify-content-end align-items-center ">
                            <NavLink
                                className="nav-link links-margin"
                                to={"/contactus"}
                            >
                                inquire
                            </NavLink>
                            <NavLink className="nav-link  margin-links">
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
                            </NavLink>
                            <NavLink
                                className="nav-link links-margin"
                                to={"/login"}
                            >
                                Login
                            </NavLink>
                            <NavLink to="/profile"> <Media type="img" src={userIcon}
                                                           className="margin-links user-icon"/>
                            </NavLink>
                            <Media
                                type="img" src={listIcon}/>
                            <div className="sun-border">
                                <svg
                                    style={{margin: "auto 30px"}}
                                    width="2"
                                    height="96"
                                    viewBox="0 0 2 96"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1 0L1 96" stroke="#BDBDBD"/>
                                </svg>
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle opacity="0.5" cx="16" cy="16" r="16" fill="#D0DF00"/>
                                </svg>
                            </div>
                        </div>
                    </nav>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;
