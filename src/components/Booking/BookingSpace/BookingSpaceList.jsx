import React, { useState, useContext } from 'react';
import Card from "react-bootstrap/Card";
import Media from "../../Media/Media";
import Button from "../../UI/Button";
import { likeVenues } from '../../../apis/Booking';
import SweetAlert2 from 'react-sweetalert2';
import { AuthContext } from '../../../apis/context/AuthTokenContext';

const BookingSpaceList = ({id, img, description, price, name, amenities, is_favorite}) => {

    const [like, setLike] = useState(is_favorite);
    const [swalProps, setSwalProps] = useState({});
    const { token, userId } = useContext(AuthContext);

    const likeVenue = (id)=>{
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
        })

    }
    return (
        <>
            <Card className="book-card" key={id}>

                <div className="position-relative">
                    <Media type="img" src={img} class="card-img-top rounded-0" title="desk room" height='309px' />

                    <Button 
                        tagType='link' 
                        className="fav-event"
                        onClick={()=>{likeVenue(id)}}>
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.3901 11.2123L33.3904 11.2128C34.9886 14.4857 34.3927 18.2453 31.2918 22.5101L31.2905 22.512C28.8369 25.9084 25.2986 29.3178 20.1211 33.3385L20.1199 33.3395C20.0869 33.3652 20.0463 33.3791 20.0045 33.3791C19.9627 33.3791 19.922 33.3652 19.8891 33.3395L19.888 33.3386C14.7036 29.3105 11.1719 25.8716 8.71624 22.5088C5.60676 18.2445 5.01118 14.4853 6.60917 11.2128L6.60944 11.2123C7.70239 8.96926 10.9357 7.03332 14.8135 8.1446C16.6619 8.67868 18.2746 9.82376 19.3882 11.3928L19.9998 12.2546L20.6114 11.3928C21.7251 9.82356 23.3381 8.67839 25.1868 8.14439L25.1887 8.14383C29.0525 7.01654 32.2958 8.96645 33.3901 11.2123Z" fill={like ? '#CB0A05' : '#585858'} fill-opacity="0.7" stroke={like ? '#A50805' : '#BDBDBD'} stroke-width="1.5"/>
                        </svg>
                    </Button>


                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <ul className="list-options ">
                        {amenities.slice(0, 3).map((single, index) => {
                            return (
                                <li className="list-option-item" key={index}>{single.name}</li>
                            )
                        })}
                    </ul>
                    <Card.Text>{description}</Card.Text>
                    <div
                        className="d-flex justify-content-between align-items-center card-footer">
                        <span className="price-hour">{price} EGP / Hour</span>
                        <Button to={`/bookingDetails/${id}`} tagType='link' className='btn_outline_black'>Book Now</Button>
                    </div>

                </Card.Body>


            </Card>
            <SweetAlert2 {...swalProps} />
        </>
    );
};

export default BookingSpaceList;
