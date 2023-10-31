import Profile from '../../../assets/images/profile-img.png';
import Paragraph from '../../UI/Paragraph';
import Booking from '../../../assets/images/icons/booking-profile.svg';
import Event from '../../../assets/images/icons/event-profile.svg';
import Plan from '../../../assets/images/icons/plan-profile.svg';
import Logout from '../../../assets/images/icons/logout.svg';
import Media from '../../Media/Media';



const LoginNav = ()=>{
    return(<>
        <div className='Notifications'>   
        <div className='box_Notifications'>
            <div className='position-relative'>
                <Paragraph className="p_notification">Notifications</Paragraph>
                <span className='pin'>1</span>
            </div>
            <div>
                <ul className='ul_mark'>
                    <li className='notification_mark'>All</li>
                    <li className='notification_mark'>Events</li>
                    <li className='notification_mark'>Invitation</li>
                </ul>
            </div>
        </div>
        <div>
            <ul>
                <li>ttt</li>
                <li>ttt</li>
                <li>ttt</li>
                <li>ttt</li>
                <li>ttt</li>
                <li>ttt</li>
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
