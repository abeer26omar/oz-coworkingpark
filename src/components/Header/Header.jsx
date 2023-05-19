import React, {useState} from 'react';
import './Header.css';
import logo from '../../assets/images/logo.svg';
import loginIcon from '../../assets/images/icons/loginIcon.png';

// import {Nav} from "react-router-dom";
import {Nav, Container} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
    const [showBasic, setShowBasic] = useState(false);
    return (
        <>
        <Navbar expand="lg">
            <Container fluid >
                <Nav.Link className="navbar-brand" target="_blank" to="/">
                    <img src={logo} className="w-75" alt={logo}/>
                </Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"   onClick={() => setShowBasic(!showBasic)}  />
                <Navbar.Collapse  id="basic-navbar-nav"  show={showBasic} >
                    <Nav className="m-auto">
                                <Nav.Link className="nav-link active" >About OZ</ Nav.Link>
                                <Nav.Link className="nav-link" to={"/"}>Venues</ Nav.Link>
                                <Nav.Link className="nav-link">Community</ Nav.Link>
                                <Nav.Link   className="nav-link" to={"/membership"}>Membership</ Nav.Link>
                                <Nav.Link className="nav-link">F & B</ Nav.Link>
                                <Nav.Link  className="nav-link" >Events</ Nav.Link>

                    </Nav>
                    <div className="d-flex justify-content-end">
                        <Nav.Link className="nav-link navbar-text mx-4" to={"/contactus"}>inquire</ Nav.Link>
                        <Nav.Link className="nav-link m-auto" to={"/"}>Login<img className="" src={loginIcon}/> </ Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>


            {/*<Navbar.Brand className="w-75">*/}
            {/*    <Nav.Link className="navbar-brand" target="_blank" to="#">*/}
            {/*        <img src={logo} className="w-75" alt={logo}/>*/}
            {/*    </ Nav.Link>*/}
            {/*</Navbar.Brand>*/}
            {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
            {/*<Navbar.Collapse id="basic-navbar-nav">*/}
            {/*    <Nav className="me-auto">*/}
            {/*        <Nav.Link style={({ isActive }) => ({*/}
            {/*            color: isActive ? '#' : '#',*/}
            {/*        })} className="nav-link" to={"/"}>About</Nav.Link>*/}
            {/*        <Nav.Link style={({ isActive }) => ({*/}
            {/*            color: isActive ? '#' : '#',*/}
            {/*        })} className="nav-link" to={"/"}>About</Nav.Link>*/}

            {/*    </Nav>*/}
            {/*</Navbar.Collapse>*/}
        </>
    );
};

export default Header;
