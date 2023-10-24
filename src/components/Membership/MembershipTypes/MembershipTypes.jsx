import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import MembershipTypesSlider from "./MembershipTypesSlider";
import Paragraph from '../../UI/Paragraph';
import './MembershipTypes.css';

const MembershipTypes = (props) => {
    return (
        <>
            <section className={`membership-types ${props.className}`}>
                <Container fluid>
                    <Row>
                        <div className="col-lg-12 border-bottom border-top ">
                            <div className="head-content-sec text-center">
                                <Paragraph className="h2-text">{props.headTitle}</Paragraph>
                            </div>
                        </div>
                        <Col lg={12}>
                            <Paragraph className="h2-text-bold">{props.Membership_type}</Paragraph>
                            <MembershipTypesSlider />
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    );
};

export default MembershipTypes;
