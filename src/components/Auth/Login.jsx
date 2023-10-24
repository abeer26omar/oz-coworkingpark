import "./Auth.css";
import vector from "../../assets/images/Vector.png";
import facebook from "../../assets/images/icons/Facebook.svg";
import google from "../../assets/images/icons/Google.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import Media from "../Media/Media";
import LoginForm from './LoginForm';
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";

const Login = () => {

    return (
        <>
            <section className="login auth my-5">
                <div className="position-relative">
                    <div className='img_float'>
                        <Media
                            type="img" 
                            src={vector} 
                            alt="shape"/>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="login-card form-card py-4">
                                <div className="head-content text-center pb-3">
                                    <Paragraph className="hand-write">Welcome</Paragraph>
                                    <Paragraph className="bold-head">Please Sign in</Paragraph>
                                </div>
                                <LoginForm />
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
                                    <Paragraph className='authFooter_copyright auth_desc mb-0'>Don't have an account?
                                        <Button className='p-0 signup_title' tagType='link' to={'/register'}>Sign Up here</Button>
                                    </Paragraph>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;