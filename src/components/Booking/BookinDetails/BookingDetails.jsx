import React from 'react';
import BookingDetailsHeader from "./BookDeatilsHeader/BookingDetailsHeader";
import SpaceDetails from "./SpaceDetails/SpaceDetails";
import { useParams } from 'react-router-dom';
import {Places} from '../../../Data/GroupingPlaces';
import book1 from "../../../assets/images/bookings/book1.png";
import { useEffect } from 'react';

const BookingDetails = () => {
    const {space} = useParams();
    const {id} = useParams();

    const space_details = Places.find(e => e.title === space);
            return (
                <>
                {
                    space_details.properities.filter(item => item.id == id).map(e=>{
                        return (
                            <>
                                <BookingDetailsHeader space_details={e} space_redirect={space_details.redirect} />
                                <SpaceDetails space_details={e}/>
                            </>
                        )
                    })
                }
                </>
            )
};

export default BookingDetails;
