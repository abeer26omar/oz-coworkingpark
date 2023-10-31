import Profile from '../../../assets/images/profile-img.png';
import Paragraph from '../../UI/Paragraph';
import Booking from '../../../assets/images/icons/booking-profile.svg';
import Event from '../../../assets/images/icons/event-profile.svg';
import Plan from '../../../assets/images/icons/plan-profile.svg';
import Logout from '../../../assets/images/icons/logout.svg';
import N_1 from '../../../assets/images/n-1.svg';
import N_2 from '../../../assets/images/n-2.svg';
import N_3 from '../../../assets/images/n-3.svg';
import Media from '../../Media/Media';
import { useState } from 'react';



const LoginNav = ()=>{
    const [mark , setmark] = useState(true)
    const handleMark = ()=>{
       setmark(!true)
    }
    return(<>
        <div className='Notifications'>   
        <div className='box_Notifications'>
            <div className='position-relative'>
                <Paragraph className="p_notification">Notifications</Paragraph>
                <span className='pin'>1</span>
            </div>
            <div>
                <ul className='ul_mark'>
                    {/* <li onClick={han} className='notification_mark'>All</li> */}
                    <li className='notification_mark'>Events</li>
                    <li className='notification_mark'>Invitation</li>
                </ul>
            </div>
        </div>
        <div>
            <ul className='ul_notifications'>
                <li className="border-dropdown d-flex  px-4">
                <Media type={'img'} className='rounded-circle ' alt='profile' src={N_1}/>
                <div className='info_profile  mt-4 ms-4'> 
                    <Paragraph className='profile_notifications'>Reminder: Meeting Room 01 has 10 minutes left</Paragraph>
                    <Paragraph className='email' alt='#/'>Today at 9:42 AM</Paragraph>
                </div>
                </li>
                 <li className="border-dropdown d-flex  px-4">
                <Media type={'img'} className='rounded-circle' alt='profile' src={N_2}/>
                <div className='info_profile mt-4 ms-4'> 
                    <Paragraph className='profile_notifications'>Meeting room Booking</Paragraph>
                    <Paragraph className='email' alt='#/'>Wants to edit the file Dynabike</Paragraph>
                    <Paragraph className='email' alt='#/'>Today at 9:42 AM</Paragraph>

                </div>
                </li>
                 <li className="border-dropdown d-flex  px-4">
                <Media type={'img'} className='rounded-circle' alt='profile' src={N_3}/>
                <div className='info_profile mt-4 ms-4'> 
                    <Paragraph className='profile_notifications'>Multi Purpose area event</Paragraph>
                    {/* <Paragraph className='email' alt='#/'></Paragraph> */}
                    <Paragraph className='email' alt='#/'>Today at 9:42 AM</Paragraph>
                </div>
                </li>
                  <li className="border-dropdown d-flex  px-4">
                <Media type={'img'} className='rounded-circle' alt='profile' src={N_2}/>
                <div className='info_profile mt-4 ms-4'> 
                    <Paragraph className='profile_notifications'>Meeting room Booking</Paragraph>
                    <Paragraph className='email' alt='#/'>Wants to edit the file Dynabike</Paragraph>
                    <Paragraph className='email' alt='#/'>Today at 9:42 AM</Paragraph>

                </div>
                </li>  <li className="border-dropdown d-flex  px-4">
                <Media type={'img'} className='rounded-circle' alt='profile' src={N_2}/>
                <div className='info_profile mt-4 ms-4'> 
                    <Paragraph className='profile_notifications'>Meeting room Booking</Paragraph>
                    <Paragraph className='email' alt='#/'>Wants to edit the file Dynabike</Paragraph>
                    <Paragraph className='email' alt='#/'>Today at 9:42 AM</Paragraph>

                </div>
                </li>
                <li className=" d-flex  px-4">
                <Media type={'img'} className='rounded-circle' alt='profile' src={N_3}/>
                <div className='info_profile mt-4 ms-4'> 
                    <Paragraph className='profile_notifications'>Multi Purpose area event</Paragraph>
                    {/* <Paragraph className='email' alt='#/'></Paragraph> */}
                    <Paragraph className='email' alt='#/'>Today at 9:42 AM</Paragraph>
                </div>
                </li>
              
                
            </ul>
        </div>
        </div>

        <ul className="nav_profile">
            <li className="li_img border_profile_bottom">
                <Media type={'img'} className='rounded-circle' alt='profile' src={Profile}/>
                <div className='info_profile'> 
                    <Paragraph className='name_profile'>SAmara Mohamed</Paragraph>
                    <a className='email' alt='#/'>samarmohamed12@gmail.com</a>
                </div>
            </li>
            <li className=" li_profile">
            <Media type={'img'} className='px-2' src={Booking}/>    
                My Booking
            </li>
            <li className=" li_profile">
            <Media type={'img'} className='px-2' src={Event}/>    
            My Events
            </li>
            <li className=" li_profile border_profile_bottom">
            <Media type={'img'} className='px-2' src={Plan}/>    
            My plan
            </li>
            <li className=" li_profile">
            <Media type={'img'} className='px-2' src={Logout}/>    
            Log out
            </li>
        </ul>
    </>)
}
export default LoginNav;
