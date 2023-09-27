import React, {useState} from 'react';
import {Nav, Tab} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './BookingSummary.css';
import {FaRegCheckCircle, FaRegCircle} from 'react-icons/fa';
import callender from '../../../../../assets/images/icons/licalender.svg';
import user from '../../../../../assets/images/icons/userstwo.svg';
import clockTime from '../../../../../assets/images/icons/lialarm.svg';
import handMoney from '../../../../../assets/images/icons/hand-money.svg';
import userplus from '../../../../../assets/images/icons/userplus.svg';
import starshand from '../../../../../assets/images/icons/starshand.svg';
import map from '../../../../../assets/images/icons/mapPoint.svg';
import share from '../../../../../assets/images/icons/share.svg';
import shape from "../../../../../assets/images/VectorRight.png";
import cash from '../../../../../assets/images/icons/Cash.svg';
import wallet from '../../../../../assets/images/icons/Credit.svg';
import Media from "../../../../Media/Media";

const BookingSummary = () => {
    const steps = [
        {key: 'summary', label: 'Summary Booking'},
        {key: 'payment', label: 'Payment Method'},
        {key: 'invoice', label: 'Invoice Details'},
    ];

    const [activeStep, setActiveStep] = useState(0);

    const handleTabSelect = (step) => {
        if (step <= activeStep) {
            setActiveStep(step);
        }
    };

    const handleBookingClick = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    const renderTabLink = (step, index) => {
        const isActive = activeStep === index;
        const isChecked =
            index <= activeStep ? (
                <span className="check-circle">
          <FaRegCheckCircle/>
        </span>
            ) : (
                <span className="check-circle">
          <FaRegCircle/>
        </span>
            );

        const isDisabled = index > activeStep;

        return (
            <Nav.Link
                key={step.key}
                eventKey={step.key}
                disabled={isDisabled}
                onSelect={() => handleTabSelect(index)}
            >
                <div
                    className={`tab-link ${isActive ? 'active' : ''}`}
                    style={{cursor: isDisabled ? 'not-allowed' : 'pointer'}}
                >
                    {isChecked}
                    {step.label}
                </div>
            </Nav.Link>
        );
    };

    return (
        <>
            <section className="summary">
                <div className="position-relative">
                    <Media
                        type="img"
                        src={shape}
                        alt="shape" className="position-absolute"
                        style={{top: "125px", right: "0", width: "100px"}}/></div>
                <div className="container">

                    <Tab.Container activeKey={steps[activeStep]?.key} onSelect={handleTabSelect}>
                        <Nav variant="tabs" className="mb-4">
                            {steps.map((step, index) => (
                                <Nav.Item key={step.key}>{renderTabLink(step, index)}</Nav.Item>
                            ))}
                        </Nav>
                        <Tab.Content>
                            {steps.map((step) => (
                                <Tab.Pane key={step.key} eventKey={step.key}>

                                    <h2 className="step-label">{step.label}</h2>
                                    {step.key === 'summary' && (
                                        <>

                                            <div className="summary-bg">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="box-summary">
                                                            <div className="head-box-summary">
                                                                <span>Summary</span>
                                                                <h2>Meeting Room 01</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 border-right">
                                                        <ul className="list-details">
                                                            <li>
                                                                <Media
                                                                    type="img" src={callender}/>
                                                                Sunday, Feb. 2 , 2023
                                                            </li>
                                                            <li>
                                                                <Media
                                                                    type="img" src={clockTime}/>
                                                                09:00 PM - 12:00 PM (3 hours )
                                                            </li>
                                                            <li>
                                                                <Media
                                                                    type="img" src={user}/>
                                                                3 People
                                                            </li>
                                                            <li>
                                                                <Media
                                                                    type="img" src={handMoney}/>
                                                                15.000 EGP
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                                                        <ul className="list-details">
                                                            <li>
                                                                <Media
                                                                    type="img" src={map}/>
                                                                El-Sheikh Zayed - Giza
                                                            </li>
                                                            <li>
                                                                <Media
                                                                    type="img" src={starshand}/>
                                                                Screen , Printing
                                                            </li>
                                                            <li>
                                                                <Media
                                                                    type="img" src={userplus}/>
                                                                https://www.oz coworking space.com
                                                                <Media
                                                                    type="img" src={share}
                                                                    style={{width: "48px", height: "48px"}}/>
                                                            </li>

                                                        </ul>
                                                    </div>


                                                </div>

                                            </div>
                                            <div className="terms">
                                                <a className="btn " href="#"
                                                >Term&conditions Apply
                                                </a>
                                            </div>
                                            <div className="step-one">
                                                <button className="btn button-outLine btn-bg-white"
                                                        onClick={handleBookingClick}>Booking
                                                </button>
                                            </div>

                                        </>
                                    )}
                                    {step.key === 'payment' && (
                                        <>
                                            <div className="payment-bg">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="box-summary">
                                                            <div className="head-box-summary">
                                                                <span>Choose Payment Method</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-6 col-sm-12 ">
                                                        <div className="form-payment">
                                                            <Form>
                                                                <div
                                                                    className="d-flex align-items-center method-payment">
                                                                    <Media
                                                                        type="img" src={cash}/>
                                                                    <Form.Check
                                                                        type="radio"
                                                                        label="Option 1"
                                                                        name="radioOptions"
                                                                        id="radioOption1"
                                                                        className="col-12"
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center method-payment">
                                                                    <Media
                                                                        type="img" src={wallet}/>
                                                                    <Form.Check
                                                                        type="radio"
                                                                        label="Option 2"
                                                                        name="radioOptions"
                                                                        id="radioOption2"
                                                                        className="col-12"
                                                                    />
                                                                </div>
                                                                <div className="step-one">
                                                                    <button className="btn button-outLine btn-bg-white"
                                                                            onClick={handleBookingClick}>Confirm
                                                                    </button>
                                                                </div>
                                                            </Form>

                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        </>
                                    )}
                                    {step.key === 'invoice' && (
                                        <>

                                            <div className="">
                                                <div className="row">

                                                    <div className="col-lg-6 col-md-6 col-sm-12 order-summary">
                                                        <div className="order-details">
                                                            <h2>Amount Due<br/> #1123334</h2>
                                                            <div
                                                                className="d-flex align-items-center justify-content-between">
                                                                <span
                                                                    className="date-period">Date Period: Feb 2 , 2023<br/>
                                                                    <span
                                                                        className="invoice">Invoice</span></span>
                                                                <span className="location">OZ Working space El- sheikh- zayed Giza, Egypt </span>
                                                            </div>
                                                        </div>
                                                        <div className="order-description">
                                                            <div className="pill">
                                                                <div
                                                                    className="d-flex align-items-center justify-content-between line">
                                                                <span
                                                                    className="date-period">Description</span>
                                                                    <span className="location">Subtotal</span>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center justify-content-between item-box ">
                                                                  <span
                                                                      className="item-name">Meeting room 01</span>
                                                                    <span className="item-price">
                                                                    <del>1125 EGP</del><br/>
                                                                    1100 EGP

                                                                </span>
                                                                </div>
                                                            </div>

                                                            <div
                                                                className="d-flex align-items-center justify-content-between line">
                                                                <span
                                                                    className="date-period">Tax 14%</span>
                                                                <span className="location">123.68 EGP</span>
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-center justify-content-between item-box">
                                                                  <span
                                                                      className="item-total">Total Price:</span>
                                                                <span className="item-total-price">
                                                                    1325 EGP
                                                                </span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 order-summary-black ">
                                                        <div className="order-details">
                                                            <div className="line">
                                                                <h2>Meeting room 01</h2>

                                                            </div>
                                                            <div className="booking-items">
                                                                <span>Date : Sunday, Feb. 2 , 2023</span>
                                                                <span>Time : 09:00 PM - 12:00 PM (3 hours )</span>
                                                                <span>Number of people : 3 People</span>
                                                                <span>Cash notes : Total payment due in 2 days.</span>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>

                                            </div>


                                        </>
                                    )}

                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </section>
        </>
    );
};

export default BookingSummary;
