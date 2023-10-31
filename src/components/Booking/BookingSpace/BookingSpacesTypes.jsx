import React, {useEffect, useState} from 'react';
import BookingFilter from "../BookingFilter/BookingFilter";
// import {BookingsData} from "../../../Data/BookingsData";
import filtericons from "../../../assets/images/icons/filtericon.svg";
import BookingSpaceList from "./BookingSpaceList";
import bottom_arrow from "../../../assets/images/icons/bookbottom.svg";
import Media from "../../Media/Media";
import Button from '../../UI/Button';

const BookingSpacesTypes = (props)=>{
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [cards, setCards] = useState(props.space.properities.slice(0, 3));
    useEffect(()=>{
        setCards(props.space.properities.slice(0, 3))
    },[props.space.properities]);

    const handleShowMore = (e) => {
        e.preventDefault()
        const newCards = [...cards, ...props.space.properities.slice(cards.length, cards.length + 3)];
        setCards(newCards);
    };
    const toggleFilter = (e) => {
        e.preventDefault();
        setIsFilterOpen(!isFilterOpen);
    };
    return (
        <>
            <div className="row border-top border-bottom booking-space-margin">
                <div className="col-lg-6 col-md-6 col-sm-12 border-right">
                    <h2 className="book-title">{props.space.title}</h2>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12  text-end  m-auto">
                    <div className="btn-spaces-filter">
                        <Button 
                            tagType='link' 
                            className="button-outLine px-4 btn-bg-white btn-filter"
                            onClick={toggleFilter}
                        >
                        <Media
                            type="img" src={filtericons} alt="filter icon" className="icon-filter"/>
                                Filter
                        </Button>
                    </div>
                </div>
                    <div className="filter border-top border-bottom">
                        <BookingFilter isOpen={isFilterOpen}/>
                    </div>
            </div>
                    <div className="booking-section border-top border-bottom">
                        <div className="row">
                            {cards.map((book, index) => {
                                const {id, img, name, description, amenities, price, redirect} = book;
                                    return (
                                        <>
                                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                                <BookingSpaceList 
                                                    id={id}
                                                    place_type={props.space.title} 
                                                    img={img} 
                                                    name={name} 
                                                    description={description}
                                                    amenities={amenities} 
                                                    price={price}
                                                    redirect={redirect}/>
                                            </div>
                                        </>
                                    )
                            })}
                        </div>
                        {cards.length < props.space.properities.length && (
                            <div className='text-center mt-5'>
                                        <Button tagType="link" className="btn-cards-more" onClick={handleShowMore}>Show more
                                            <Media
                                                type="img"
                                                src={bottom_arrow} alt="arrow"/>
                                        </Button>
                                    </div>
                                )}
                    </div>
        </>
    )
}
export default BookingSpacesTypes; 