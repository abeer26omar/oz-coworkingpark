import React, { useState, useContext, useEffect } from "react";
import "./Header.css";
import logo from "../../../assets/images/logo.svg";
import galleryLogo from "../../../assets/images/logoWhite.svg";
import { NavLink } from "react-router-dom";
import LogedNav from "./LogedNav";
import LoginNav from "./LoginNav";
import { AuthContext } from '../../../apis/context/AuthTokenContext';
import Button from '../../UI/Button';
import { getBranches } from '../../../apis/config';
import SocialMedia from "../../UI/SocialMedia";

const Header = ({showBlackNav}) => {

    const logoImage = showBlackNav ? galleryLogo : logo;
    const [exploreBranches, setExploreBranches] = useState(true);
    const [explore , setexplore] = useState(true);
    const [openSideMenu , SetOpenSideMenu] = useState(true);
    const [branches, setBranches] = useState([]);
    const { token } = useContext(AuthContext);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        getBranches(token, signal).then(res=>{
            setBranches(res);
        }).catch(err=>{console.log(err)});
        
        return ()=>controller.abort();
    },[token]);

    return (
        <>
            <div className="container-fluid py-2 border_bottom main_header">
                <nav className={`navbar navbar-expand-xl justify-content-between`}>
                    <NavLink className="navbar-brand d-block-md me-0 p-0" to={'/'}>
                        <img type="img" src={logoImage} className="logo" alt={logoImage} width='100%'/>
                    </NavLink>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="nav">
                            <li className="nav-item px-3  dropdown">
                                <NavLink className={`nav-link px-0`} 
                                style={({ isActive }) => ({
                                    borderBottom: isActive ? `2px solid black` : 'none',
                                })} 
                                to={'/booking'}><span>booking</span></NavLink>
                                <ul class="dropdown-nav">
				                	<li className="drop_event">MR</li>
				                	<li className="drop_event"> Spaces</li>
					                <li className="drop_event">Office </li>
			                	</ul>
                            </li>
                            <li className="nav-item px-3  dropdown">
                                <NavLink className={`nav-link px-0`} 
                                style={({ isActive }) => ({
                                    borderBottom: isActive ? `2px solid black` : 'none',
                                })}
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
                                style={({ isActive }) => ({
                                    borderBottom: isActive ? `2px solid black` : 'none',
                                })}
                                to={'/private'}><span>private events</span></NavLink>
                            </li>
                            
                            <li className="nav-item px-3 dropdown">
                                <NavLink className={`nav-link px-0`} 
                                style={({ isActive }) => ({
                                    borderBottom: isActive ? `2px solid black` : 'none',
                                })}
                                to={'/community'}><span>community</span></NavLink>
                                <ul class="dropdown-nav">
				                	<li className="drop_event"> 
                                        <Button tagType='link' className='p-0' to={'/community/newsfeed'}>
                                            Community Newsfeed
                                        </Button>
                                    </li>
				                	<li className="drop_event">
                                        <Button tagType='link' className='p-0' to={'/community/events'}>
                                            Community Events
                                        </Button>
                                    </li>
					                <li className="drop_event"> 
                                        <Button tagType='link' className='p-0' to={'/community/galleryshow'}>
                                            Gallery
                                        </Button>
                                    </li>

			                	</ul>
                            </li>
                            <li className="nav-item px-3 dropdown">
                                <NavLink className={`nav-link px-0`}
                                style={({ isActive }) => ({
                                    borderBottom: isActive ? `2px solid black` : 'none',
                                })}
                                to={'/'}><span>events</span></NavLink>
                                <ul class="dropdown-nav">
				                	<li className="drop_event"> Previous Events</li>
					                <li className="drop_event"> Upcoming Events </li>
			                	</ul>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-end align-items-center ">
                        {!token && (<LoginNav />)}
                        {token && (<LogedNav showBlackNav={showBlackNav} token={token}/>)}
                        <div class="dropdown position-relative">
                            <a role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M5.33398 9.33301L26.6673 9.33301" stroke={showBlackNav ? 'white' : 'black'} stroke-width="1.5" stroke-linecap="round"/>
                                    <path opacity="0.6" d="M12 16H26.6667" stroke={showBlackNav ? 'white' : 'black'} stroke-width="1.5" stroke-linecap="round"/>
                                    <path opacity="0.4" d="M20 22.667H26.6667" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </a>
                            <ul class="dropdown-menu dropdown-nav-user" aria-labelledby="dropdownMenuLink">
                                <div className="close-drop border-dropdown p-3">
                                    <Button 
                                        tagType='link' 
                                        className={'p-0 drop_event'}
                                        onClick={(e)=>{
                                            e.preventDefault();
                                            SetOpenSideMenu(!openSideMenu)
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.21967 12.7197C1.92678 13.0126 1.92678 13.4874 2.21967 13.7803C2.51256 14.0732 2.98744 14.0732 3.28033 13.7803L8 9.06066L12.7197 13.7803C13.0126 14.0732 13.4874 14.0732 13.7803 13.7803C14.0732 13.4874 14.0732 13.0126 13.7803 12.7197L9.06066 8L13.7803 3.28033C14.0732 2.98744 14.0732 2.51256 13.7803 2.21967C13.4874 1.92678 13.0126 1.92678 12.7197 2.21967L8 6.93934L3.28033 2.21967C2.98744 1.92678 2.51256 1.92678 2.21967 2.21967C1.92678 2.51256 1.92678 2.98744 2.21967 3.28033L6.93934 8L2.21967 12.7197Z" fill="black"/>
                                            </svg>
                                            close
                                    </Button>
                                </div>
                                    <li 
                                        onClick={(e)=>{
                                            e.stopPropagation()
                                            setexplore(!explore)
                                        }} 
                                        className="drop_event border-dropdown" 
                                        id="explore">
                                            Explore
                                            <svg className={`mx-2 up_down ${explore ? '' : 'up'}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 5L5 1L1 5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <ul className={`dropdown-explore ${explore ? '' :'show-ex'}`}>
                                                <li>
                                                    <Button 
                                                        className='p-0'
                                                        tagType='link'>Membership</Button>
                                                </li>
                                                <li>
                                                    <Button 
                                                        className='p-0'
                                                        tagType='link'>Spaces</Button></li>                                        
                                            </ul>
                                    </li>
                                        <li className="drop_event border-dropdown"><Button 
                                            className='p-0' tagType='link' to={'/about'}>About OZ</Button></li>
                                        <li className="drop_event border-dropdown"><Button 
                                            className='p-0' tagType='link' to={'/talentmarket'}>Talent Market</Button> </li>
                                        <li className="drop_event border-dropdown"><Button 
                                            className='p-0' tagType='link'>Get Direction</Button> </li> 
                                        <li className="drop_event border-dropdown"><Button 
                                            className='p-0' tagType='link'>Contact Admin</Button></li> 
                                        <li className="drop_event border-dropdown"><Button 
                                            className='p-0' tagType='link'>Rewards</Button></li>
                                        <li 
                                            onClick={(e)=>{
                                                e.stopPropagation();
                                                // setExploreBranches(!exploreBranches)
                                            }} 
                                            className="drop_event border-dropdown">Al-sheikh Zayed
                                            <svg className={`mx-2 up_down ${exploreBranches ? '' : 'up'}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 5L5 1L1 5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <select class="form-select" aria-label="Default select example">
                                                {branches && branches.map((e, index)=>{
                                                    console.log(e);
                                                    (
                                                        <option value={e.id} key={index}>{e.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </li>
                                        <div className="dropdown-socail p-0">
                                            <SocialMedia />
                                        </div>
                            </ul>
                        </div>
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
                                <circle cx="16" cy="16" r="16" fill="#D0DF00"/>
                            </svg>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};
export default React.memo(Header);
