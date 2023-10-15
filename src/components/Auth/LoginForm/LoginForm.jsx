import {Col, Container, Row} from "react-bootstrap";
import "./LoginForm.css";
import vector from "../../../assets/images/Vector.png";
import facebook from "../../../assets/images/icons/Facebook.svg";
import google from "../../../assets/images/icons/Google.svg";
import linkedin from "../../../assets/images/icons/linkedin.svg";
import Media from "../../Media/Media";
import Form from './Form';

const LoginForm = () => {

    // const navigate = useNavigate();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const result = await Login(credentials.username, credentials.password);
    //         setCredentials(result);
    //         console.log(result);
            
    //         navigate("/membership");
    //     } catch (error) {
    //         console.log(error);
    //         navigate("/");
    //     }
    // };
    return (
        <>
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
                                <Form />
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
        </>
    );
};

export default LoginForm;