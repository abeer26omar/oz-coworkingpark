import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {getListMembershipTypes} from '../../../apis/Api';
import Slider from "react-slick";
import MembershipTypesList from "./MembershipTypesList";
import './MembershipTypes.css';

const MembershipTypes = (props) => {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        adaptiveHeight: true,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 3,
                settings: "unslick",

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    };
    const renderSlider = () => {
        if (listMembershipsTypes.length <= 4) {
            // Don't render a slider if there are less than 3 slides.
            return (
                <div className="row">

                    {listMembershipsTypes.map((listMembershipType, index) => {
                        const {id, name, logo, link, description, img} = listMembershipType;
                        return (
                            <div className="col-lg-3" key={id}>

                                <MembershipTypesList
                                    key={index}
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
                </div>
            );
        } else {
            return (
                <Slider {...settings}>
                    {listMembershipsTypes.map((listMembershipType, index) => {
                        const {id, name, logo, link, description, img} = listMembershipType;
                        return (
                            <div className="row">
                                <div className="col-lg-12" key={index}>
                                    <MembershipTypesList
                                        id={id}
                                        name={name}
                                        logo={logo}
                                        link={link}
                                        description={description}
                                        img={img}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            );
        }
    };

    return (
        <>

            {/*// <!--Start Our Membership Types-->*/}
            <section className={`membership-types ${props.className}`}>
                <Container fluid>
                    <Row>
                        <div className="col-lg-12 border-bottom border-top ">
                            <div className="head-content-sec text-center">
                                <h2 className="h2-text">{props.headTitle}</h2>
                            </div>
                        </div>
                        <Col lg={12}>
                            <h2 className="h2-text-bold">Membership individual</h2>
                            {renderSlider()}
                        </Col>
                    </Row>

                </Container>
            </section>
            {/*// <!--END Section-->*/}
        </>
    );
};

export default MembershipTypes;
