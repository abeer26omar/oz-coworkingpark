import React from 'react';
import {FiSearch} from "react-icons/fi";
import './BookingFilter.css'

const BookingFilter = ({isOpen}) => {
    return (
        <>
            {isOpen && (
                <div className="container-fluid">
                    <form className="form-filter">
                        <div className="filter-component row g-3 d-flex align-items-center">
                            <div className='col-xxl-2 col-md-3'>
                                <div className="input-group">
                                    <input type="text" className="form__field placeholderSelect" placeholder="Search by Name"/>
                                    <span className="icon-custom"><FiSearch/></span>
                                </div>
                            </div>
                            <div className='col-xxl-1 col-md-2'>
                                <div className="input-group">
                                    <input type="date" className="form__field placeholderSelect" placeholder='Select date'/>
                                </div>
                            </div>
                            <div className='col-xxl-2 col-md-3'>
                                <select className="form__field placeholderSelect">
                                    <option disabled="">Wing</option>
                                    <option value="one">One</option>
                                    <option value="two">Two</option>
                                    <option value="three">Three</option>
                                </select>
                            </div>
                            <div className='col-xxl-2 col-md-3'>
                                <select className="form__field placeholderSelect">
                                    <option disabled="">Floors</option>
                                    <option value="one">One</option>
                                    <option value="two">Two</option>
                                    <option value="three">Three</option>
                                </select>
                            </div>
                            <div className='col-xxl-2 col-md-3'>
                                <select className="form__field placeholderSelect">
                                    <option disabled="">Capacity</option>
                                    <option value="one">One</option>
                                    <option value="two">Two</option>
                                    <option value="three">Three</option>
                                </select>
                            </div>
                            <div className='col-xxl-2 col-md-3'>
                                <select className="form__field placeholderSelect">
                                    <option disabled="">Facilities</option>
                                    <option value="one">One</option>
                                    <option value="two">Two</option>
                                    <option value="three">Three</option>
                                </select>
                            </div>
                            <div className='col-xxl-1 col-md-2'>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input "/>
                                    <label
                                        className="form-check-label" htmlFor="exampleCheck1">Only Favorites</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default BookingFilter;
