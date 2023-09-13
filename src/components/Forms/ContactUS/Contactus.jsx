import React, {useState} from "react";
import vector from "../../../assets/images/Vector.png";
import {Col, Container, Row} from "react-bootstrap";
import "./Contactus.css";
import {inquiry} from "../../../apis/Api";
import Media from "../../Media/Media";

const Contactus = () => {
    const [formState, setFormState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        user_type: "",
        inquiry_type: "",
        location_id: "",
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await inquiry(formState);
            console.log(result);
            setFormState({
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                user_type: "",
                inquiry_type: "",
                location_id: "",
            });
        } catch (error) {
            console.log(error);
        }
    };
    const apiUrl = process.env.REACT_APP_API_URL;

    return (
        <>

            <section className="contactus my-5">
                <div className="position-relative">
                    <Media
                        type="img"
                        src={vector}
                        className="position-absolute"
                        style={{top: "0px", left: "0", width: "100px"}}
                        alt="shape like"
                    />
                </div>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="head-content-left-shape text-left pb-3 position-relative">
                                <div className="text-shape">
                                    <h1 className="hand-write">Lets Connect,</h1>
                                    <h3 className="bold-head">Schedule a tour, say hello</h3>
                                </div>

                                {/*<p>The API URL is: {apiUrl}</p>*/}
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="form-card py-3">
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="first_name" className="form__label">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form__field"
                                                    placeholder="Enter Your First Name"
                                                    name="first_name"
                                                    id="first_name"
                                                    value={formState.first_name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="last_name" className="form__label">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form__field"
                                                    placeholder="Enter Your Last Name"
                                                    name="last_name"
                                                    id="last_name"
                                                    value={formState.last_name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="email" className="form__label">
                                                    Email
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form__field"
                                                    placeholder="Enter Your Email"
                                                    name="email"
                                                    id="email"
                                                    value={formState.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="phone" className="form__label">
                                                    Phone number
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form__field"
                                                    placeholder="Phone No."
                                                    name="phone"
                                                    id="phone"
                                                    value={formState.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="phone" className="form__label">
                                                    User Type
                                                </label>
                                                <select
                                                    value={formState.user_type}
                                                    onChange={handleInputChange}
                                                    className="form__field placeholderSelect"
                                                    required
                                                >
                                                    <option disabled className="" selected>
                                                        Enter user type
                                                    </option>
                                                    <option value="company">company</option>
                                                    <option value="individual">individual</option>
                                                    <option value="startup">startup</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label className="form__label">Inquiry Type</label>
                                                <select
                                                    value={formState.inquiry_type}
                                                    onChange={handleInputChange}
                                                    className="form__field placeholderSelect"
                                                    required
                                                >
                                                    <option disabled selected>
                                                        Choose Service
                                                    </option>
                                                    <option value="one">One</option>
                                                    <option value="two">Two</option>
                                                    <option value="three">Three</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form__group field my-3">
                                                <label htmlFor="phone" className="form__label">
                                                    Locations
                                                </label>
                                                <select
                                                    value={formState.location_id}
                                                    onChange={handleInputChange}
                                                    className="form__field placeholderSelect"
                                                    required
                                                >
                                                    <option disabled selected>
                                                        Choose Location
                                                    </option>
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
                                        <button
                                            type="submit"
                                            className="button-one-outline btn-bg-white"
                                        >
                                            Submit
                                        </button>
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
