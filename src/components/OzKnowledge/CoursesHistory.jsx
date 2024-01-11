import {Tab, Nav} from 'react-bootstrap';
import Paragraph from '../UI/Paragraph';
import ProgressBar from "@ramonak/react-progress-bar";
import cardTop from '../../assets/images/image 5 (4).png';

const CoursesHistory = () => {
    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="bg-body-tertiary navigator border_bottom">
                    <div className='container-fluid d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <h1 className="title-name mb-0">OZ Knowledge History</h1>
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
                        <div className="d-flex history_tabs">
                            <Nav className="d-flex booking_nav">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="booking_navlink">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className="booking_navlink">Ended</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-70 py-5">
                    <Tab.Content style={{
                        minHeight: '50vh'
                    }}>
                        <Tab.Pane eventKey="first">
                            <div className='card card_event'>
                                <div className='row align-items-center'>
                                    <div className='col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-start p-sm-0'>
                                        <img 
                                            src={cardTop} 
                                            alt='event-img' 
                                            height='256px'
                                            width='100%'
                                            style={{
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <div className='col-xxl-8 col-xl-7 col-lg-7 col-md-7 col-sm-12 d-flex align-items-center'>
                                        <div className='p-2'>
                                            <Paragraph className='course_date'>Date Submitted : Feb 2 , 2023</Paragraph>
                                            <Paragraph className='course_details_title'>{'UX & UI Design'}</Paragraph>
                                            <Paragraph className='course_categorey'>{'Category: Design'}</Paragraph>
                                            <Paragraph className='course_desc'>{'Coworking is an arrangement in which workers of different companies share an office space,  rking is an arrangement in which workers of different companies share an office space.....'}</Paragraph>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <div className='col-11'>
                                                    <ProgressBar 
                                                        completed={'20'}
                                                        bgColor={'#D0DF00'}
                                                        baseBgColor={'#C5CED340'}
                                                    />
                                                </div>
                                                <span className='completed_percentage'>{'20'}%</span>  
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <div className='card card_event'>
                                <div className='row align-items-center'>
                                    <div className='col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-start p-sm-0'>
                                        <img 
                                            src={cardTop} 
                                            alt='event-img' 
                                            height='256px'
                                            width='100%'
                                            style={{
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <div className='col-xxl-8 col-xl-7 col-lg-7 col-md-7 col-sm-12 d-flex align-items-center'>
                                        <div className='p-2'>
                                            <Paragraph className='course_date'>Date Submitted : Feb 2 , 2023</Paragraph>
                                            <Paragraph className='course_details_title'>{'UX & UI Design'}</Paragraph>
                                            <Paragraph className='course_categorey'>{'Category: Design'}</Paragraph>
                                            <Paragraph className='course_desc'>{'Coworking is an arrangement in which workers of different companies share an office space,  rking is an arrangement in which workers of different companies share an office space.....'}</Paragraph>
                                            <Paragraph className='course_details_title'>{'course completed'}</Paragraph>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </>
    )
};
export default CoursesHistory;