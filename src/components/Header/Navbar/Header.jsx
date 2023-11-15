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

const Header = ({showBlackNav, data}) => {

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
        }).catch(err=>{console.log(err)})
        return ()=>controller.abort();
    },[]);

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
				                	<li className="drop_event"> Community Newsfeed</li>
				                	<li className="drop_event"> Community Events</li>
					                <li className="drop_event"> Gallery </li>

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
                                        {data && data.map((configItem , index)=>(
                                            <React.Fragment key={index}>
                                                {configItem.key === "facebook_url" && 
                                                    <a className="media-link" href={configItem.value} target="_blank">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 0C3.5816 0 0 3.6034 0 8.04869C0 12.0658 2.9256 15.3955 6.7504 16V10.3748H4.7184V8.04869H6.7504V6.27557C6.7504 4.25856 7.944 3.14463 9.772 3.14463C10.6472 3.14463 11.5624 3.30157 11.5624 3.30157V5.28155H10.5544C9.56 5.28155 9.2504 5.90211 9.2504 6.53876V8.04869H11.4688L11.1144 10.3748H9.2504V16C13.0744 15.3963 16 12.065 16 8.04869C16 3.6034 12.4184 0 8 0Z" fill="black"/>
                                                        </svg>
                                                    </a>
                                                }
                                                {configItem.key === "instagram_url" &&
                                                    <a className="media-link" href={configItem.value} target="_blank">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 5.6C7.36348 5.6 6.75303 5.85286 6.30294 6.30294C5.85286 6.75303 5.6 7.36348 5.6 8C5.6 8.63652 5.85286 9.24697 6.30294 9.69706C6.75303 10.1471 7.36348 10.4 8 10.4C8.63652 10.4 9.24697 10.1471 9.69706 9.69706C10.1471 9.24697 10.4 8.63652 10.4 8C10.4 7.36348 10.1471 6.75303 9.69706 6.30294C9.24697 5.85286 8.63652 5.6 8 5.6ZM8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8C12 9.06087 11.5786 10.0783 10.8284 10.8284C10.0783 11.5786 9.06087 12 8 12C6.93913 12 5.92172 11.5786 5.17157 10.8284C4.42143 10.0783 4 9.06087 4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4ZM13.2 3.8C13.2 4.06522 13.0946 4.31957 12.9071 4.50711C12.7196 4.69464 12.4652 4.8 12.2 4.8C11.9348 4.8 11.6804 4.69464 11.4929 4.50711C11.3054 4.31957 11.2 4.06522 11.2 3.8C11.2 3.53478 11.3054 3.28043 11.4929 3.09289C11.6804 2.90536 11.9348 2.8 12.2 2.8C12.4652 2.8 12.7196 2.90536 12.9071 3.09289C13.0946 3.28043 13.2 3.53478 13.2 3.8ZM8 1.6C6.0208 1.6 5.6976 1.6056 4.7768 1.6464C4.1496 1.676 3.7288 1.76 3.3384 1.912C3.01169 2.03195 2.71633 2.22421 2.4744 2.4744C2.22401 2.71632 2.03148 3.01167 1.9112 3.3384C1.7592 3.7304 1.6752 4.1504 1.6464 4.7768C1.6048 5.66 1.6 5.9688 1.6 8C1.6 9.9792 1.6056 10.3024 1.6464 11.2232C1.676 11.8496 1.76 12.2712 1.9112 12.6608C2.0472 13.0088 2.2072 13.2592 2.4728 13.5248C2.7424 13.7936 2.9928 13.9544 3.3368 14.0872C3.732 14.24 4.1528 14.3248 4.7768 14.3536C5.66 14.3952 5.9688 14.4 8 14.4C9.9792 14.4 10.3024 14.3944 11.2232 14.3536C11.8488 14.324 12.2704 14.24 12.6608 14.0888C12.987 13.9682 13.2822 13.7764 13.5248 13.5272C13.7944 13.2576 13.9552 13.0072 14.088 12.6632C14.24 12.2688 14.3248 11.8472 14.3536 11.2232C14.3952 10.34 14.4 10.0312 14.4 8C14.4 6.0208 14.3944 5.6976 14.3536 4.7768C14.324 4.1512 14.24 3.7288 14.088 3.3384C13.9674 3.012 13.7753 2.71677 13.5256 2.4744C13.2838 2.22388 12.9884 2.03133 12.6616 1.9112C12.2696 1.7592 11.8488 1.6752 11.2232 1.6464C10.34 1.6048 10.0312 1.6 8 1.6ZM8 0C10.1736 0 10.4448 0.00799995 11.2976 0.048C12.1496 0.088 12.7296 0.2216 13.24 0.42C13.768 0.6232 14.2128 0.8984 14.6576 1.3424C15.0644 1.74232 15.3792 2.22607 15.58 2.76C15.7776 3.2696 15.912 3.8504 15.952 4.7024C15.9896 5.5552 16 5.8264 16 8C16 10.1736 15.992 10.4448 15.952 11.2976C15.912 12.1496 15.7776 12.7296 15.58 13.24C15.3797 13.7742 15.0649 14.2581 14.6576 14.6576C14.2576 15.0643 13.7738 15.379 13.24 15.58C12.7304 15.7776 12.1496 15.912 11.2976 15.952C10.4448 15.9896 10.1736 16 8 16C5.8264 16 5.5552 15.992 4.7024 15.952C3.8504 15.912 3.2704 15.7776 2.76 15.58C2.22586 15.3796 1.74202 15.0648 1.3424 14.6576C0.935525 14.2577 0.620745 13.774 0.42 13.24C0.2216 12.7304 0.088 12.1496 0.048 11.2976C0.0104 10.4448 0 10.1736 0 8C0 5.8264 0.00799995 5.5552 0.048 4.7024C0.088 3.8496 0.2216 3.2704 0.42 2.76C0.620189 2.22574 0.935043 1.74186 1.3424 1.3424C1.74214 0.935385 2.22594 0.620583 2.76 0.42C3.2704 0.2216 3.8496 0.088 4.7024 0.048C5.5552 0.0104 5.8264 0 8 0Z" fill="black"/>
                                                        </svg>
                                                    </a>
                                                }
                                                {configItem.key === "twitter_url" &&
                                                    <a className="media-link" href={configItem.value} target="_blank">
                                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.9992 1.54431C15.4 1.80938 14.7645 1.98346 14.1138 2.06079C14.7996 1.65061 15.313 1.00507 15.5581 0.244466C14.9144 0.627512 14.2088 0.895957 13.4733 1.04117C12.9793 0.512582 12.3245 0.16202 11.6106 0.0439833C10.8968 -0.0740531 10.164 0.0470495 9.52611 0.388464C8.88822 0.729878 8.38099 1.27248 8.08329 1.9319C7.78559 2.59133 7.71409 3.33064 7.87991 4.03489C6.57465 3.96947 5.29775 3.63028 4.13209 3.03934C2.96644 2.44839 1.93809 1.61892 1.11381 0.604749C0.822049 1.10589 0.668725 1.67557 0.669545 2.25546C0.669545 3.3936 1.24882 4.3991 2.12951 4.98779C1.60833 4.97139 1.09861 4.83064 0.642857 4.57728V4.61809C0.643014 5.3761 0.905313 6.11073 1.38528 6.69742C1.86525 7.28411 2.53335 7.68675 3.27629 7.83709C2.79248 7.9682 2.28517 7.98753 1.79278 7.8936C2.00225 8.54606 2.41052 9.11668 2.96043 9.52556C3.51034 9.93444 4.17436 10.1611 4.8595 10.1738C4.17856 10.7086 3.39888 11.1039 2.56506 11.3372C1.73123 11.5705 0.859598 11.6371 0 11.5333C1.50055 12.4983 3.24733 13.0107 5.0314 13.009C11.0699 13.009 14.3721 8.00663 14.3721 3.66833C14.3721 3.52704 14.3681 3.38418 14.3619 3.24447C15.0046 2.77992 15.5593 2.20445 16 1.54509L15.9992 1.54431Z" fill="black"/>
                                                        </svg>
                                                    </a>
                                                }
                                            </React.Fragment>
                                        ))}
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
