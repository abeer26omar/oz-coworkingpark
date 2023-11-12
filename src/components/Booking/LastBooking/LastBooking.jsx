import React, { useEffect, useState, useContext } from 'react';
import './LastBooking.css';
import { getLastBooking } from '../../../apis/Booking';
import BookingSpaceList from '../BookingSpace/BookingSpaceList';
import { AuthContext } from '../../../apis/context/AuthTokenContext';

const LastBooking = ({placeId}) => {

    const [cards, setCards] = useState([]);
    const { token, userId } = useContext(AuthContext);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        if(placeId){
            getLastBooking(token, userId, placeId, signal).then(res=>{
                setCards(Object.values(res))
            }).catch(err=>{})
        }
        return ()=>controller.abort();
    },[placeId]);
    
    return (
        <>
            <section className="last-booking">
                <div className="container-fluid">
                    <div className="booking-section">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="h2-text-box">last booking</h2>
                            </div>
                            {cards && cards.map((book, index) => {
                                    return (
                                        <>
                                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                                <BookingSpaceList 
                                                    id={book.venueData.id}
                                                    place_type={book.venueData.title} 
                                                    img={book.venueData.gallery[0]?.image}
                                                    name={book.venueData.title} 
                                                    description={book.venueData.description}
                                                    amenities={book.venueData.facilities} 
                                                    price={book.venueData.price}
                                                    is_favorite={book.venueData.is_favorite}/>
                                            </div>
                                        </>
                                    )
                            })}
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
};

export default LastBooking;
