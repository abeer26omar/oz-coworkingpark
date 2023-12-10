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
import { getListMembershipTypes } from '../../../apis/MembershipApi';
import { getAmenitiesGroup } from '../../../apis/Booking';
import { HashLink } from 'react-router-hash-link';

const Header = ({showBlackNav}) => {

    const logoImage = showBlackNav ? galleryLogo : logo;
    const [explore , setexplore] = useState(true);
    const [openSideMenu , SetOpenSideMenu] = useState(true);
    const [branches, setBranches] = useState([]);
    const [address, setAddress] = useState('');
    const [types, setTypes] = useState([]);
    const [bookingPlaces, setBookingPlaces] = useState([]);
    const { token, handelChangeBranch } = useContext(AuthContext);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        getBranches(token, signal).then(res=>{
            setBranches(res);
            handelChangeBranch(res[0].id);
            setAddress(res[0].name);
        }).catch(err=>{console.log(err)});
        
        return ()=>controller.abort();
    },[token]);

    useEffect(()=>{
        const getMemebershipTypes = async () => {
            try {
                const result = await getListMembershipTypes(token, 'no');
                setTypes(result['individual']);
            }catch (err){console.log(err)}
        }
        getMemebershipTypes();
    },[token]);

    useEffect(()=>{
      
        getAmenitiesGroup(token).then(res=>{
            setBookingPlaces(res);
        }).catch(err=>{});
  
    },[]);

    const setBransh = (id) => {
        handelChangeBranch(id);
        const getName = branches.filter((item) => item.id === id);
        if (getName.length > 0) {
        const name = getName[0].name;
        setAddress(name);
        } else {
        setAddress("");
        }
    };

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
                                    {bookingPlaces && bookingPlaces.map((item,index)=>{
                                        return (
                                            <li className="drop_event" key={index}>
                                                <HashLink 
                                                    key={index} 
                                                    className='pb-3 links' 
                                                    smooth to={`/booking?amenity=${item.name}&id=${item.id}#${item.name}`}>
                                                    {item.name}
                                                </HashLink>
                                            </li>
                                        )
                                    })}
			                	</ul>
                            </li>
                            <li className="nav-item px-3  dropdown">
                                <NavLink className={`nav-link px-0`} 
                                style={({ isActive }) => ({
                                    borderBottom: isActive ? `2px solid black` : 'none',
                                })}
                                to={'/membership'}><span>membership</span></NavLink>
                                <ul class="dropdown-nav">
                                    {types && types.map((item,index)=>{
                                        return (
                                            <li className="drop_event" key={index}>
                                                <Button 
                                                    tagType='link' 
                                                    className='p-0' 
                                                    to={`/membership/${item.id}`} 
                                                    >
                                                    {item.name}
                                                </Button>
                                            </li>
                                        )
                                    })}
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
                                to={'/community/events'}><span>events</span></NavLink>
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
                            <a role="button" id="dropdownMenuLink" className='d-flex' data-bs-toggle="dropdown" aria-expanded="false">
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
                                                        tagType='link'
                                                        to={'/booking'}>Booking</Button>
                                                </li>
                                                <li>
                                                    <Button 
                                                        className='p-0'
                                                        tagType='link'
                                                        to={'/membership'}>Membership</Button>
                                                </li>
                                                <li>
                                                    <Button 
                                                        className='p-0'
                                                        tagType='link'
                                                        to={'/private'}>Private Events</Button>
                                                </li>
                                                <li>
                                                    <Button 
                                                        className='p-0'
                                                        tagType='link'
                                                        to={'/spaces'}>Spaces</Button>
                                                </li>
                                                <li>
                                                    <Button 
                                                        className='p-0'
                                                        tagType='link'
                                                        to={'/community'}>Community</Button>
                                                </li>
                                                <li>
                                                    <Button 
                                                        className='p-0'
                                                        tagType='link'
                                                        to={'/'}>Events</Button>
                                                </li>
                                            </ul>
                                    </li>
                                        <li className="drop_event border-dropdown"><Button 
                                            className='p-0' tagType='link' to={'/about'}>About OZ</Button></li>
                                        <li className="drop_event border-dropdown"><Button 
                                            className='p-0' tagType='link' to={'/talentmarket'}>Talent Market</Button> </li>
                                        <li className="drop_event border-dropdown">
                                            <a className='p-0' href={`https://www.google.com/maps/dir/${address}`} target='_blank'>Get Direction</a>
                                        </li> 
                                        <li className="drop_event border-dropdown">
                                            <Button 
                                                className='p-0' tagType='link' to={'/contactadmin'}>Contact Admin</Button>
                                        </li> 
                                        <li className="drop_event border-dropdown">
                                            <Button 
                                                className='p-0' tagType='link' to={'#!'}>Rewards</Button>
                                        </li>
                                        <li 
                                            onClick={(e)=>{
                                                e.stopPropagation();
                                            }} 
                                            className="drop_event border-dropdown py-2">
                                            <select class="form-select px-0" aria-label="Default select example" onChange={(e) => setBransh(e.target.value)}>
                                                {branches && branches.map((e, index)=>{
                                                    return(
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
