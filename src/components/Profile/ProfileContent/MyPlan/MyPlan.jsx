import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Tab, Nav} from 'react-bootstrap';
import axios from 'axios';
import '../../ProfileTabs/ProfileTabs.css';
import Paragraph from '../../../UI/Paragraph';
import ProgressBar from "@ramonak/react-progress-bar";
import { getMyPlans } from '../../../../apis/User';
import { AuthContext } from '../../../../apis/context/AuthTokenContext';

const MyPlan = ()=>{
    
    const navigate = useNavigate();
    const {token, userId} = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState('active');
    const [plans, setPlans] = useState([]);
    const [planData, setPlanData] = useState([]);

    useEffect(()=>{
        const source = axios.CancelToken.source();

        getMyPlans(token, userId, source).then(res=>{
            setPlans(res);
        }).catch(err=>{});

        return ()=>source.cancel();
    },[token, userId]);

    useEffect(()=>{
        if(plans){
            const initialTab = Object.keys(plans).reverse()[0];
            setActiveTab(initialTab);
            setPlanData(plans[initialTab]);
        }
    },[plans]);

    const handleTabClick = (key) => {
        setActiveTab(key);
        setPlanData(plans[key]);
    };
    
    return (
        <>
            <Tab.Container id="left-tabs-example"
                defaultActiveKey={activeTab}
                className='py-4 px-5'>
                <div className="container p-sm-4 p-0">
                    <div className="head-form">
                        <h2>My Plan</h2>
                    </div>
                    <Nav variant="pills" className="col-11 row mx-auto my-3 justify-content-center booking_nav">
                        {
                            plans && Object.keys(plans).reverse().map((item,index)=>{
                                return (
                                    <Nav.Item className='col-4 text-center p-0' key={index}>
                                        <Nav.Link 
                                            className="booking_navlink" 
                                            eventKey={item}
                                            onClick={()=>{handleTabClick(item)}}>
                                            <span className=''>{item}</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                )
                            })
                        }
                    </Nav>
                    <Tab.Content animation className='py-4'>
                        <Tab.Pane eventKey={activeTab}>
                            {(planData && planData.length === 0) && <Paragraph className='empty'>{`there is no ${activeTab} plans`}</Paragraph> }
                            { planData && planData.map((item, index)=>{
                                return (
                                    <div className='card card_event p-3' 
                                        key={index} 
                                        onClick={()=>{navigate(`/myplanDetials/${item.id}`)}}>
                                        <div className='row g-3 justify-content-between align-items-center'>
                                            <div className='col-lg-6 col-12 d-flex align-items-center'>
                                                <div className='ps-4'>
                                                    <Paragraph className='card-title'>{item.name}</Paragraph>
                                                    <Paragraph className='grey-span'>{item.membership_type.name}</Paragraph>
                                                    <Paragraph className=''>{item.description}</Paragraph>
                                                    <Paragraph className="price-hour mb-0">{item.price} EGP / Hour</Paragraph>
                                                </div>
                                            </div>
                                            <div className='col-lg-4 col-12 d-flex justify-content-end'>
                                                <img src={item.image} alt='event-img'  width={'100%'}/>
                                            </div>
                                        </div>
                                        <div className='mt-3 d-flex align-items-center justify-content-evenly'>
                                            <div className='col-11'>
                                                <ProgressBar 
                                                    completed={item.time_progress}
                                                    bgColor={'#D0DF00'}
                                                    baseBgColor={'#C5CED340'} />
                                            </div>
                                            <span className='completed_percentage'>{item.time_progress}%</span>  
                                        </div>
                                    </div>
                                )
                                })
                            }
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </>
    );
};
export default MyPlan;