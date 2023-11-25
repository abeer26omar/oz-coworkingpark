import { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './MebershipOptions.css';
import './Membership.css';
import { Container, Row } from "react-bootstrap";
import { getMembershipOptions } from "../../../apis/MembershipApi";
import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
import vector from "../../../assets/images/vectorRight.svg";
import Paragraph from '../../UI/Paragraph';
import Media from "../../Media/Media";
import check_yes from '../../../assets/images/check_yes.svg';
import check_no from '../../../assets/images/check_no.svg';
import MembershipTypesSlider from '../MembershipTypes/MembershipTypesSlider';
import MembershipTypesSliderCorporate from '../MembershipTypes/MembershipTypesSliderCorporate';
import Button from '../../UI/Button';
import { AuthContext } from '../../../apis/context/AuthTokenContext';

const MembershipOptions = () => {

    const {id} = useParams();
    const [typeDetials, setTypeDetials] = useState();
    const {token} = useContext(AuthContext);

    useEffect(()=>{
        const getMemebershipDetails = async () => {
            try {
                const result = await getMembershipOptions(token, id);
                setTypeDetials(result);
            }catch (err){console.log(err)}
        }
        getMemebershipDetails();
    },[token, id]);

    const calcDiscount = (price, discount) => {
        const priceDicounted =  price * discount / 100;
        return price-priceDicounted;
    }

    const setSlectedMemebershipDetails = (type, price, discount, description, time) => {
       const selectedPlan = {
            mainPlan: typeDetials?.name,
            selectedPackage: type,
            price: price,
            priceDicounted: calcDiscount(price, discount),
            description: description,
            time: time
       } 
       sessionStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));
    }
    return (
        <>
            <MainHeaderWrapper image={typeDetials?.logo}>
                <div className="container-fluid px-70 py-5">
                    <div className="col-md-6 col-12">
                        <h1 className="main_header mb-0">{typeDetials?.is_individual === '1' ? 'individulal' : 'corporate'}</h1>
                        <h2 className="head_paragraph mb-3">{typeDetials?.name}</h2>
                        <Paragraph className="description mb-0">{typeDetials?.description}</Paragraph>
                    </div>
                </div>
            </MainHeaderWrapper>
                        <div className ='position-relative'>
                            <div className='img_float'>
                                <Media
                                    type="img" 
                                    src={vector}
                                    width='100%'
                                    alt="shape"/>
                            </div>
                        </div>
                        <div className='container-fluid px-70 pt-5'>
                            <div className='col-lg-6 pt-70'>
                                <h1>Description Membership</h1>
                                <Paragraph className='opacity-75'>{typeDetials?.description}</Paragraph>
                            </div>
                        </div>
                        <section className="Individual-types p-60">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="head-content-sec border-top border-bottom">
                                            <h2 className="h2-text text-center">Days of Access</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <div className="membershipOptionsList container">
                                        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-3 align-items-center justify-content-center'>
                                            {typeDetials &&
                                                typeDetials.options.map((item, index)=>{
                                                    return(
                                                        <div className='col d-flex justify-content-center' key={index}>
                                                            <div className='card h-100'>
                                                                <div className='card-header'>
                                                                    <span>{typeDetials?.name}</span>
                                                                    <h1 className='py-3'>{item.type}</h1>
                                                                    <span className='px-2 discount'>{item.price} / {item.time}</span>
                                                                    <span className='mb-0 priceafter'>{calcDiscount(item.price, item.discount)} / {item.time}</span>
                                                                </div>
                                                                <div className='card-body'>
                                                                    <Paragraph>Your Plan Benefits</Paragraph>
                                                                    {/* <ul className=''>
                                                                        {
                                                                            item.Benefits.map(e=>{
                                                                                return  (
                                                                                    <li>
                                                                                        <Media type='img' src={e.value === 'YES' ? check_yes : check_no} alt='check_mark' />
                                                                                        <span className='ps-3'>{e.name}</span>
                                                                                    </li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul> */}
                                                                </div>
                                                                <div className='card-footer'>
                                                                    <div className='row row-cols-xxl-4 row-cols-lg-2 g-3' style={{
                                                                        marginRight: '15px'
                                                                    }}>
                                                                        {item.amenities.slice(0,4).map((item, index)=>{
                                                                            return (
                                                                                <div className='col d-flex flex-column align-items-center' key={index}>
                                                                                    <Media type='img' src={item.icon} alt={item.name} className='mb-3' />
                                                                                    <span className='amenity_title'>{item.key}</span>
                                                                                </div>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                    <div className='text-center mt-4'>
                                                                        <Button 
                                                                            tagType='link'
                                                                            to={`/singleMember/${item.id}`}
                                                                            onClick={()=>{sessionStorage.setItem('membership', typeDetials?.name)}}
                                                                            className='ex_link mb-3'>{'explore more'}</Button>
                                                                        <Button 
                                                                            tagType='link'
                                                                            to={`/joinus`}
                                                                            onClick={setSlectedMemebershipDetails(item.type, item.price, item.discount, item.description, item.time)}
                                                                            className='btn_outline_black d-block auth_btn_padding'>{'apply'}</Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        {/* {listMembershipsTypes.map((option, index) => {
                                            const {id, type, logo, name, typeId, image, price} = option;
                                            return (
                                                <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                                                    <MembershipOptionsList id={id} typeId={typeId} logo={logo} name={name}
                                                                        type={type}
                                                                        image={image} price={price}/>
                                                </div>
                                            );
                                        })}
                */}

                                    </div>
                                </div>
                            </div>
                        </section>
            <section className={`membership-types mb-5`}>
                <Container fluid>
                    <Row>
                        <div className="col-lg-12 border-bottom border-top ">
                            <div className="head-content-sec text-center">
                                <h2 className="h2-text">Other Types</h2>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <h2 className="h2-text-bold">Other Membership {typeDetials?.is_individual === '1' ? 'individulal' : 'corporate'}</h2>
                            {typeDetials?.is_individual === '1' ? (
                                <MembershipTypesSlider />
                            ) : (
                                <MembershipTypesSliderCorporate />
                            )}
                        </div>
                    </Row>

                </Container>
            </section> 
        </>
    );


};

export default MembershipOptions;
