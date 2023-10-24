import React from "react";
import vector from "../../assets/images/Vector.png";
import "./Auth.css";
// import {inquiry} from "../../../apis/Api";
import Media from "../Media/Media";
import RegisterForm from './RegisterForm';
import facebook from "../../assets/images/icons/Facebook.svg";
import google from "../../assets/images/icons/Google.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";


const Register = () => {
    return (
        <>
            <section className="contactus auth my-5">
                <div className="position-relative">
                    <div className='img_float'>
                        <Media
                            type="img" 
                            src={vector} 
                            alt="shape"/>
                    </div>
                </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="pb-3 position-relative">
                                    <div className="text-shape">
                                        <h1 className="hand-write">Welcome,</h1>
                                        <h3 className="bold-head">Register to Access</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-card py-3">
                                    <RegisterForm />
                                    <div className="py-3 log-social text-center">
                                        <a
                                            href="src/components/Auth/Login/LoginForm#"
                                            target="_blank"
                                        >
                                            <Media
                                                type="img" src={facebook} alt="Facebook"/>
                                        </a>
                                        <a
                                            className="mx-4"
                                            href="src/components/Auth/Login/LoginForm#"
                                            target="_blank"
                                        >
                                            <Media
                                                type="img" src={google} alt="Google"/>
                                        </a>
                                        <a
                                            href="src/components/Auth/Login/LoginForm#"
                                            target="_blank"
                                        >
                                            <Media
                                                type="img" src={linkedin} alt="LinkedIn"/>
                                        </a>
                                    </div>
                                    <div className="text-center py-4">
                                        <Paragraph className='authFooter_copyright auth_desc mb-0'>Do you already have an account?
                                            <Button className='p-0 signup_title' tagType='link' to={'/login'}>Sign In here</Button>
                                        </Paragraph>
                                    </div>
                                    {/* <form onSubmit={handleSubmit}>
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
                                        </Row>
    
                                        <div className="d-flex justify-content-center my-3">
                                            <button
                                                type="submit"
                                                className="button-one-outline btn-bg-white"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
export default Register;