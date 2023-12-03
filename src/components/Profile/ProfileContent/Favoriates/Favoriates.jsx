import { useState, useEffect, useContext } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import Paragraph from '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import { AuthContext } from '../../../../apis/context/AuthTokenContext';
import { getFavoriates } from '../../../../apis/User';
import SweetAlert2 from 'react-sweetalert2';
import AddToFavButton from '../../../UI/AddToFavButton';
import ShareButton from '../../../UI/ShareIcon';
import { attendEvent, checkEvent, cancelEventAttend } from '../../../../apis/Events';

const Favoriates = () => {

    const [data, setData] = useState();
    const [bookingData, setBookingData] = useState([]);
    const [activeTab, setActiveTab] = useState('event');
    const [swalProps, setSwalProps] = useState({});
    const { token, userId } = useContext(AuthContext);
    const [reload, setReload] = useState(false);

    const currentTime = new Date();

    const handleTabClick = (key) => {
        setActiveTab(key);
        setBookingData(data[key]);
    };

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        getFavoriates(token, 'all', signal).then(res=>{
            setData(res)
        })
        .catch(err =>{
            console.log(err);
        });
        return ()=>controller.abort();
    },[token, userId, reload]);

    useEffect(()=>{
        if(data){
            const initialTab = Object.keys(data)[0];
            setActiveTab(initialTab);
            setBookingData(data[initialTab]);
        }
    },[data]);

    const setHours = (seconds) => {
        const milliseconds = seconds * 1000;
        const date = new Date(milliseconds);
        return date.getUTCHours();
    }

    const attend = async (id) => {
        try{
            const result = await checkEvent(token, userId, id);
            if(result.bookable){
                try{
                    const res = await attendEvent(token, userId, id);
                    setSwalProps({
                        show: true,
                        icon: 'success',
                        title: res.status,
                        text: res.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }catch(error){
                    setSwalProps({
                        show: true,
                        icon: 'error',
                        title: error.response.data.status,
                        text: error.response.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });   
                }
            } else{
                setSwalProps({
                    show: true,
                    icon: 'error',
                    title: result.status,
                    text: result.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }catch (error){
            setSwalProps({
                show: true,
                icon: 'error',
                title: error.response.data.status,
                text: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const cancel = async (id) => {
        try{
            const res = await cancelEventAttend(token, userId, id);
            setSwalProps({
                show: true,
                icon: 'success',
                title: res.status,
                text: res.message,
                showConfirmButton: false,
                timer: 1500
            });
        }catch (error){
            setSwalProps({
                show: true,
                icon: 'error',
                title: error.response.data.status,
                text: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const handelReload = (value, key) => {
        setReload(value);
        handleTabClick(key)
    }

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey={activeTab} className='py-4 px-5'>
                <div className="container p-4">
                    <div className="head-form">
                        <h2>Favoriates</h2>
                    </div>
                    <Nav variant="pills" className="col-11 row mx-auto my-3 justify-content-center booking_nav">
                        {
                            data && Object.keys(data).map((item,index)=>{
                                return (
                                    <Nav.Item className='col-4 text-center p-0' key={index}>
                                        <Nav.Link 
                                            className="booking_navlink" 
                                            eventKey={item}
                                            onClick={()=>{handleTabClick(item)}}>
                                            <span className=''>{item}</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                )
                            })
                        }
                    </Nav>
                    <Tab.Content animation className='py-4'>
                        <Tab.Pane eventKey={activeTab}>
                        {bookingData && bookingData.map((item, index)=>{
                            return (
                                <>
                                    {activeTab === 'market' && (
                                        <div className='card card_event p-3 mb-3' 
                                            key={index}>
                                            <div className='row g-3 align-items-center'>
                                                <div className='col-lg-2 col-12 d-flex align-items-center justify-content-center'>
                                                    <img src={item.user_id?.avatar} alt='event-img'  width={'134px'} height={'136px'} style={{
                                                        objectFit:'fill',
                                                        borderRadius: '50%'
                                                    }}/>
                                                </div>
                                                <div className='col-lg-10 col-12'>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <Paragraph className='card-title mb-0'>{item.title || item.event_name}</Paragraph>
                                                            <AddToFavButton is_favorite={item.is_favorite} id={item.id} reload={handelReload}/>
                                                            {/* <Button 
                                                                tagType='link' 
                                                                className="fav-event p-0"
                                                                onClick={()=>{likeVenue(item.id)}}>
                                                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M33.3901 11.2123L33.3904 11.2128C34.9886 14.4857 34.3927 18.2453 31.2918 22.5101L31.2905 22.512C28.8369 25.9084 25.2986 29.3178 20.1211 33.3385L20.1199 33.3395C20.0869 33.3652 20.0463 33.3791 20.0045 33.3791C19.9627 33.3791 19.922 33.3652 19.8891 33.3395L19.888 33.3386C14.7036 29.3105 11.1719 25.8716 8.71624 22.5088C5.60676 18.2445 5.01118 14.4853 6.60917 11.2128L6.60944 11.2123C7.70239 8.96926 10.9357 7.03332 14.8135 8.1446C16.6619 8.67868 18.2746 9.82376 19.3882 11.3928L19.9998 12.2546L20.6114 11.3928C21.7251 9.82356 23.3381 8.67839 25.1868 8.14439L25.1887 8.14383C29.0525 7.01654 32.2958 8.96645 33.3901 11.2123Z" fill={item.is_favorite ? '#CB0A05' : '#585858'} fill-opacity="0.7" stroke={item.is_favorite ? '#A50805' : '#BDBDBD'} stroke-width="1.5"/>
                                                                </svg>
                                                            </Button> */}
                                                        </div>
                                                        <div className="list-option-item m-0 d-flex align-items-center  my-3">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M4.27148 18.3457C4.27148 18.3457 6.5005 15.5 12.0005 15.5C17.5005 15.5 19.7296 18.3457 19.7296 18.3457" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <path d="M11.998 2C6.4752 2 1.99805 6.47715 1.99805 12C1.99805 17.5228 6.4752 22 11.998 22C17.5208 22 21.998 17.5228 21.998 12C21.998 6.47715 17.5208 2 11.998 2Z" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        </svg>{item.user_id?.name}
                                                        </div>
                                                        <div className='d-flex justify-content-between align-items-center  my-3'>
                                                                    <div className="list-option-item m-0 d-flex align-items-center">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                                        <path d="M3.50195 6.43956C3.50195 4.81177 4.82154 3.49219 6.44932 3.49219C8.07711 3.49219 9.39669 4.81177 9.39669 6.43956C9.39669 8.06734 8.07711 9.38692 6.44932 9.38692C4.82154 9.38692 3.50195 8.06734 3.50195 6.43956Z" stroke="black" stroke-width="1.3125"/>
                                                                        <path d="M11.6035 14.5411C11.6035 12.9133 12.9231 11.5938 14.5509 11.5938C16.1787 11.5938 17.4983 12.9133 17.4983 14.5411C17.4983 16.1689 16.1787 17.4885 14.5509 17.4885C12.9231 17.4885 11.6035 16.1689 11.6035 14.5411Z" stroke="#BDBDBD" stroke-width="1.3125"/>
                                                                        <path d="M3.50195 14.5411C3.50195 13.1517 3.50195 12.457 3.93359 12.0254C4.36522 11.5938 5.05992 11.5938 6.44932 11.5938C7.83872 11.5938 8.53343 11.5938 8.96506 12.0254C9.39669 12.457 9.39669 13.1517 9.39669 14.5411C9.39669 15.9305 9.39669 16.6252 8.96506 17.0569C8.53343 17.4885 7.83872 17.4885 6.44932 17.4885C5.05992 17.4885 4.36522 17.4885 3.93359 17.0569C3.50195 16.6252 3.50195 15.9305 3.50195 14.5411Z" stroke="black" stroke-width="1.3125"/>
                                                                        <path d="M11.6035 6.43956C11.6035 5.05015 11.6035 4.35545 12.0351 3.92382C12.4668 3.49219 13.1615 3.49219 14.5509 3.49219C15.9403 3.49219 16.635 3.49219 17.0666 3.92382C17.4983 4.35545 17.4983 5.05015 17.4983 6.43956C17.4983 7.82896 17.4983 8.52366 17.0666 8.95529C16.635 9.38692 15.9403 9.38692 14.5509 9.38692C13.1615 9.38692 12.4668 9.38692 12.0351 8.95529C11.6035 8.52366 11.6035 7.82896 11.6035 6.43956Z" stroke="#BDBDBD" stroke-width="1.3125"/>
                                                                        </svg>{item.category?.name}
                                                                    </div>
                                                            <Paragraph className='mb-0 grey-span2'>{setHours(parseInt('1699622607', 10))} hrs ago</Paragraph>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'booking' && (
                                        <div className='card card_event p-3 mb-3' 
                                            key={index}>
                                            <div className='row g-3 align-items-center'>
                                                <div className='col-lg-3 col-12 d-flex align-items-center justify-content-center'>
                                                    <img src={item.image || item.gallery[0]?.image} alt='event-img'  width={'100%'} height={'136px'} style={{
                                                        objectFit:'fill'
                                                    }}/>
                                                </div>
                                                <div className='col-lg-9 col-12'>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <Paragraph className='card-title mb-0'>{item.title || item.event_name}</Paragraph>
                                                        <AddToFavButton is_favorite={item.is_favorite} id={item.id} type={'venue'} reload={handelReload}/>
                                                        {/* <Button 
                                                            tagType='link' 
                                                            className="fav-event p-0"
                                                            onClick={()=>{likeVenue(item.id)}}>
                                                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M33.3901 11.2123L33.3904 11.2128C34.9886 14.4857 34.3927 18.2453 31.2918 22.5101L31.2905 22.512C28.8369 25.9084 25.2986 29.3178 20.1211 33.3385L20.1199 33.3395C20.0869 33.3652 20.0463 33.3791 20.0045 33.3791C19.9627 33.3791 19.922 33.3652 19.8891 33.3395L19.888 33.3386C14.7036 29.3105 11.1719 25.8716 8.71624 22.5088C5.60676 18.2445 5.01118 14.4853 6.60917 11.2128L6.60944 11.2123C7.70239 8.96926 10.9357 7.03332 14.8135 8.1446C16.6619 8.67868 18.2746 9.82376 19.3882 11.3928L19.9998 12.2546L20.6114 11.3928C21.7251 9.82356 23.3381 8.67839 25.1868 8.14439L25.1887 8.14383C29.0525 7.01654 32.2958 8.96645 33.3901 11.2123Z" fill={item.is_favorite ? '#CB0A05' : '#585858'} fill-opacity="0.7" stroke={item.is_favorite ? '#A50805' : '#BDBDBD'} stroke-width="1.5"/>
                                                            </svg>
                                                        </Button> */}
                                                    </div>
                                                        <ul className="list-options d-flex p-0 py-3 m-0">
                                                            {item.services?.map((item, index)=>{
                                                                return (
                                                                    <li className="list-option-item" key={index}>{item.name}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                <Paragraph className="price-hour mb-0">{item?.price} EGP / Hour</Paragraph>
                                                                <Button 
                                                                    tagType='link' 
                                                                    className="btn_outline_black"
                                                                    style={{
                                                                        padding: '.6rem 3rem'
                                                                    }}>book now</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'event' && (
                                        <div className='card card_event p-3 mb-3' 
                                            key={index}>
                                            <div className='row g-3 align-items-center'>
                                                <div className='col-lg-3 col-12 d-flex align-items-center justify-content-center'>
                                                    <img src={item.image || item.gallery[0]?.image} alt='event-img'  width={'100%'} height={'136px'} style={{
                                                        objectFit:'fill'
                                                    }}/>
                                                </div>
                                                    <div className='col-lg-9 col-12'>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <Paragraph className='card-title mb-0'>{item.title || item.event_name}</Paragraph>
                                                            <AddToFavButton is_favorite={item.is_favorite} id={item.id} type={'event'} reload={handelReload}/>
                                                        </div>
                                                        <ul className="list-options d-flex p-0 py-4 m-0" style={{
                                                                listStyle: 'none'
                                                            }}>
                                                            <li className="list-option-item d-flex align-items-center ms-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M7.00195 3.99903V2.5" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round"/>
                                                                <path d="M16.998 3.99903V2.5" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round"/>
                                                                <path d="M1.99805 9H21.998" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round"/>
                                                                <path d="M1.99805 12C1.99805 8.22876 1.99805 6.34315 3.16962 5.17157C4.34119 4 6.22681 4 9.99805 4H13.998C17.7693 4 19.6549 4 20.8265 5.17157C21.998 6.34315 21.998 8.22876 21.998 12V14C21.998 17.7712 21.998 19.6569 20.8265 20.8284C19.6549 22 17.7693 22 13.998 22H9.99805C6.22681 22 4.34119 22 3.16962 20.8284C1.99805 19.6569 1.99805 17.7712 1.99805 14V12Z" stroke="black" stroke-width="1.25"/>
                                                                <path d="M17.998 16L15.998 16M15.998 16L13.998 16M15.998 16L15.998 14M15.998 16L15.998 18" stroke="black" stroke-width="1.25" stroke-linecap="round"/>
                                                                </svg>
                                                                {item.dates?.map((date,index)=>{
                                                                    return (<span key={index}>{date.check_in_date}</span>)
                                                                })}
                                                            </li>
                                                            <li className="list-option-item d-flex align-items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <circle cx="12" cy="13" r="8.99998" stroke="black" stroke-width="1.25"/>
                                                                <path d="M12 9V13L14.5 15.5" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M3.49805 4.49999L7.49806 2" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M20.5 4.49999L16.5 2" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                                {item.dates?.map((date,index)=>{
                                                                    return (<span key={index}>{date.check_in_time}</span>)
                                                                })}
                                                            </li>
                                                            <li className="list-option-item d-flex align-items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M4.27148 18.3457C4.27148 18.3457 6.5005 15.5 12.0005 15.5C17.5005 15.5 19.7296 18.3457 19.7296 18.3457" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M11.998 2C6.4752 2 1.99805 6.47715 1.99805 12C1.99805 17.5228 6.4752 22 11.998 22C17.5208 22 21.998 17.5228 21.998 12C21.998 6.47715 17.5208 2 11.998 2Z" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>{item.host[0]?.name}
                                                            </li>
                                                        </ul>
                                                        <div className='d-flex justify-content-end align-items-center'>
                                                                    
                                                                    {currentTime < (item && new Date(item.end)) && (
                                                                        <>
                                                                            {
                                                                                item.event_attend_id === null ? (
                                                                                    <Button 
                                                                                        tagType='link' 
                                                                                        className="btn_outline_black"
                                                                                        onClick={()=>attend(item.id)} 
                                                                                        style={{
                                                                                            padding: '.6rem 3rem'
                                                                                        }}>attend
                                                                                    </Button>
                                                                                )
                                                                                :
                                                                                (
                                                                                    <Button 
                                                                                        tagType='link' 
                                                                                        className="btn_outline_black"
                                                                                        onClick={()=>cancel(item.event_attend_id)} 
                                                                                        style={{
                                                                                            padding: '.6rem 3rem'
                                                                                        }}>cancel
                                                                                    </Button>
                                                                                )
                                                                            }
                                                                        </>
                                                                        )
                                                                    }
                                                                    {/* <ShareButton border={true} shareUrl={}/> */}
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )
                        })}
                        </Tab.Pane>
                        {(bookingData && bookingData.length === 0) && <Paragraph className='empty'>{`there is no favorites in ${activeTab} yet `}</Paragraph>}
                    </Tab.Content>
                </div>
            </Tab.Container>
            <SweetAlert2 {...swalProps} />
        </>
    );
};
export default Favoriates;