import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const MembershipHeader = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator">
                <Container fluid>
                    <Navbar.Brand className="title-name" href="#home">
                        Membership
                    </Navbar.Brand>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="127"
                        viewBox="0 0 2 127"
                        fill="none"
                    >
                        <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5"/>
                    </svg>
                    <Nav className="ms-auto nav-head">
                        <>
                            <NavLink
                                to={"/contactus"}
                                className="btn button-outLine btn-bg-white"
                            >
                                inquire
                            </NavLink>

                        </>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default MembershipHeader;
