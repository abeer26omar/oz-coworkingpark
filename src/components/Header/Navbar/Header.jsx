import React, { useState } from "react";
import "./Header.css";
import logo from "../../../assets/images/logo.svg";

import { NavLink } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <NavLink className="navbar-brand" target="_blank" to={"/"}>
            <img src={logo} className="w-100" alt={logo} />
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setShowBasic(!showBasic)}
          />
          <Navbar.Collapse id="basic-navbar-nav" show={showBasic.toString()}>
            <Nav className="m-auto">
              <NavLink
                className={`nav-link links-margin ${
                  activeLink === "book" ? "active" : ""
                }`}
                to={"/"}
                onClick={() => setActiveLink("book")}
              >
                Booking
              </NavLink>
              <NavLink
                className={`nav-link links-margin ${
                  activeLink === "about" ? "active" : ""
                }`}
                to={"/"}
                onClick={() => setActiveLink("about")}
                to={"/"}
              >
                About OZ
              </NavLink>

              <NavLink
                className={`nav-link links-margin ${
                  activeLink === "community" ? "active" : ""
                }`}
                to={"/community"}
                onClick={() => setActiveLink("community")}
              >
                Community
              </NavLink>

              <NavLink
                className={`nav-link links-margin ${
                  activeLink === "membership" ? "active" : ""
                }`}
                to={"/membership"}
                onClick={() => setActiveLink("membership")}
              >
                Membership
              </NavLink>
              <NavLink
                className={`nav-link links-margin ${
                  activeLink === "events" ? "active" : ""
                }`}
                to={"/"}
                onClick={() => setActiveLink("events")}
              >
                Events
              </NavLink>
            </Nav>
            <div className="d-flex justify-content-end align-items-center ">
              <NavLink
                className={`nav-link links-margin ${
                  activeLink === "inquire" ? "active" : ""
                }`}
                to={"/contactus"}
                onClick={() => setActiveLink("inquire")}
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
                className={`nav-link links-margin ${
                  activeLink === "login" ? "active" : ""
                }`}
                to={"/login"}
                onClick={() => setActiveLink("login")}
              >
                Login
              </NavLink>
              <svg
                className="margin-links"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.27148 18.3457C4.27148 18.3457 6.5005 15.5 12.0005 15.5C17.5005 15.5 19.7296 18.3457 19.7296 18.3457"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                  stroke="#BDBDBD"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33398 9.3335L26.6673 9.3335"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  opacity="0.6"
                  d="M12 16H26.6667"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  opacity="0.4"
                  d="M20 22.6665H26.6667"
                  stroke="#BDBDBD"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <div className="sun-border">
                <svg
                  style={{ margin: "auto 30px" }}
                  width="2"
                  height="96"
                  viewBox="0 0 2 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0L1 96" stroke="#BDBDBD" />
                </svg>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.5" cx="16" cy="16" r="16" fill="#D0DF00" />
                </svg>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*Navigator bar*/}
      {/*{activeLink && (*/}
      {/*<Navbar expand="lg" className="bg-body-tertiary navigator">*/}
      {/*    <Container fluid>*/}
      {/*        <Navbar.Brand className="title-name" href="#home">*/}
      {/*            {activeLink === "community" && "Community"}*/}
      {/*        </Navbar.Brand>*/}
      {/*        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="127" viewBox="0 0 2 127" fill="none">*/}
      {/*            <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5"/>*/}
      {/*        </svg>*/}
      {/*        <Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
      {/*        <Navbar.Collapse id="basic-navbar-nav">*/}
      {/*            <Nav className="ms-auto">*/}
      {/*                {activeLink === "community" && (*/}
      {/*                    <>*/}
      {/*                        <NavLink className="nav-link links-margin" to={"/"}>*/}
      {/*                            News Feed*/}
      {/*                        </NavLink>*/}
      {/*                        <NavLink className="nav-link links-margin" to={"/"}>*/}
      {/*                            PublicEvents*/}
      {/*                        </NavLink>*/}
      {/*                        <NavLink className="nav-link links-margin" to={"/"}>*/}
      {/*                            Gallery*/}
      {/*                        </NavLink>*/}
      {/*                    </>*/}
      {/*                )}*/}

      {/*            </Nav>*/}
      {/*        </Navbar.Collapse>*/}
      {/*    </Container>*/}
      {/*</Navbar>*/}
      {/*    )}*/}

      {activeLink === "community" && (
        <Navbar expand="lg" className="bg-body-tertiary navigator">
          <Container fluid>
            <Navbar.Brand className="title-name" href="#home">
              {activeLink === "community" && "Community"}
            </Navbar.Brand>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="127"
              viewBox="0 0 2 127"
              fill="none"
            >
              <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5" />
            </svg>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <>
                  <NavLink className="nav-link links-margin" to={"/"}>
                    News Feed
                  </NavLink>
                  <NavLink className="nav-link links-margin" to={"/"}>
                    Events
                  </NavLink>
                  <NavLink className="nav-link links-margin" to={"/"}>
                    Gallery
                  </NavLink>
                </>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Header;
