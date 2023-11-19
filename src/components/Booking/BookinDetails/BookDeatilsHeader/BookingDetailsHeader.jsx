import React, { useState, useContext} from 'react';
import '../BookingDetails.css';
import BookingForm from "./BookingForm";
import MainHeaderWrapper from '../../../UI/MainHeaderWrapper';
import Paragraph from '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import { likeVenues } from '../../../../apis/Booking';
import SweetAlert2 from 'react-sweetalert2';
import { AuthContext } from '../../../../apis/context/AuthTokenContext';
import LoginAlert from '../../../Auth/LoginAlertModal';
import RequestFormModal from '../../BookingSpace/RequestFormModal';

const BookingDetailsHeader = ({venueDetails}) => {

    const [like, setLike] = useState(venueDetails.is_favorite);
    const [show, setShow] = useState(false);
    const [showRequestModal, setShowRequestModal] = useState(false);
    const [swalProps, setSwalProps] = useState({});
    const { token, userId } = useContext(AuthContext);
    
    const handelHide = ()=> setShow(false);
    const handleClose = () => setShowRequestModal(false);
    const handleShow = () => setShowRequestModal(true);
    
    const likeVenue = (id)=>{
        if(token){
            likeVenues(token, userId, id).then(res=>{
                if(res){
                    setLike(!like);
                }
            }).catch(error=>{
                setSwalProps({
                    show: true,
                    icon: 'error',
                    title: error.response.data.status,
                    text: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            });
        }else{
            setShow(true);
        }
    };

    return (
        <>
            <div className='position-relative'>
                <Button 
                    tagType='link' 
                    className="fav_event p-0"
                    onClick={()=>{likeVenue(venueDetails.id)}}>
                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.3901 11.2123L33.3904 11.2128C34.9886 14.4857 34.3927 18.2453 31.2918 22.5101L31.2905 22.512C28.8369 25.9084 25.2986 29.3178 20.1211 33.3385L20.1199 33.3395C20.0869 33.3652 20.0463 33.3791 20.0045 33.3791C19.9627 33.3791 19.922 33.3652 19.8891 33.3395L19.888 33.3386C14.7036 29.3105 11.1719 25.8716 8.71624 22.5088C5.60676 18.2445 5.01118 14.4853 6.60917 11.2128L6.60944 11.2123C7.70239 8.96926 10.9357 7.03332 14.8135 8.1446C16.6619 8.67868 18.2746 9.82376 19.3882 11.3928L19.9998 12.2546L20.6114 11.3928C21.7251 9.82356 23.3381 8.67839 25.1868 8.14439L25.1887 8.14383C29.0525 7.01654 32.2958 8.96645 33.3901 11.2123Z" fill={like ? '#CB0A05' : '#585858'} fill-opacity="0.7" stroke={like ? '#A50805' : '#BDBDBD'} stroke-width="1.5"/>
                    </svg>
                </Button>
                <MainHeaderWrapper image={(venueDetails.gallery && venueDetails.gallery.length !== 0) && venueDetails.gallery} special_flex={`justify-content-md-center justify-content-start`}>
                    <div className="container text-center">
                        <Paragraph className="text-one">Booking</Paragraph>
                        <Paragraph className="text-two mb-4">{venueDetails.title}</Paragraph>
                        {!venueDetails.online_booking && (
                            <Button tagType='link'
                            className="button-outLine"
                            onClick={handleShow}>Book Now</Button>
                        )}
                    </div>
                </MainHeaderWrapper>
                {venueDetails.online_booking && <BookingForm venueDetails={venueDetails} token={token}/>}
            </div>
            <SweetAlert2 {...swalProps} />
            <LoginAlert 
                show={show}
                onHide={handelHide}
            />
            <RequestFormModal 
                show={showRequestModal}
                handleClose={handleClose}/>
        </>
    );
};

export default BookingDetailsHeader;
