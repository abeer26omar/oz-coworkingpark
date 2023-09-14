import React, {useState} from 'react';
import './BookingSpace.css'
import Slider from "react-slick";
import filtericons from "../../../assets/images/icons/filtericon.svg";
import {BookingsData} from "../../../Data/BookingsData";
import Button from "react-bootstrap/Button";
import bottom_arrow from "../../../assets/images/icons/bookbottom.svg";
import LastBooking from "../LastBooking/LastBooking";
import BookingFilter from "../BookingFilter/BookingFilter";
import BookingSpaceList from "./BookingSpaceList";
import Media from "../../Media/Media";

const BookingSpace = () => {
        const [isFilterOpen, setIsFilterOpen] = useState(false);

        const toggleFilter = () => {
            setIsFilterOpen(!isFilterOpen);
        };
        const [cards, setCards] = useState(BookingsData.slice(0, 3));
        const handleShowMore = () => {
            const newCards = [...cards, ...BookingsData.slice(cards.length, cards.length + 3)];
            setCards(newCards);
        };

        let settings = {
            dots: false,
            arrows: true,
            infinite: false,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 1,
            align: 'center',
            lazyLoad: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        // slidesToShow: 3,
                        // slidesToScroll: 3,
                        // infinite: true,
                        // dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <section className="booking-space">
                    <div className="container-fluid">
                        <div className="row">
                            <Slider {...settings}>
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="space-name">Meeting Room</span>
                                        <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                        </svg>
                                    </div>

                                </div>
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="space-name">Meeting Room</span>
                                        <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                        </svg>
                                    </div>

                                </div>
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="space-name">Meeting Room</span>
                                        <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                        </svg>
                                    </div>

                                </div>
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="space-name">Meeting Room</span>
                                        <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                        </svg>
                                    </div>

                                </div>
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="space-name">Meeting Room</span>
                                        <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                        </svg>
                                    </div>

                                </div>
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="space-name">Meeting Room</span>
                                        <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                        </svg>
                                    </div>

                                </div>
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="space-name">Meeting Room</span>
                                        <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                        </svg>
                                    </div>

                                </div>
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="space-name">Meeting Room</span>
                                        <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                        </svg>
                                    </div>

                                </div>
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="space-name">Meeting Room</span>
                                        <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                        </svg>
                                    </div>

                                </div>
                                <div className="col-lg-2">
                                    <span className="space-name">Meeting Room</span>
                                    <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                    </svg>
                                </div>
                                <div className="col-lg-2">
                                    <span className="space-name">Meeting Room</span>
                                    <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                    </svg>
                                </div>
                                <div className="col-lg-2">
                                    <span className="space-name">Meeting Room</span>
                                    <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                    </svg>
                                </div>
                                <div className="col-lg-2">
                                    <span className="space-name">Meeting Room</span>
                                    <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                    </svg>
                                </div>
                                <div className="col-lg-2">
                                    <span className="space-name">Meeting Room</span>
                                    <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                    </svg>
                                </div>
                                <div className="col-lg-2">
                                    <span className="space-name">Meeting Room</span>
                                    <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                    </svg>
                                </div>
                                <div className="col-lg-2">
                                    <span className="space-name">Meeting Room</span>
                                    <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                    </svg>
                                </div>
                                <div className="col-lg-2">
                                    <span className="space-name">Meeting Room</span>
                                    <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                    </svg>
                                </div>
                                <div className="col-lg-2">
                                    <span className="space-name">Meeting Room</span>
                                    <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                    </svg>
                                </div>
                            </Slider>
                        </div>
                        <div className="row border-top border-bottom booking-space-margin">
                            <div className="col-lg-6 col-md-6 col-sm-12 border-right">
                                <h2 className="book-title">Meeting Room</h2>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12  text-end  m-auto">
                                <div className="btn-spaces-filter">
                                    <button href="#" className="btn button-outLine btn-bg-white btn-filter"
                                            onClick={toggleFilter}
                                    >
                                        <Media
                                            type="img" src={filtericons} alt="filter icon" className="icon-filter"/>
                                        Filter
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="filter border-top border-bottom">
                            <BookingFilter isOpen={isFilterOpen}/>
                        </div>

                        <div className="booking-section border-top border-bottom">
                            <div className="row">
                                {cards.map((book, index) => {
                                    const {id, img, title, text, options, price} = book;
                                    return (
                                        <>
                                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                                <BookingSpaceList id={id} img={img} title={title} text={text}
                                                                  options={options} price={price}/>
                                            </div>
                                        </>
                                    )
                                })}


                            </div>
                            {cards.length < BookingsData.length && (
                                <div style={{marginTop: "32px"}}>
                                    <Button variant="link" className="btn-cards-more" onClick={handleShowMore}>Show more
                                        <Media
                                            type="img"
                                            src={bottom_arrow} alt="arrow"/> </Button>
                                </div>
                            )}

                        </div>
                    </div>
                </section>

                <LastBooking/>


            </>
        );
    }
;

export default BookingSpace;
