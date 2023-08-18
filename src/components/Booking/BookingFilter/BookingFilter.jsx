import React from 'react';
import {FiSearch} from "react-icons/fi";
import './BookingFilter.css'

const BookingFilter = ({isOpen}) => {
    return (
        <>
            {isOpen && (
                <div className="container-fluid">
                    <form className="form-filter">
                        <div className="filter-component d-flex align-items-center">
                            <div className="input-group me-3 ">
                                <input type="text" className="form__field placeholderSelect" placeholder="Search"/>
                                <span className="icon-custom"><FiSearch/></span>
                            </div>

                            <div className="input-group me-3">
                                <input type="date" className="form__field placeholderSelect"/>
                            </div>

                            <select className="form__field placeholderSelect me-3">
                                <option disabled="">Choose Wing</option>
                                <option value="one">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                            </select>

                            <select className="form__field placeholderSelect me-3">
                                <option disabled="">Choose floors</option>
                                <option value="one">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                            </select>

                            <select className="form__field placeholderSelect me-3">
                                <option disabled="">Choose capacity</option>
                                <option value="one">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                            </select>

                            <select className="form__field placeholderSelect me-3">
                                <option disabled="">Choose facilities</option>
                                <option value="one">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                            </select>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input "/>
                                <label
                                    className="form-check-label" htmlFor="exampleCheck1">Favorites</label>
                            </div>
                        </div>

                    </form>
                </div>
            )}
        </>
    );
};

export default BookingFilter;
