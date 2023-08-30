import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {getListMembershipTypes} from '../../../apis/Api';
import Slider from "react-slick";
import MembershipTypesList from "./MembershipTypesList";
import {memberTypes} from '../../../Data/MemberTypesData';
import './MembershipTypes.css';

const MembershipTypes = () => {
    const [listMembershipsTypes, setListMembershipsTypes] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const result = await getListMembershipTypes();
    //             if (result && result.length) {
    //                 setListMembershipsTypes(result);
    //             } else {
    //                 console.error('No membership types found.');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching membership types:', error);
    //         }
    //     };
    //
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await getListMembershipTypes();
    //         setListMembershipsTypes(result);
    //         console.log(result);
    //     };
    //     fetchData();
    // }, []);


    useEffect(() => {
        async function fetchData() {
            try {
                const membershipTypes = await getListMembershipTypes();
                setListMembershipsTypes(membershipTypes);
                console.log('Membership Types:', membershipTypes);
                // Handle the membershipTypes data as needed
                console.log("good");
            } catch (error) {
                console.error('Error fetching membership types:', error);
            }
        }

        fetchData();
    }, []);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        adaptiveHeight: true,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    };

    return (
        <>

            {/*// <!--Start Our Membership Types-->*/}
            <section className="membership-types   ">
                <Container fluid>
                    <Row>
                        <div className="col-lg-12 border-bottom">
                            <div className="head-content-sec">
                                <h2 className="h2-text">Types</h2>
                            </div>
                        </div>
                        <Col lg={12}>
                            <h2 className="h2-text-bold">Membership individual</h2>
                            <Slider {...settings}>
                                {memberTypes.map((listMembershipType, index) => {
                                    const {id, name, logo, link, description, img} = listMembershipType;
                                    return (
                                        <div key={index}>
                                            <MembershipTypesList
                                                id={id}
                                                name={name}
                                                logo={logo}
                                                link={link}
                                                description={description}
                                                img={img}
                                            />
                                        </div>
                                    );
                                })}
                            </Slider>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className="border-bottom py-5">
                            <h2 className="h2-text-bold">Membership Corporate</h2>
                            <Slider {...settings}>
                                {memberTypes.map((listMembershipType, index) => {
                                    const {id, name, logo, link, description, img} = listMembershipType;
                                    return (
                                        <div key={index}>
                                            <MembershipTypesList
                                                id={id}
                                                name={name}
                                                logo={logo}
                                                link={link}
                                                description={description}
                                                img={img}
                                            />
                                        </div>
                                    );
                                })}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*// <!--END Section-->*/}
        </>
    );
};

export default MembershipTypes;
