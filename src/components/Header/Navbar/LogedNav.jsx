import Profile from '../../../assets/images/profile-img.png';
import Paragraph from '../../UI/Paragraph';
import Booking from '../../../assets/images/icons/booking-profile.svg';
import Event from '../../../assets/images/icons/event-profile.svg';
import Plan from '../../../assets/images/icons/plan-profile.svg';
import Logout_icon from '../../../assets/images/icons/logout.svg';
import { useState , useContext, useEffect } from 'react';
import {Tab, Nav} from 'react-bootstrap';
import { Logout } from '../../../apis/AuthApi';
import Button from '../../UI/Button';
import { AuthContext } from '../../../apis/context/AuthTokenContext';
import { getNotificationList } from '../../../apis/User';
import { Badge, Dropdown } from 'antd';


const LogedNav = ({showBlackNav, token, show})=>{

    const [Open , SetOpen] = useState(false);
    const [mark , setmark] = useState("All");
    const [activeTab, setActiveTab] = useState('all');
    const [seenCount, setSeenCount] = useState(0);
    const [notification, setNotification] = useState([]);


    const handProp = (e)=>{
        e.stopPropagation()
    }
    const handleMark = (name )=>{
        setmark(name)
    };

    const handleTabClick = (key) => {
        setActiveTab(key);
        setSeenCount(0);
        getList();
    };

    const { handleLogout, userProfileDate } = useContext(AuthContext);

    const handelLogout = async () => {
        SetOpen(!Open);
        try{
            const result = await Logout(token);
            handleLogout();
        }catch (error){
            handleLogout();
        }
    };

    const getList = async () => {
        try{
            const result = await getNotificationList(token, activeTab);
            setNotification(result);
            setSeenCount(0);
            result.map(item => {
                if(item.seen === '0'){
                    setSeenCount(prev => prev + 1);
                }
            });
        }catch(error){
            console.log(error);
        }
    };

    const setDay = (roomdate) => {
        const parts = roomdate.split(/[- :]/);

        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);
        const hour = parseInt(parts[3]);
        const minute = parseInt(parts[4]);

        const date = new Date(year, month - 1, day, hour, minute);

        const dayFormated = {
            weekday: 'long'
        };
        const formattedDay = date.toLocaleTimeString('en-US', dayFormated);

        const timeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };

        const formattedTime = date.toLocaleTimeString('en-US', timeFormatOptions);
        return (
            <>
              <span className='mb-0 text-center me-2'>{formattedDay.split(' ')[0]}</span> 
                at
              <span className='mb-0 text-center ms-2'>{formattedTime}</span> 
            </>
        );
    }


    useEffect(()=>{
        setSeenCount(0);
        getList();
    },[token, activeTab])

    const itemsNotifications = [{
        key: '1',
        label: (
            <div className="Notifications">
                <Tab.Container 
                    id="left-tabs-example" 
                    defaultActiveKey={activeTab}
                    className=''>
                        <div className='box_Notifications'>
                            <div className='d-flex justify-content-start align-items-center py-3'>
                                <Paragraph className="p_notification mb-0">Notifications</Paragraph>
                                <Badge count={+seenCount}></Badge>
                            </div>
                            <Nav variant="pills" className="mx-auto">
                                <Nav.Item onClick={(e)=>{e.stopPropagation();handleTabClick('all')}}>
                                    <Nav.Link 
                                        eventKey={'all'}
                                        className='notification_mark py-0'>
                                            All
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item onClick={(e)=>{e.stopPropagation();handleTabClick('event')}}>
                                    <Nav.Link 
                                        eventKey={'event'}
                                        className='notification_mark py-0'>
                                            Events
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item onClick={(e)=>{e.stopPropagation();handleTabClick('invitation')}}>
                                    <Nav.Link 
                                        eventKey={'invitation'}
                                        className='notification_mark py-0'>
                                            Invitation
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <Tab.Pane eventKey={activeTab} className='noti_container'>
                            <ul className='ps-0'>
                                {notification && notification.map((item, index)=>{
                                    return (
                                        <li className="border-dropdown d-flex px-sm-4 px-2" key={index}>
                                            <img className='rounded-circle' alt='profile' src={item.icon}/>
                                            <div className='info_profile mt-4 ms-4'> 
                                                <Paragraph className='profile_notifications mb-2'>{item.title}</Paragraph>
                                                <Paragraph className='grey-span2 mb-2'>{item.text}</Paragraph>
                                                <Paragraph className='email mb-2' alt='#/'>{setDay(item.time_formmated)}</Paragraph>
                                            </div>
                                        </li>
                                    )
                                })}
                                {(notification && notification.length === 0) && <Paragraph className='empty py-5 px-3'>
                                    {`there is no notifications yet in ${activeTab}`}
                                </Paragraph>}
                            </ul>
                        </Tab.Pane>
                </Tab.Container>
            </div>
        )
    }];
    
    const itemsProfile = [
        {
            key: '1',
            label: (
                <li  className="li_img border_profile_bottom">
                    <img className='rounded-circle' alt='profile' width='80px' height='80px' src={userProfileDate?.avatar || Profile}/>
                    <div className='info_profile ps-3'> 
                        <Button className='name_profile p-0 text-start' to={'/profile'} tagType='link'>{userProfileDate?.first_name} {userProfileDate?.last_name}</Button>
                        <Paragraph className='email mb-0 text-center'>{userProfileDate?.email}</Paragraph>
                    </div>
                </li> 
            )
        },
        {
            key: '2',
            label: (
                <li onClick={()=>SetOpen(!Open)} className=" li_profile">
                        <Button className='p-0' tagType='link' to={'/profile/mybooking'}>
                            <img className='px-2' src={Booking}/> My Booking
                        </Button>
                </li>
            )
        },
        {
            key: '3',
            label: (
                <li onClick={()=>SetOpen(!Open)} className=" li_profile">
                        <Button className='p-0' tagType='link' to={'/profile/myevents'}>
                            <img className='px-2' src={Event}/>My Events
                        </Button>
                </li>
            )
        },
        {
            key: '4',
            label: (
                <li onClick={()=>SetOpen(!Open)} className=" li_profile border_profile_bottom">
                        <Button className='p-0' tagType='link' to={'/profile/myplan'}>
                            <img className='px-2' src={Plan}/>My plan
                        </Button>
                </li>
            )
        },
        {
            key: '5',
            label: (
                <li onClick={handelLogout} className=" li_profile">
                        <Button className='p-0' tagType='link'>
                            <img className='px-2' src={Logout_icon}/>Log out
                        </Button>
                </li>
            )
        },
    ];

    return (
        <>
            <Dropdown
                menu={{
                    items: itemsNotifications
                }}
                trigger={['click']}
                className='notifications_icon'
            >
                <a onClick={(e) => e.preventDefault()} style={{
                    cursor: 'pointer'
                }}>
                    <Badge dot={show}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path opacity="0.4" d="M15.8652 11.5254V14.1696" stroke="#0C0507" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M15.8816 8C12.9595 8 10.5932 10.3663 10.5932 13.2884V14.9559C10.5932 15.4958 10.3709 16.3057 10.093 16.7663L9.08454 18.4497C8.46518 19.4899 8.89397 20.6492 10.0374 21.0303C13.8329 22.2929 17.9382 22.2929 21.7337 21.0303C22.8057 20.673 23.2662 19.4184 22.6866 18.4497L21.6781 16.7663C21.4002 16.3057 21.1779 15.4879 21.1779 14.9559V13.2884C21.1699 10.3821 18.7878 8 15.8816 8Z" stroke={showBlackNav ? '#fff' : '#0C0507'} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path opacity="0.4" d="M18.5091 21.3555C18.5091 22.8086 17.318 23.9996 15.8649 23.9996C15.1423 23.9996 14.4753 23.6979 13.9989 23.2215C13.5224 22.7451 13.2207 22.0781 13.2207 21.3555" stroke={showBlackNav ? '#fff' : '#0C0507'} stroke-width="1.5" stroke-miterlimit="10"/>
                        </svg>
                    </Badge>
                </a>
            </Dropdown>
            <Dropdown
                menu={{
                    items: itemsProfile
                }}
                trigger={['click']}
                className='notifications_icon'
            >
                <a onClick={(e) => e.preventDefault()} style={{
                    cursor: 'pointer'
                }}>
                    <span className='user_name me-2'>{userProfileDate?.first_name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke={showBlackNav ? '#fff' : 'black'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.27344 18.3457C4.27344 18.3457 6.50246 15.5 12.0024 15.5C17.5024 15.5 19.7315 18.3457 19.7315 18.3457" stroke={showBlackNav ? '#fff' : 'black'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke={showBlackNav ? '#fff' : '#BDBDBD'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </Dropdown>
        </>
    );
}
export default LogedNav;