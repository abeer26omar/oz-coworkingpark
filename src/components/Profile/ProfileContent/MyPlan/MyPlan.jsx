import { useNavigate } from 'react-router-dom';
import {Tab, Nav} from 'react-bootstrap';
import event_img from '../../../../assets/images/IMG (1).png';
import '../../ProfileTabs/ProfileTabs.css';
import Paragraph from '../../../UI/Paragraph';
import ProgressBar from "@ramonak/react-progress-bar";

const MyPlan = ()=>{
    const navigate = useNavigate();
    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                <div className="container p-4">
                    <div className="head-form">
                        <h2>My Plan</h2>
                    </div>
                    <Nav variant="pills" className="col-11 row mx-auto my-3 justify-content-center booking_nav">
                        <Nav.Item className='col-4 text-center p-0'>
                            <Nav.Link 
                                className="booking_navlink" 
                                eventKey="one">
                                <span className=''>Active</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='col-4 text-center p-0'>
                            <Nav.Link 
                                className="" 
                                eventKey="two">
                                <span className=''>Ended</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content animation className='py-4'>
                        <Tab.Pane eventKey="one">
                            <div className='card card_event p-3' onClick={()=>{navigate('/myplanDetials/1')}}>
                                <div className='row g-3 justify-content-between align-items-center'>
                                    <div className='col-lg-6 col-12 d-flex align-items-center'>
                                        <div className='ps-4'>
                                            <Paragraph className='card-title'>limited 8</Paragraph>
                                            <Paragraph className='grey-span'>Individual</Paragraph>
                                            <Paragraph className=''>Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet,consectetuerLorem ipsum </Paragraph>
                                            <Paragraph className="price-hour mb-0">125EGP / Hour</Paragraph>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-12 d-flex justify-content-end'>
                                        <img src={event_img} alt='event-img'  width={'100%'}/>
                                    </div>
                                </div>
                                <div className='mt-3 d-flex align-items-center justify-content-evenly'>
                                    <div className='col-11'>
                                        <ProgressBar 
                                            completed={20}
                                            bgColor={'#D0DF00'}
                                            baseBgColor={'#C5CED340'} />
                                    </div>
                                    <span className='completed_percentage'>20%</span>  
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="two">
                            <h1>two</h1>
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </>
    );
};
export default MyPlan;