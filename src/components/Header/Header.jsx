import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.svg';
import loginIcon from '../../assets/images/icons/loginIcon.png';

import {NavLink} from "react-router-dom";
import {Nav} from "react-bootstrap";
const Header = () => {
    return (
        <>
        <Nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <NavLink className="navbar-brand" target="_blank" to="#">
                    <img src={logo} className="w-75" alt={logo}/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                               className="nav-link active" >About OZ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#' : '#',
                            })} className="nav-link" to={"/"}>Venues</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                              className="nav-link">Community</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#ffc107' : '#818181',
                            })} className="nav-link" to={"/membership"}>Membership</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link">F & B</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" >Events</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#ffc107' : '#818181',
                        })} className="nav-link navbar-text mx-4" to={"/contactus"}>inquire</NavLink>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#ffc107' : '#818181',
                        })} className="nav-link m-auto" to={"/"}>Login <img src={loginIcon}/></NavLink>
                    </div>
                </div>
            </div>
        </Nav>
        </>
    );
};

export default Header;
