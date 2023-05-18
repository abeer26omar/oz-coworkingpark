import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import './LoginForm.css'
import vector from "../../../assets/images/Vector.png";
import facebook from "../../../assets/images/icons/facebook.png";
import google from "../../../assets/images/icons/google.png";
import linkedin from "../../../assets/images/icons/linkedin.png";

const LoginForm = () => {
    return (
        <>
            {/*// <!--Start Login Section-->*/}
            <section className="login my-5">
                <div className="position-relative">
                    <img src={vector} alt="shape" className="position-absolute" style={{top: "250px", left: "-15px", width: "100px" }}/>
                </div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="login-card form-card py-3 py-3">
                                <div className="head-content text-center pb-3">
                                    <h1 className="hand-write">Welcome</h1>
                                    <h3 className="bold-head">Please Sign in</h3>
                                </div>
                                <Form>
                                    <div className="form__group field my-3">
                                        <label htmlFor="email" className="form__label">Email</label>
                                        <input type="email" className="form__field" placeholder="Enter Your Email" name="email" id='email' required />
                                    </div>
                                    <div className="form__group field my-3">
                                        <label htmlFor="password" className="form__label">Password</label>
                                        <input type="password" className="form__field" placeholder="Enter Your Password" name="email" id='password' required />
                                    </div>
                                    <div className="d-flex justify-content-between my-3">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
                                            <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in</label>
                                        </div>
                                        <div className="">
                                            <a className="forget_password" href="#">Forget your password?</a>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center py-3">
                                        <button type="submit" className="button-one-outline">Login</button>
                                    </div>
                                </Form>

                                <div className="py-3 log-social text-center">
                                    <a href="#" target="_blank"><img src={facebook}/></a>
                                    <a href="#" target="_blank"><img src={google}/></a>
                                    <a href="#" target="_blank"><img src={linkedin}/></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*// <!--End Login Section-->*/}
        </>
    );
};

export default LoginForm;
