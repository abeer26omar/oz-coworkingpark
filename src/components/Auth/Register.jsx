import React, { useCallback, useState } from "react";
import vector from "../../assets/images/Vector.png";
import facebook from "../../assets/images/icons/Facebook.svg";
import google from "../../assets/images/icons/Google.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import "./Auth.css";
import Media from "../Media/Media";
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";
import RegisterForm from './RegisterForm';
import {
    LoginSocialGoogle,
    LoginSocialFacebook,
    LoginSocialLinkedin
  } from 'reactjs-social-login';

const REDIRECT_URI = window.location.href;

const Register = () => {
    const [provider, setProvider] = useState('')
    const [profile, setProfile] = useState(null)
    
    const responseFacebook = (response) => {
        console.log(response);
      }
    const onLoginStart = useCallback(() => {
        alert('login start')
    }, [])

    const onLogoutSuccess = useCallback(() => {
        setProfile(null)
        setProvider('')
        alert('logout success')
    }, [])

    return (
        <>
            <section className="contactus auth my-5">
                <div className="position-relative">
                    <div className='img_float'>
                        <img
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
                                        {/* <Button>
                                            <Media
                                                type="img" src={facebook} alt="Facebook"/>
                                        </Button> */}
                                        <LoginSocialFacebook
                                            appId={process.env.REACT_APP_FB_APP_ID || ''}
                                            onLoginStart={onLoginStart}
                                            onResolve={({ provider, data }) => {
                                            setProvider(provider)
                                            setProfile(data)
                                            console.log(data);
                                            }}
                                            onReject={(err) => {
                                            console.log(err)
                                            }}
                                        >
                                            <img src={facebook} alt="Facebook" />
                                        </LoginSocialFacebook>
                                        <LoginSocialGoogle
                                            client_id={'468809410339-uiq561ijnarf0duksu85jm9j6oa83bib.apps.googleusercontent.com'}
                                            onLoginStart={onLoginStart}
                                            onResolve={({ provider, data }) => {
                                            setProvider(provider)
                                            setProfile(data);
                                            console.log(data);
                                            }}
                                            onReject={(err) => {
                                            console.log(err)
                                            }}
                                        >
                                            <img src={google} alt="Google"/>
                                        </LoginSocialGoogle>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
export default Register;