import React, {useEffect, useState} from 'react';
import at_oz from "../../../../assets/images/at_oz.png";
import {Link, useParams} from "react-router-dom";
import './MemberPackage.css';
import vector from "../../../../assets/images/Vector.png";
import Media from "../../../Media/Media";
import {getMembershipOptions} from "../../../../apis/Api";
import MemberPackageHeader from "./MemberPackageHeader";

const MemberPackage = () => {
    const {id} = useParams();
    const [memberName, setMemberName] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await getMembershipOptions();
            setMemberName(result);
            console.log(result);
        }
        fetchData();
    }, [id]);

    // Make Function FilteredOptions to Get only on ID Properties not all
    const filteredOptions = memberName.flatMap(function (type) {
        return type.options.map(function (option) {
            return {
                ...type, // include all the properties of the type object
                ...option,// include all the properties of the option object
                typeId: type.id,
                typeDescription: type.description,
                typeName: type.name,
                typePrice: type.price,
                optionId: option.id,
                optionType: option.type,
                optionImage: option.image,
                optionPrice: option.price,
                optionDescription: option.description,


            };
        });
    }).filter(function (option) {
        return option.optionId === `${id}`

    })

    return (
        <>
            {filteredOptions.map((option, index) => {
                const {
                    id,
                    typeName,
                    optionId,
                    optionType,
                    optionImage,
                    optionDescription
                } = option;
                return (
                    <>
                        <MemberPackageHeader key={index} id={id} typeName={typeName} optionImage={optionImage}
                                             optionId={optionId} optionType={optionType}
                                             optionDescription={optionDescription}/>
                    </>
                )
            })}


            <section className="at_oz">
                <div className="container-fluid">
                    <div className="row ">
                        <div className=" col-md-6 col-lg-6 col-sm-6 col-xs-6 m-auto ">
                            <div className="box-content px-60">
                                <h2 className="h2-text-box">I'LL BE AT OZ</h2>
                                <p className="p-text-box">
                                    Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, L
                                </p>
                                <Link to="" className="btn button-outLine m-auto">
                                    Apply
                                </Link>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-6 col-sm-6 col-xs-6 d-flex justify-content-center align-items-center">
                            <Media
                                type="img"
                                className="image-box w-75"
                                src={at_oz}
                                alt="Our OZ Vision"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="what-get p-60">
                <div className="position-relative mb-5" style={{height: "185px"}}>
                    <Media
                        type="img" src={vector} className="position-absolute"
                        style={{top: "0px", left: "0", width: "100px"}} alt="shape"/>
                    <div className="head-content-left-shape text-left  position-absolute"
                         style={{top: "40px", left: "100px"}}>
                        <h3 className="bold-head mb-4 ">What you'll get</h3>
                        <p className="text-content text-secondary">Lorem ipsum dolor sit amet, consectetur
                            dipiscing elit eius mod tempor incididunt ut labore </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/*<div className="head-content-left-shape text-left pb-3 position-relative">*/}
                            {/*    <h3 className="bold-head pb-5">What you'll get</h3>*/}
                            {/*    <p className="text-content text-secondary">Lorem ipsum dolor sit amet, consectetur*/}
                            {/*        dipiscing elit eius mod tempor incididunt ut labore </p>*/}
                            {/*</div>*/}
                        </div>

                        {filteredOptions.map((option, index) => {
                            const {amenities} = option;
                            return (
                                <div className="col-lg-6 col-md-6 col-sm-12 py-3 border-all">

                                    {amenities.map((amenity) => (
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center w-50">
                                                <Media
                                                    type="img" src={amenity.logo} alt={amenity.title}/>
                                                <h2 className="bold-head mt-3">{amenity.title}</h2>
                                            </div>
                                            {/*<p className="text-content text-left mt-4">{amenities.title}</p>*/}
                                        </div>
                                    ))}
                                </div>
                            );
                        })};
                    </div>
                </div>
            </section>


        </>
    );
};

export default MemberPackage;
