import React from 'react';
import vector from "../../../assets/images/Vector.png";
import {Col, Container, Row} from "react-bootstrap";
import './Contactus.css';
const Contactus = () => {
    return (
        <>
            <section className="contactus my-5">
                <div className="position-relative">
                    <img src={vector} className="position-absolute" style={{top: "0px", left: "0", width: "100px"}}/>
                </div>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="head-content-left-shape text-left pb-3 position-relative">
                                <h1 className="hand-write">Lets Connect,</h1>
                                <h3 className="bold-head">Schedule a tour, say hello</h3>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="form-card py-3">
                                <form>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="fname" className="form__label">First Name</label>
                                                <input type="text" className="form__field"
                                                       placeholder="Enter Your First Name" name="email" id='fname'
                                                       required/>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="lname" className="form__label">Last Name</label>
                                                <input type="text" className="form__field"
                                                       placeholder="Enter Your Last Name" name="email" id='lname'
                                                       required/>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="email" className="form__label">Email</label>
                                                <input type="email" className="form__field"
                                                       placeholder="Enter Your Email" name="email" id='email' required/>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="phone" className="form__label">Phone number</label>
                                                <input type="number" className="form__field" placeholder="Phone No."
                                                       name="phone" id='phone' required/>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="phone" className="form__label">User Type</label>
                                                <select className="form__field placeholderSelect" required>
                                                    <option className="" selected>Enter user type</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>

                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="phone" className="form__label">Inquiry Type</label>
                                                <select className="form__field placeholderSelect" required>
                                                    <option selected>Choose Service</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>

                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="phone" className="form__label">Locations</label>
                                                <select className="form__field placeholderSelect" required>
                                                    <option selected>Choose Location</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>

                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="comment" className="form__label">Comments</label>
                                                <input type="text" className="form__field"
                                                       placeholder="Enter your comments" name="comment" id='comment'
                                                       required/>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="d-flex justify-content-center my-3">
                                        <button type="submit" className="button-one-outline">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
};

export default Contactus;