import React, {useState} from 'react';
import './Header.css';
import logo from '../../assets/images/logo.svg';
import loginIcon from '../../assets/images/icons/loginIcon.png';

import {NavLink} from "react-router-dom";
import {Nav, Container} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
    const [showBasic, setShowBasic] = useState(false);
    return (
        <>
        <Navbar expand="lg">
            <Container fluid >
                <NavLink className="navbar-brand" target="_blank" to="/">
                    <img src={logo} className="w-75" alt={logo}/>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"   onClick={() => setShowBasic(!showBasic)}  />
                <Navbar.Collapse  id="basic-navbar-nav"  show={showBasic.toString()} >
                    <Nav className="m-auto">
                                <NavLink className="nav-link active"  to={"/"}>About OZ</ NavLink>
                                <NavLink className="nav-link" to={"/"}>Venues</ NavLink>
                                <NavLink className="nav-link" to={"/"}>Community</ NavLink>
                                <NavLink   className="nav-link" to={"/membership"}>Membership</ NavLink>
                                <NavLink className="nav-link" to={"/"}>F & B</ NavLink>
                                <NavLink  className="nav-link" to={"/"} >Events</ NavLink>

                    </Nav>
                    <div className="d-flex justify-content-end">
                        <NavLink className="nav-link navbar-text mx-4" to={"/contactus"}>inquire</ NavLink>
                        <NavLink className="nav-link m-auto" to={"/"}>Login<img className="" src={loginIcon} alt="login"/> </ NavLink>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>


            {/*<Navbar.Brand className="w-75">*/}
            {/*    <NavLink className="navbar-brand" target="_blank" to="#">*/}
            {/*        <img src={logo} className="w-75" alt={logo}/>*/}
            {/*    </ NavLink>*/}
            {/*</Navbar.Brand>*/}
            {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
            {/*<Navbar.Collapse id="basic-navbar-nav">*/}
            {/*    <Nav className="me-auto">*/}
            {/*        <NavLink style={({ isActive }) => ({*/}
            {/*            color: isActive ? '#' : '#',*/}
            {/*        })} className="nav-link" to={"/"}>About</NavLink>*/}
            {/*        <NavLink style={({ isActive }) => ({*/}
            {/*            color: isActive ? '#' : '#',*/}
            {/*        })} className="nav-link" to={"/"}>About</NavLink>*/}

            {/*    </Nav>*/}
            {/*</Navbar.Collapse>*/}
        </>
    );
};

export default Header;
