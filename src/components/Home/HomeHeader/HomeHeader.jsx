import React, {useEffect, useState} from 'react';
import './HomeHeader.css';
import headVideo from '../../../assets/images/videos/header.mp4';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const HomeHeader = () => {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        // Start the video playing from the beginning
        setCurrentTime(0);
    }, []);
    const handleClose = () => setShow(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            <div className="box">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="rectangle-wrapper">
                                <div className="rectangle"/>
                            </div>

                            <video className="img" alt="Group" src={headVideo} autoPlay muted loop/>
                            <div className="group-2 home-group">
                                <h1 className="an-innovative-co">
                                    <span className="text-wrapper">An Innovative</span>
                                    <span className="span"> <br/></span>
                                    <span className="text-wrapper-2">co-working space</span>
                                </h1>
                                <p className="p">
                                    Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit
                                    amet, consectetuerLorem ipsum dolor sit amet,
                                </p>
                            </div>
                            <div className="frame">
                                <div className="">
                                    <a href="#" className="btn btn-header">
                                        Explore More
                                    </a>
                                </div>
                            </div>

                            <div className="video-button">

                                <Button variant="transparent" onClick={handleShow} className="d-flex play-modal">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_b_2905_25554)">
                                            <path
                                                d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                                fill="white"/>
                                        </g>
                                        <path
                                            d="M8.99219 13.7144V10.18C8.99219 8.67335 8.99219 7.92001 9.4829 7.62962C9.97362 7.33922 10.634 7.70177 11.9547 8.42688L14.9841 10.0901C16.3226 10.8249 16.9919 11.1924 17.0066 11.7668C17.0213 12.3412 16.3717 12.7424 15.0726 13.5448L12.0432 15.416C10.6931 16.2499 10.018 16.6668 9.5051 16.3807C8.99219 16.0947 8.99219 15.3012 8.99219 13.7144Z"
                                            fill="#1D2130"/>
                                        <defs>
                                            <filter id="filter0_b_2905_25554" x="-80" y="-80" width="184" height="184"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="40"/>
                                                <feComposite in2="SourceAlpha" operator="in"
                                                             result="effect1_backgroundBlur_2905_25554"/>
                                                <feBlend mode="normal" in="SourceGraphic"
                                                         in2="effect1_backgroundBlur_2905_25554" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                    <div className="text-wrapper-4 mx-2">Play Video</div>
                                </Button>

                                <Modal
                                    show={show}
                                    fullscreen={fullscreen}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                    backdropClassName="custom-backdrop"
                                >
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <video className="img w-100" alt="Group" src={headVideo} autoPlay muted loop/>

                                    </Modal.Body>

                                </Modal>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHeader;
