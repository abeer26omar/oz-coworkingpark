import React,{useState} from 'react';
import vector from "../../../assets/images/Vector.png";
import {Col, Container, Row} from "react-bootstrap";
import './Contactus.css';
import axios from 'axios';
import FormData from "form-data";
const Contactus = () => {
    const[formData,setFormData] = useState({
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        user_type:'',
        inquiry_type:'',
        location_id:''
    });

    const handleInputChange = event => {
        const{name, value} = event.target;
        setFormData({...formData,[name]: value});
    }

    // let axios = require('axios');
    // let FormData = require('form-data');
    // let data = new FormData();
    // data.append('server_key', 'c04919f13f43b612fff3b76c5d08b2d6');
    // data.append('first_name', 'Ahmed N.');
    // data.append('last_name', 'Galal');
    // data.append('email', 'qbizns@yahoo.com');
    // data.append('phone', '01002948785');
    // data.append('user_type', 'company');
    // data.append('inquiry_type', 'one');
    // data.append('location_id', '1');




    // const handleSubmit = event => {
    //     event.preventDefault();
    //     axios(config)
    //         .then(response=> {
    //             setFormData(response)
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }

    const data = new FormData();
    data.append('server_key', 'c04919f13f43b612fff3b76c5d08b2d6');
    data.append('first_name', formData.first_name);
    data.append('last_name', formData.last_name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('user_type', formData.user_type);
    data.append('inquiry_type', formData.inquiry_type);
    data.append('location_id', formData.location_id);

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://modest-banzai.78-141-219-156.plesk.page/api/inquiry',
        data : data,
    };
    const handleSubmit = event => {
        event.preventDefault();
        axios(config)
            .then(response => {
                // handle successful response
                setFormData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
                // handle error
            });
    };


    //
    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });



    return (
        <>
            <section className="contactus my-5">
                <div className="position-relative">
                    <img src={vector} className="position-absolute" style={{top: "0px", left: "0", width: "100px"}} alt="shape like"/>
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
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="first_name" className="form__label">First Name</label>
                                                <input type="text" className="form__field"
                                                       placeholder="Enter Your First Name"
                                                       name="first_name"
                                                       id='first_name'
                                                       value={formData.first_name} onChange={handleInputChange}
                                                       required/>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="last_name" className="form__label">Last Name</label>
                                                <input type="text"
                                                       className="form__field"
                                                       placeholder="Enter Your Last Name"
                                                       name="last_name"
                                                       id='last_name'
                                                       value={formData.last_name} onChange={handleInputChange}
                                                       required/>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="email" className="form__label">Email</label>
                                                <input type="text"
                                                       className="form__field"
                                                       placeholder="Enter Your Email"
                                                       name="email"
                                                       id='email'
                                                       value={formData.email} onChange={handleInputChange}
                                                       required/>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="phone" className="form__label">Phone number</label>
                                                <input type="text"
                                                       className="form__field"
                                                       placeholder="Phone No."
                                                       name="phone"
                                                       id='phone'
                                                       value={formData.phone} onChange={handleInputChange}
                                                       required/>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="phone" className="form__label">User Type</label>
                                                <select value={formData.user_type} onChange={handleInputChange} className="form__field placeholderSelect"  required>
                                                    <option disabled className="" selected>Enter user type</option>
                                                    <option value="company">company</option>
                                                    <option value="individual">individual</option>
                                                    <option value="startup">startup</option>

                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label  className="form__label">Inquiry Type</label>
                                                <select value={formData.inquiry_type} onChange={handleInputChange} className="form__field placeholderSelect" required>
                                                    <option disabled selected>Choose Service</option>
                                                    <option value="one">One</option>
                                                    <option value="two">Two</option>
                                                    <option value="three">Three</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="phone" className="form__label">Locations</label>
                                                <select value={formData.location_id} onChange={handleInputChange} className="form__field placeholderSelect" required>
                                                    <option disabled selected>Choose Location</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>

                                                </select>
                                            </div>
                                        </Col>
                                        {/*<Col lg={12}>*/}
                                        {/*    <div className="form__group field my-3">*/}
                                        {/*        <label htmlFor="comment" className="form__label">Comments</label>*/}
                                        {/*        <input type="text" className="form__field"*/}
                                        {/*               placeholder="Enter your comments" name="comment" id='comment'*/}
                                        {/*               required/>*/}
                                        {/*    </div>*/}
                                        {/*</Col>*/}
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
