import Profile from '../../../assets/images/profile-img.png';
import Paragraph from '../../UI/Paragraph';
import Booking from '../../../assets/images/icons/booking-profile.svg';
import Event from '../../../assets/images/icons/event-profile.svg';
import Plan from '../../../assets/images/icons/plan-profile.svg';
import Logout_icon from '../../../assets/images/icons/logout.svg';
import N_1 from '../../../assets/images/n-1.svg';
import N_2 from '../../../assets/images/n-2.svg';
import N_3 from '../../../assets/images/n-3.svg';
import { useState , useContext } from 'react';
import { Logout } from '../../../apis/AuthApi';
import userblack from '../../../assets/images/icons/userblack.svg';
import userwhite from '../../../assets/images/icons/userwhite.svg';
import Button from '../../UI/Button';
import { AuthContext } from '../../../apis/context/AuthTokenContext';

const LogedNav = ({showBlackNav, token})=>{

    const [Open , SetOpen] = useState(false);
    const [mark , setmark] = useState("All");
    const userIcon = showBlackNav ? userwhite : userblack;
    const handProp = (e)=>{
        e.stopPropagation()
    }
    const handleMark = (name )=>{
        setmark(name)
    }
    const { handleLogout } = useContext(AuthContext);

    const handelLogout = async () => {
        SetOpen(!Open);
        try{
            const result = await Logout(token);
            handleLogout();
            console.log(result);
        }catch (error){
            handleLogout();
            console.log(error);
        }
    }
    return (
        <>
            <div className="dropdown">
                <a className="profile_icon " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path opacity="0.4" d="M15.8652 11.5254V14.1696" stroke="#0C0507" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M15.8816 8C12.9595 8 10.5932 10.3663 10.5932 13.2884V14.9559C10.5932 15.4958 10.3709 16.3057 10.093 16.7663L9.08454 18.4497C8.46518 19.4899 8.89397 20.6492 10.0374 21.0303C13.8329 22.2929 17.9382 22.2929 21.7337 21.0303C22.8057 20.673 23.2662 19.4184 22.6866 18.4497L21.6781 16.7663C21.4002 16.3057 21.1779 15.4879 21.1779 14.9559V13.2884C21.1699 10.3821 18.7878 8 15.8816 8Z" stroke="#0C0507" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path opacity="0.4" d="M18.5091 21.3555C18.5091 22.8086 17.318 23.9996 15.8649 23.9996C15.1423 23.9996 14.4753 23.6979 13.9989 23.2215C13.5224 22.7451 13.2207 22.0781 13.2207 21.3555" stroke="#0C0507" stroke-width="1.5" stroke-miterlimit="10"/>
                    </svg>
                </a>
                <ul class="dropdown-menu Notifications" aria-labelledby="dropdownMenuButton1">
                        <div className='box_Notifications'>
                                <div className='position-relative'>
                                    <Paragraph className="p_notification">Notifications</Paragraph>
                                    <span className='pin'>1</span>
                                </div>
                                <div>
                                    <ul className='ul_mark' onClick={handProp}>
                                        <li onClick={()=>handleMark("All")} className={ mark === "All" ? 'notification_mark activity' :"notification_mark "}>All</li>
                                        <li onClick={()=>handleMark("Event")} className={ mark === "Event" ? 'notification_mark activity' :"notification_mark "}>Events</li>
                                        <li onClick={()=>handleMark("Invitation")} className={ mark === "Invitation" ? 'notification_mark activity' :"notification_mark"}>Invitation</li>
                                    </ul>
                                </div>
                        </div>
                            <li className="border-dropdown d-flex  px-4">
                                <img className='rounded-circle ' alt='profile' src={N_1}/>
                                    <div className='info_profile  mt-4 ms-4'> 
                                        <Paragraph className='profile_notifications'>Reminder: Meeting Room 01 has 10 minutes left</Paragraph>
                                        <Paragraph className='email' alt='#/'>Today at 9:42 AM</Paragraph>
                                    </div>
                            </li>
                            <li className="border-dropdown d-flex  px-4">
                                <img className='rounded-circle' alt='profile' src={N_2}/>
                                <div className='info_profile mt-4 ms-4'> 
                                    <Paragraph className='profile_notifications'>Meeting room Booking</Paragraph>
                                    <Paragraph className='email' alt='#/'>Wants to edit the file Dynabike</Paragraph>
                                    <Paragraph className='email' alt='#/'>Today at 9:42 AM</Paragraph>
                                </div>
                            </li>
                            <li className="border-dropdown d-flex  px-4">
                                <img className='rounded-circle' alt='profile' src={N_3}/>
                                <div className='info_profile mt-4 ms-4'> 
                                    <Paragraph className='profile_notifications'>Multi Purpose area event</Paragraph>
                                    <Paragraph className='email' alt='#/'></Paragraph>
                                    <Paragraph className='email' alt='#/'>Today at 9:42 AM</Paragraph>
                                </div>
                            </li>
                            <li className="border-dropdown d-flex  px-4">
                                <img className='rounded-circle' alt='profile' src={N_2}/>
                                <div className='info_profile mt-4 ms-4'> 
                                    <Paragraph className='profile_notifications'>Meeting room Booking</Paragraph>
                                    <Paragraph className='email' alt='#/'>Wants to edit the file Dynabike</Paragraph>
                                    <Paragraph className='email' alt='#/'>Today at 9:42 AM</Paragraph>
                                </div>
                            </li>
                            <li className="border-dropdown d-flex  px-4">
                                <img className='rounded-circle' alt='profile' src={N_2}/>
                                <div className='info_profile mt-4 ms-4'> 
                                    <Paragraph className='profile_notifications'>Meeting room Booking</Paragraph>
                                    <Paragraph className='email' alt='#/'>Wants to edit the file Dynabike</Paragraph>
                                    <Paragraph className='email' alt='#/'>Today at 9:42 AM</Paragraph>
                                </div>
                            </li>
                            <li className=" d-flex  px-4">
                                <img className='rounded-circle' alt='profile' src={N_3}/>
                                <div className='info_profile mt-4 ms-4'> 
                                    <Paragraph className='profile_notifications'>Multi Purpose area event</Paragraph>
                                    <Paragraph className='email' alt='#/'></Paragraph>
                                    <Paragraph className='email' alt='#/'>Today at 9:42 AM</Paragraph>
                                </div>
                            </li>
                </ul>
            </div> 
            <div className="dropdown">
                <a  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img  src={userIcon}  className="margin-links user-icon"/>
                </a>
                <ul class="dropdown-menu nav_profile" aria-labelledby="dropdownMenuButton1">
                    <li  className="li_img border_profile_bottom">
                        <img className='rounded-circle' alt='profile' src={Profile}/>
                        <div className='info_profile ps-3'> 
                            <Button className='name_profile p-0 text-start' to={'/profile'} tagType='link'>Samara Mohamed</Button>
                            <Paragraph className='email mb-0 text-center'>samarmohamed12@gmail.com</Paragraph>
                        </div>
                    </li> 
                    <li onClick={()=>SetOpen(!Open)} className=" li_profile">
                        <Button className='p-0' tagType='link'>
                            <img className='px-2' src={Booking}/> My Booking
                        </Button>
                    </li>
                    <li  onClick={()=>SetOpen(!Open)} className=" li_profile">
                        <Button className='p-0' tagType='link'>
                            <img className='px-2' src={Event}/>My Events
                        </Button>
                    </li>
                    <li  onClick={()=>SetOpen(!Open)} className=" li_profile border_profile_bottom">
                        <Button className='p-0' tagType='link'>
                            <img className='px-2' src={Plan}/>My plan
                        </Button>
                    </li>
                    <li onClick={handelLogout} className=" li_profile">
                        <Button className='p-0' tagType='link'>
                            <img className='px-2' src={Logout_icon}/>Log out
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default LogedNav;
