import Paragraph from '../UI/Paragraph';
import vector from '../../assets/images/Vector.png';
import Media from '../Media/Media';
import Button from '../UI/Button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {id} = useParams();
    const [service, setService] = useState({});
    return (
        <>
            <div className="bg-body-tertiary navigator">
                <div className="container-fluid">
                    <div className='d-flex'>
                        <h1 className="title-name mb-0">
                            Service Details
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2"
                            height="127"
                            viewBox="0 0 2 127"
                            fill="none"
                        >
                            <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5"/>
                        </svg>
                    </div>
                </div>
            </div>
            <section className="community-events-details">
                <div className="container-fluid">
                    <div className="row border-of-section position-relative ">
                        <div className="col-md-6 col-lg-4 col-sm-4 col-xs-6 border-right  ">
                            <div className="box-content">
                                <h2 className="h2-text-box">{service && service.event_name}</h2>
                                <div className="event-type-details">
                                    <span className="status-event">Status: <span>{service && service.event_type?.name}</span></span>
                                </div>
                                <div
                                    className="d-flex  mb-5 amenities-box-details">
                                    <div className="amenities-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M9.33594 5.33594V3.33594" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M22.6641 5.33594V3.33594" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M2.66406 12H29.3307" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M2.66406 16.0026C2.66406 10.9743 2.66406 8.46013 4.22616 6.89803C5.78826 5.33594 8.30241 5.33594 13.3307 5.33594H18.6641C23.6924 5.33594 26.2065 5.33594 27.7686 6.89803C29.3307 8.46013 29.3307 10.9743 29.3307 16.0026V18.6693C29.3307 23.6976 29.3307 26.2117 27.7686 27.7738C26.2065 29.3359 23.6924 29.3359 18.6641 29.3359H13.3307C8.30241 29.3359 5.78826 29.3359 4.22616 27.7738C2.66406 26.2117 2.66406 23.6976 2.66406 18.6693V16.0026Z" stroke="black" stroke-width="2"/>
                                        <path d="M23.9974 21.3308L21.3307 21.3308M21.3307 21.3308L18.6641 21.3308M21.3307 21.3308L21.3307 18.6641M21.3307 21.3308L21.3307 23.9974" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                        {service && service.dates?.map(date=>{
                                            return (
                                                <h5 className="amenities-text">{date.check_in_date}</h5>
                                            )
                                        })}
                                    </div>

                                    <div className="amenities-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <circle cx="16" cy="17.3281" r="12" stroke="black" stroke-width="2"/>
                                        <path d="M16 12V17.3333L19.3333 20.6666" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.66406 5.99739L9.99742 2.66406" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M27.3333 5.99739L22 2.66406" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        {service && service.dates?.map(date=>{
                                            return (
                                                <h5 className="amenities-text">{date.check_in_time}</h5>
                                            )
                                        })}
                                    </div>
                                    {service && service.host?.map(host=>{
                                        return (
                                            <div className="amenities-box">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M5.69531 24.4583C5.69531 24.4583 8.66734 20.6641 16.0006 20.6641C23.334 20.6641 26.3061 24.4583 26.3061 24.4583" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M15.9974 2.66406C8.6336 2.66406 2.66406 8.6336 2.66406 15.9974C2.66406 23.3611 8.6336 29.3307 15.9974 29.3307C23.3611 29.3307 29.3307 23.3611 29.3307 15.9974C29.3307 8.6336 23.3611 2.66406 15.9974 2.66406Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M16 16C18.2092 16 20 14.2092 20 12C20 9.79087 18.2092 8 16 8C13.7908 8 12 9.79087 12 12C12 14.2092 13.7908 16 16 16Z" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <h5 className="amenities-text">{host.name}</h5>
                                            </div>
                                        )

                                    })}
                                    <Media type='img'
                                     src={vector}
                                     alt="vector"
                                     className='vector'/>

                                </div>
                                <Button href="#">
                                    Explore
                                </Button>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-8 col-sm-8 col-xs-6  m-auto">
                            <div className='img_block'>
                                <Media
                                    type="img"
                                    className="image-box w-100 "
                                    src={''}
                                    alt={''}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="about-event-details px-60 py-5  border-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="event-type-details">
                                <span className="status-event ">About Event
                                    <p className="p-text">
                                        {service.description}
                                    </p>
                                </span>
                            </div>
                            <div className="cards-event-buttons text-center">
                                <Button 
                                    tagType='link'
                                    className="btn button-outLine btn-bg-white attend-btn"
                                    onClick={''}>Contact</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default ServiceDetails;