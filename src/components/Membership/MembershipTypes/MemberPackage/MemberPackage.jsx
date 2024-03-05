import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import at_oz from "../../../../assets/images/at_oz.png";
import { useParams, useNavigate } from "react-router-dom";
import './MemberPackage.css';
import vector from "../../../../assets/images/Vector.png";
import Media from "../../../Media/Media";
import MainHeaderWrapper from '../../../UI/MainHeaderWrapper';
import Paragraph from '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import { AuthContext } from '../../../../apis/context/AuthTokenContext';
import { getSingleItemById } from '../../../../apis/User';
import ApplyPlanModal from '../../MembershipOptions/ApplyPlanModal';
import HouseServices from '../../../Houses/HousesDetails/HouseServices/HouseServices';
import {upgradePlan} from '../../../../apis/User';
import { Modal } from 'antd';

const MemberPackage = () => {
    const {id} = useParams();
    const [packageDetails, setPackageDetails] = useState({});
    const [membershipType, setMemebershipType] = useState(sessionStorage.getItem('membership'))
    const { token, userId } = useContext(AuthContext);
    const [show, setShow] = useState(false);

    const navigate = useNavigate(); 

    const handelHide = () => setShow(false);


    useEffect(()=>{

        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchEventData = async () => {
            try{
                const res = await getSingleItemById(token, 'membership', id, source);
                if (isMounted) {
                    setPackageDetails(res);
                }
            }catch (error){}
        }
        fetchEventData();

        return ()=>{
            isMounted = false;
            source.cancel();
        };
    },[token, id]);

    const calcDiscount = (price, discount) => {
        const priceDicounted =  price * discount / 100;
        return price-priceDicounted;
    }
    const upgradeYourPlan = async (plan_Id) => {
        try{
            const result = await upgradePlan(token, plan_Id);
                Modal.success({
                    title: result.status,
                    content: result.message_data,
                    footer: false,
                    centered: true,
                    closable: true,
                    maskClosable: true
                });
        }catch(error){
            Modal.error({
                title: error.response.data.status,
                content: error.response.data.message,
                footer: false,
                centered: true,
                closable: true,
                maskClosable: true
            });
        }
    };

    const setSlectedMemebershipDetails = (type, price, discount, website_description, time, time_count) => {
        const selectedPlan = {
            mainPlan: membershipType,
            selectedPackage: type,
            price: price,
            priceDicounted: calcDiscount(price, discount),
            website_description: website_description,
            time: time,
            time_count: time_count,
            discount: discount
       }
        sessionStorage.setItem('selectedPlanOZ', JSON.stringify(selectedPlan));
        if(token){
            if(time === 'day'){
                setShow(true)
            }else{
                if(id !== sessionStorage.getItem('userPlanIdOZ')){
                    upgradeYourPlan(id);
                }else{
                    Modal.error({
                        title: 'error',
                        content: 'You Already Joined This Plan',
                        footer: false,
                        centered: true,
                        closable: true,
                        maskClosable: true
                    });
                }
            }
        }else{
            navigate('/joinus');
        }
    };

    return (
        <>
            <MainHeaderWrapper image={packageDetails?.image}>
                <div className="container-fluid px-70">
                    <div className="col-md-6 col-12">
                        <h1 className="main_header_title mb-0">{membershipType}</h1>
                        <h2 className="head_paragraph mb-3">{packageDetails?.type}</h2>
                        <Paragraph className="description mb-0">{packageDetails?.description}</Paragraph>
                    </div>
                </div>
            </MainHeaderWrapper>
                <section className="at_oz">
                    <div className="container-fluid">
                        <div className="row justify-content-between">
                            <div className=" col-md-6 col-lg-6 col-sm-6 col-xs-6 m-auto ">
                                <div className="box-content px-60">
                                    <h2 className="h2-text-box">I'LL BE AT OZ</h2>
                                    <p className="p-text-box">{packageDetails?.description}</p>
                                    <div className='ps-3 dynamic_p' dangerouslySetInnerHTML={{ __html: packageDetails?.website_description }}></div>
                                        <Button 
                                            tagType='link'
                                            onClick={()=>setSlectedMemebershipDetails(packageDetails.type, packageDetails.price, packageDetails.discount, packageDetails.website_description, packageDetails.time, packageDetails.time_count)}
                                            className="btn_outline m-auto">
                                            Apply
                                        </Button>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 d-flex justify-content-end">
                                <Media
                                    type="img"
                                    className="image-box w-100"
                                    src={at_oz}
                                    alt="Our OZ Vision"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <HouseServices location_amenities={packageDetails.amenities} dark_theme={true}/>

                {/* <section className="what-get"> 
                    <div className="position-relative mb-5" >
                        <Media
                            type="img" src={vector} className="position-absolute m-0"
                            style={{top: "0px", left: "0", width: "100px"}} alt="shape"/>
                    </div>
                        <div className='container position-relative' style={{zIndex: '9'}}>
                            <div className="head-content-left-shape text-left">
                                <h3 className="bold-head mb-4 ">What you'll get</h3>
                                <p className="text-content text-secondary">We offer a wide range of amenities to support our members' personal and professional growth.</p>
                            </div>
                        </div>
                        <div className="container py-5">
                            <div className="row">
                                {packageDetails && packageDetails.amenities?.map((i, index) => {
                                    return (
                                        <div className="col-lg-6 col-md-6 col-sm-12 py-5 border-all" key={index}>
                                            <div className='row align-items-center'>
                                                <div className="col-6">
                                                    <div className="d-flex align-items-center">
                                                                        <img
                                                                            type="img" 
                                                                            src={i.logo} 
                                                                            alt={i.title}/>
                                                        <h2 className="bold_desc mb-0">{i.title}</h2>
                                                    </div>
                                                </div>
                                                <div className='col-6'>
                                                    <Paragraph className='mb-0 text-content text-secondary'>{i.notes}</Paragraph>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                    </div>
                        </div>
                </section> */}
            <ApplyPlanModal 
                show={show}
                onHide={handelHide}
                type={id}
            />
        </>
    );
};

export default MemberPackage;
