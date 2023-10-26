import React from 'react';
import {Container, Row} from 'react-bootstrap';
import MembershipTypesSlider from "./MembershipTypesSlider";
import MembershipTypesSliderCorporate from './MembershipTypesSliderCorporate';
import './MembershipTypes.css';

const MembershipTypes = (props) => {
    return (
        <>
            <section className={`membership-types ${props.className}`}>
                <Container fluid>
                    <Row>
                        <div className="col-lg-12 border-bottom border-top ">
                            <div className="head-content-sec text-center">
                                <h2 className="h2-text">For individual</h2>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <h2 className="h2-text-bold">Membership individual</h2>
                            <MembershipTypesSlider />
                        </div>
                    </Row>

                </Container>
            </section>
            <section className={`membership-types ${props.className}`}>
                <Container fluid>
                    <Row>
                        <div className="col-lg-12 border-bottom border-top ">
                            <div className="head-content-sec text-center">
                                <h2 className="h2-text">For Corporate</h2>
                            </div>
                        </div>
                        <div className='col-xxl-10 col-lg-12 mx-auto'>
                            <h2 className="h2-text-bold">Spaces Corporate</h2>
                            <MembershipTypesSliderCorporate />
                        </div>
                    </Row>

                </Container>
            </section>
        </>
    );
};

export default MembershipTypes;
