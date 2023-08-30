import React from 'react';
import about from "../../../assets/images/about/aboutHeader.png";
import './AboutHeader.css'

const AboutHeader = () => {
    return (
        <>
            <div className="box about-box">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="rectangle-wrapper">
                                <div className="rectangle"/>
                            </div>
                            <img className="img" alt="Group" src={about}/>
                            <div className="group-2 about-group">
                                <h1 className="an-innovative-co">
                                    <span className="text-wrapper-2">We Are a place for creative and fun</span>
                                </h1>
                                <p className="p">
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit
                                    amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                    eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum
                                    dolor sit amet, consectetur
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutHeader;
