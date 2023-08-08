import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";
import './NavigatorBar.css';
const NavigatorBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator">
                <Container fluid>
                    <Navbar.Brand className="title-name" href="#home">Community</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="nav-link links-margin" to={"/"}>News Feed</NavLink>
                            <NavLink className="nav-link links-margin" to={"/"}>Events</NavLink>
                            <NavLink className="nav-link links-margin" to={"/"}>Gallery</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigatorBar;
