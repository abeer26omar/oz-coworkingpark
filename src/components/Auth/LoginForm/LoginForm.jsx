import React, {useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import "./LoginForm.css";
import vector from "../../../assets/images/Vector.png";
import facebook from "../../../assets/images/icons/Facebook.svg";
import google from "../../../assets/images/icons/Google.svg";
import linkedin from "../../../assets/images/icons/linkedin.svg";
import {useNavigate} from "react-router-dom";
import {Login} from "../../../apis/auth_api/LoginApi";
import Media from "../../Media/Media";

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setCredentials({...credentials, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await Login(credentials.username, credentials.password);
            setCredentials(result);
            console.log(result);
            
            navigate("/membership");
        } catch (error) {
            console.log(error);
            navigate("/");
        }
    };

    return (
        <>
            {/*// <!--Start Login Section-->*/}
            <section className="login my-5">
                <div className="position-relative">
                    <Media
                        type="img"
                        src={vector}
                        alt="shape"
                        className="position-absolute"
                        style={{top: "250px", left: "-15px", width: "100px"}}
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
                                    <div className="form__group field my-3 group-check">
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
                                            <a className="forget_password" href="#">
                                                Forget your password?
                                            </a>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center py-3">
                                        <button
                                            type="submit"
                                            className="button-one-outline btn-bg-white "
                                        >
                                            Login
                                        </button>
                                    </div>
                                </Form>

                                <div className="py-3 log-social text-center">
                                    <a
                                        href="src/components/Auth/Login/LoginForm#"
                                        target="_blank"
                                    >
                                        <Media
                                            type="img" src={facebook} alt="Facebook"/>
                                    </a>
                                    <a
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
