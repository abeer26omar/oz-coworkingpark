import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './MebershipOptions.css';
import './Membership.css';
import MembershipOptionsList from "./MembershipOptionsList";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import vectorRight from "../../../assets/images/VectorRight.png";
import MembershipOptionsHeaderList from "./MembershipOptionsHeaderList";
import MembershipCompared from "../MembershipsCompared/MembershipCompared";
import Services from "../Services/Services";
const MembershipOptions = () => {
    const { id } = useParams();

    const [listMembershipsTypes, setListMembershipsTypes] = useState([]);

    // List Membership types API
    let axios = require("axios");
    let FormData = require("form-data");
    let data = new FormData();
    data.append("server_key", "c04919f13f43b612fff3b76c5d08b2d6");

    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `https://modest-banzai.78-141-219-156.plesk.page/api/list_membership_types?access_token=10b8d16368bdf5888ad890c73536ac25e00004c2e742813a131a99c13ae81d6bc257b2a935584948bdc8b08ca966b6626e1f186f03c9a060&id=${id}`,        data: data,
    };

    const GetOptionTypes = () => {
        axios(config)
            .then(function (response) {
                setListMembershipsTypes(response.data.data);
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        GetOptionTypes();
    }, [id]);

    // const filteredOptions = listMembershipsTypes.flatMap((type) => type.options.filter((option) => option.id === `${id}`));
    // const filteredOptions = listMembershipsTypes.flatMap(function(type) {
    //     return type.options.map(function(option) {
    //         return {
    //             id: option.id,
    //             type: option.type,
    //             logo: option.logo,
    //             cancellation_policy: option.cancellation_policy,
    //             typeId: type.id,
    //
    //         };
    //     }).concat({
    //         id: type.id,
    //         type: type.type,
    //         logo: type.logo,
    //         cancellation_policy:type.description
    //         // typeId: type.id
    //     });
    // }).filter(function(option) {
    //     return option.typeId === `${id}`;
    // });
    // console.log(filteredOptions);

    // Make Function FilteredOptions to Get only on ID Properties not all
    const filteredOptions = listMembershipsTypes.flatMap(function(type) {
        return type.options.map(function(option) {
            return {
                ...type, // include all the properties of the type object
                ...option, // include all the properties of the option object
                typeId: type.id,

            };
        });
    }).filter(function(option) {
        return option.typeId === `${id}`;
    })



    //Slick Slider Settings
    const  settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    }

    return(
        <>
            {/*Start membership Slider*/}
            <section className="become-member-slider">
                <Container fluid>
                    <Row>
                        <Col lg={12} className="p-0 ">
                            <Slider {...settings} className=" background-cover">
                                {filteredOptions.map((option, index) => {
                                    const {id, name, description , image , typeDescription} = option;
                                    return(
                                        <>
                                        <MembershipOptionsHeaderList id={id} typeDescription={typeDescription}  description={description} name={name} image={image}/>
                                        </>
                                )
                                })}
                            </Slider>
                            <div className="d-flex justify-content-end position-relative shape-right">
                                <img src={vectorRight} className="position-absolute" alt="shape"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*END Membership Slider*/}


            {/*Start Memberships Types*/}
            <section className="Individual-types p-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="head-content pb-5">
                            <h2 className="hand-write text-center p-0">Individual Option</h2>
                        </div>
                    </div>
                        {filteredOptions.map((option, index) => {
                    const { id, type, logo, name, typeId, image, price } = option;
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-12 my-1">
                            <MembershipOptionsList id={id} typeId={typeId} logo={logo} name={name} type={type} image={image} price={price}/>
                        </div>
                    );
                })}

                    </div>
            </div>
        </section>
            {/*END Memberships Types*/}

            {/*Start Membership Compared*/}
            <MembershipCompared/>
            {/*END Membership Compared*/}

            {/*Start Membership Services*/}
            <Services/>
            {/*END Membership Services*/}
            </>
);


};

export default MembershipOptions;
