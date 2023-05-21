import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './LoginForm.css';
import vector from '../../../assets/images/Vector.png';
import facebook from '../../../assets/images/icons/facebook.png';
import google from '../../../assets/images/icons/google.png';
import linkedin from '../../../assets/images/icons/linkedin.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SERVER_KEY = 'c04919f13f43b612fff3b76c5d08b2d6';

const LoginForm = () => {
    function handleJsonData(data) {
        console.log(data);
    }

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate();

    let axios = require('axios');
    let FormData = require('form-data');
    let data = new FormData();
    data.append('server_key', 'c04919f13f43b612fff3b76c5d08b2d6');
    data.append('username', 'ahmed@gmail.com');
    data.append('password', '1212');


    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://modest-banzai.78-141-219-156.plesk.page/api/auth',
        // headers: {
        //     ...data.getHeaders()
        // },
        data : data
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios(config)
            .then((response) => {
                setCredentials(response.data);
                console.log(response.data);
                navigate('/membership')
            })
            .catch((error) => {
                console.log(error);
                navigate('/individual')
            });
    };




    return (
        <>
            {/*// <!--Start Login Section-->*/}
            <section className="login my-5">
                <div className="position-relative">
                    <img
                        src={vector}
                        alt="shape"
                        className="position-absolute"
                        style={{ top: '250px', left: '-15px', width: '100px' }}
                    />
                </div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="login-card form-card py-3 py-3">
                                <div className="head-content text-center pb-3">
                                    <h1 className="hand-write">Welcome</h1>
                                    <h3 className="bold-head">Please Sign in</h3>
                                </div>
                                <Form onSubmit={handleSubmit}>
                                    <div className="form__group field my-3">
                                        <label htmlFor="email" className="form__label">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            className="form__field"
                                            placeholder="Enter Your Email"
                                            name="username"
                                            value={credentials.username}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form__group field my-3">
                                        <label htmlFor="password" className="form__label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form__field"
                                            placeholder="Enter Your Password"
                                            name="password"
                                            value={credentials.password}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between my-3">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input "
                                                id="exampleCheck1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="exampleCheck1"
                                            >
                                                Keep me logged in
                                            </label>
                                        </div>
                                        <div className="">
                                            <a
                                                className="forget_password"
                                                href="src/components/Auth/Login/LoginForm#"
                                            >
                                                Forget your password?
                                            </a>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center py-3">
                                        <button type="submit" className="button-one-outline">
                                            Login
                                        </button>
                                    </div>
                                </Form>

                                <div className="py-3 log-social text-center">
                                    <a href="src/components/Auth/Login/LoginForm#" target="_blank">
                                        <img src={facebook} alt="Facebook"/>
                                    </a>
                                    <a href="src/components/Auth/Login/LoginForm#" target="_blank">
                                        <img src={google} alt="Google"/>
                                    </a>
                                    <a href="src/components/Auth/Login/LoginForm#" target="_blank">
                                        <img src={linkedin} alt="LinkedIn"/>
                                    </a>
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
