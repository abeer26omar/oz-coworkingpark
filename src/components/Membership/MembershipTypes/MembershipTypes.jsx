import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import axios from 'axios';
import Slider from "react-slick";
import MembershipTypesList from "./MembershipTypesList";
const MembershipTypes = () => {
    const [listMembershipsTypes, setListMembershipsTypes] = useState([]);

    // List Membership types API
    let axios = require('axios');
    let FormData = require('form-data');
    let data = new FormData();
    data.append('server_key', 'c04919f13f43b612fff3b76c5d08b2d6');

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://modest-banzai.78-141-219-156.plesk.page/api/list_membership_types?access_token=10b8d16368bdf5888ad890c73536ac25e00004c2e742813a131a99c13ae81d6bc257b2a935584948bdc8b08ca966b6626e1f186f03c9a060',
        // headers: {
        //     ...data.getHeaders()
        // },
        data : data
    };

    const GetMembershipTypes = () => {

        axios(config)
            .then(function (response) {
                setListMembershipsTypes(response.data.data);
                console.log(JSON.stringify(response.data));
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    };
    useEffect(()=>{
        GetMembershipTypes();
    },[])


    // Start Slider Sittings
    const settings =  {
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
    // End Slider Sittings
    return (
        <>

            {/*// <!--Start Our Membership Types-->*/}
            <section className="membership-types p-60">
                <Container fluid >
                    <Row>
                        <Col lg={12}>
                            <div className="head-content">
                                <h2 className="large-head text-center mb-5">Our Membership Types</h2>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Slider {...settings}>
                                {listMembershipsTypes.map((listMembershipType, index) => {
                                        const {id, name, logo, link, description} = listMembershipType;
                                        return(
                                            <div key={index}>
                                                <MembershipTypesList  id={id} name={name} logo={logo} link={link} description={description}/>
                                            </div>
                                        )
                                    }
                                )}
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
