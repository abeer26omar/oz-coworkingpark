import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './MebershipOptions.css';
import './Membership.css';
import MembershipOptionsList from "./MembershipOptionsList";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import vectorRight from "../../../assets/images/VectorRight.png";
import MembershipOptionsHeaderList from "./MembershipOptionsHeaderList";
import MembershipCompared from "../MembershipsCompared/MembershipCompared";
import {getMembershipOptions} from "../../../apis/Api";
import Media from "../../Media/Media";
import MembershipTypes from "../MembershipTypes/MembershipTypes";

const MembershipOptions = () => {
    const {id} = useParams();

    const [listMembershipsTypes, setListMembershipsTypes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getMembershipOptions();
            setListMembershipsTypes(result);
            console.log(result);
        };
        fetchData();
    }, [id]);


    // Make Function FilteredOptions to Get only on ID Properties not all
    const filteredOptions = listMembershipsTypes.flatMap(function (type) {
        return type.options.map(function (option) {
            return {
                ...type, // include all the properties of the type object
                ...option, // include all the properties of the option object
                typeId: type.id,
                typeDescription: type.description

            };
        });
    }).filter(function (option) {
        return option.typeId === `${id}`
    })


    //Slick Slider Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    }

    return (
        <>
            {/*Start membership Slider*/}
            <section className="become-member-slider">
                <Container fluid>
                    <Row>
                        <Col lg={12} className="p-0 ">
                            <Slider {...settings} className=" background-cover">
                                {filteredOptions.map((option, index) => {
                                    const {id, name, description, image, typeDescription} = option;
                                    return (
                                        <>
                                            <MembershipOptionsHeaderList id={id} typeDescription={typeDescription}
                                                                         description={description} name={name}
                                                                         image={image}/>
                                        </>
                                    )
                                })}
                            </Slider>
                            <div className="d-flex justify-content-end position-relative shape-right">
                                <Media
                                    type="img" src={vectorRight} className="position-absolute" alt="shape"/>
                            </div>
                        </Col>

                        <Col lg={12}>
                            {filteredOptions.slice(0, 1).map((option, index) => {
                                const {typeDescription, id,} = option;
                                return (
                                    <div className="col-lg-6" key={id}>
                                        <div className="desc-membership">
                                            <h2 className="large-head">Description Membership</h2>
                                            <p>{typeDescription}</p>
                                        </div>

                                    </div>
                                );
                            })}


                        </Col>


                    </Row>
                </Container>
            </section>
            {/*END Membership Slider*/}


            {/*Start Memberships Types*/}
            <section className="Individual-types p-60">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head-content-sec  border-top border-bottom">
                                <h2 className="h2-text">Days of Access</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row membershipOptionsList">
                        {filteredOptions.map((option, index) => {
                            const {id, type, logo, name, typeId, image, price} = option;
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                                    <MembershipOptionsList id={id} typeId={typeId} logo={logo} name={name}
                                                           type={type}
                                                           image={image} price={price}/>
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

            {/*/!*Start Membership Services*!/*/}
            {/*<Services/>*/}
            {/*/!*END Membership Services*!/*/}
            <MembershipTypes headTitle="Other Types" className="mb-5"/>
        </>
    );


};

export default MembershipOptions;
