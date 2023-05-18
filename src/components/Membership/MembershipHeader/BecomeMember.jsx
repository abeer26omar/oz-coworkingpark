import React from 'react';
import './BecomeMember.css';
import {Col, Container, Figure, Row} from "react-bootstrap";

// Import Images
import workingSpace from '../../../assets/images/workingSpace.png';
import vectorRight from '../../../assets/images/VectorRight.png';
import sofa from '../../../assets/images/sofa.png';
const BecomeMember = () => {
    return (
        <>
            {/*<!--Start Become a member-->*/}
            <section className="become-member p-60">
                <Container>
                    <Row>
                        <Col lg={7} sm={12} className="m-auto">
                            <div className="head-content">
                                <h1 className="hand-write">Become a member</h1>
                                <h2 className="large-head mb-4">Flexible working space solutions</h2>
                                <p className="text-content">Lorem ipsum dolor sit amet, consecrate ipsum dolor sit amet, consecrate ipsum dolor sit amet, consecrate ipsum dolor sit amet, Lorem ipsum dolor sit amet, consecrate</p>
                            </div>
                        </Col>
                        <Col lg={5} sm={12}>
                            <Figure className="figure d-flex position-relative">
                                <span className=" caption-rotate">Membership</span>
                                <img src={workingSpace} className="figure-img img-fluid" alt="Working Space"/>
                            </Figure>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <!--End Become a member-->*/}
            {/*<!--Start  COMMUNITY FOR CREATORS-->*/}
            <section className="community-creators p-60 ">
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className="m-auto">
                            <div className="head-content">
                                <h2 className="large-head mb-5">A COMMUNITY FOR CREATORS, INNOVATORS & THOUGHT LEADERS</h2>
                                <p className="text-content">
                                    Lorem ipsum dolor sit amet, consecrate Lorem ipsum dolor sit amet, consecrate Lorem ipsum dolor sit amet, consecrate ipsum dolor sit amet, Lorem ipsum dolor sit amet, consecrate ipsum dolor sit amet, consecrate ipsum dolor sit amet, consecrate ipsum dolor sit amet,
                                    Lorem ipsum dolor sit amet, consecrate Lorem ipsum dolor sit amet, consecrate Lorem ipsum dolor sit amet, consecrate ipsum dolor sit amet, Lorem ipsum dolor sit amet, consecrate ipsum dolor sit amet, consecrate ipsum dolor sit amet, consecrate ipsum dolor sit amet, L
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            {/*// <!--                <div className="d-flex justify-content-between images-creators">-->*/}
                            {/*// <!--                    <img src="src/assets/images/sofa.png" alt="oz" className="w-100 mt-5 p-1 ">-->*/}
                            {/*// <!--                    <img src="src/assets/images/spaces.png" alt="oz" className="w-100 mb-5 p-1">-->*/}
                            {/*// <!--                </div>-->*/}
                            <img src={sofa} alt="sofa" className="w-100"/>
                        </Col>
                    </Row>
                </Container>
                <div className="position-relative">
                    <img src={vectorRight} alt="shape" className="position-absolute" style={{top: "0",right: "0",width: '100px'}}/>
                </div>
            </section>
            {/* <!--End COMMUNITY FOR CREATORS-->*/}
        </>
    );
};

export default BecomeMember;