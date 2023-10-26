import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom";
import './MebershipOptions.css';
import './Membership.css';
import { Container, Row } from "react-bootstrap";
// import { getMembershipOptions } from "../../../apis/MembershipApi";
import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
import vector from "../../../assets/images/vectorRight.svg";
import Paragraph from '../../UI/Paragraph';
import Media from "../../Media/Media";
import { IndividualTypesList } from '../../../Data/IndividualsTypesData';
import check_yes from '../../../assets/images/check_yes.svg';
import check_no from '../../../assets/images/check_no.svg';
import MembershipTypesSlider from '../MembershipTypes/MembershipTypesSlider'
import MembershipOptionsList from "./MembershipOptionsList";
import Slider from "react-slick";
import MembershipOptionsHeaderList from "./MembershipOptionsHeaderList";
import MembershipCompared from "../MembershipsCompared/MembershipCompared";
import MembershipTypes from "../MembershipTypes/MembershipTypes";
import Button from '../../UI/Button';

const MembershipOptions = () => {
    const {id} = useParams();
// important for using api
    // const {data, error, isError} = useQuery({
    //     queryKey: ['membershipTypes'],
    //     queryFn: ()=>getMembershipOptions(id)
    // });

//Slick Slider Settings
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    // }
    return (
        <>
        {
            IndividualTypesList.filter(id => id === id).map((option, index) => {
                return (
                    <>
                        <MainHeaderWrapper image={option.image} key={index}>
                            <div className="container-fluid px-70 py-5">
                                <div className="col-md-6 col-12">
                                    <h1 className="main_header mb-0">{option.type}</h1>
                                    <h2 className="head_paragraph mb-3">{option.title}</h2>
                                    <Paragraph className="description mb-0">{option.head_description}</Paragraph>
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
                                <Paragraph className='opacity-75'>{option.description}</Paragraph>
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
                                <div className="membershipOptionsList">
                                    <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-3 align-items-center justify-content-center'>
                                        {
                                            option.options.map((item, index)=>{
                                                return(
                                                    <div className='col d-flex justify-content-center' key={index}>
                                                        <div className='card h-100'>
                                                            <div className='card-header'>
                                                                <span>{option.title}</span>
                                                                <h1 className='py-3'>{item.name}</h1>
                                                                <Paragraph className='mb-0'>{item.limit} days/week<span className='px-2'>{item.discount}</span></Paragraph>
                                                            </div>
                                                            <div className='card-body'>
                                                                <Paragraph>Your Plan Benefits</Paragraph>
                                                                <ul className=''>
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
                                                                </ul>
                                                            </div>
                                                            <div className='card-footer'>
                                                                <div className='row row-cols-xxl-4 row-cols-lg-2 g-3'>
                                                                    {item.Amenties.slice(0,4).map((item, index)=>{
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
                                                                        className='ex_link mb-3'>{item.link}</Button>
                                                                    <Button 
                                                                        tagType='link'
                                                                        to={`/joinus`}
                                                                        className='btn_outline_black d-block auth_btn_padding'>{'applay'}</Button>
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
                        </section>
                    </>
                )
            })}
            <section className={`membership-types mb-5`}>
                <Container fluid>
                    <Row>
                        <div className="col-lg-12 border-bottom border-top ">
                            <div className="head-content-sec text-center">
                                <h2 className="h2-text">Other Types</h2>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <h2 className="h2-text-bold">Other Membership individual</h2>
                            <MembershipTypesSlider />
                        </div>
                    </Row>

                </Container>
            </section>
        </>
    );


};

export default MembershipOptions;
