import { useContext, useEffect, useState } from "react";
import Paragraph from "../UI/Paragraph";
import './ContactAdminHistory.css';
import Button from "../UI/Button";
import {getContactAdminHistory} from '../../apis/User';
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { useNavigate } from "react-router-dom";
import {Tab, Nav} from 'react-bootstrap';

const ContactAdminHistory = () => {

    const [contactList, setContactList] = useState([]);
    const {userId} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        const getList = async () => {
            try{
                const result = await getContactAdminHistory(userId);
                setContactList(result);

            }catch(error){}
        }
        getList()
    },[]);

    const setDate = (roomdate) => {
        const date = new Date(roomdate);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        return date.toLocaleDateString('en-US', options);
    };

    const getDetails = (item) => {
        sessionStorage.setItem('replydetailsOZ', JSON.stringify(item))
        navigate('/replydetails');
    }

    return (
        <>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="bg-body-tertiary navigator border_bottom">
                <div className='container-fluid d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <h1 className="title-name mb-0">Contact Admin History</h1>
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
                                <Nav.Link eventKey="first" className="booking_navlink">All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className="booking_navlink" >Read</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" className="booking_navlink" >Unread</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {/* <Button 
                            className="nav-link-two btn button-outLine btn-bg-white m-0"
                            tagType='link'
                            to={'/sendcontact'}>
                                contact admin
                        </Button> */}
                    </div>

                </div>
            </div>
            <div className="container py-5 ">
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        {(contactList && contactList.length ===0) && (<Paragraph className='empty'>{'there is no Messages history'}</Paragraph>) }
                        {contactList && contactList.map((item, index)=>{
                            return (
                                <div className="history p-4" key={index} onClick={()=>{getDetails(item)}}>
                                    <Paragraph className='status-event mb-3'>{item.message}</Paragraph>
                                    <Paragraph className='p-text-history'>{item.subject}</Paragraph>
                                    <div className="d-flex justify-content-between">
                                        <Paragraph className='date-history'>Date Submitted : {setDate(item.updated_at)}</Paragraph>
                                        <Paragraph 
                                            className='date-history'>status : <span style={{
                                                color: `${item.is_read === 0 ? '#0047BB' : '#05B15D'}`
                                            }}>{item.is_read === 0 ? 'Unread' : 'Read'}</span></Paragraph>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        {contactList && contactList.map((item, index)=>{ 
                            return item.is_read !== 0 ? (
                                <div className="history p-4" key={index} onClick={()=>{getDetails(item)}}>
                                    <Paragraph className='status-event mb-3'>{item.message}</Paragraph>
                                    <Paragraph className='p-text-history'>{item.subject}</Paragraph>
                                    <div className="d-flex justify-content-between">
                                        <Paragraph className='date-history'>Date Submitted : {setDate(item.updated_at)}</Paragraph>
                                        <Paragraph 
                                            className='date-history'>status : <span style={{
                                                color: `${item.is_read === 0 ? '#0047BB' : '#05B15D'}`
                                            }}>{item.is_read === 0 ? 'Unread' : 'Read'}</span></Paragraph>
                                    </div>
                                </div>) : (<Paragraph className='empty'>{'there is no Messages history'}</Paragraph>)
                            })
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        {contactList && contactList.map((item, index)=>{ 
                            return item.is_read === 0 ? (
                                <div className="history p-4" key={index} onClick={()=>{getDetails(item)}}>
                                    <Paragraph className='status-event mb-3'>{item.message}</Paragraph>
                                    <Paragraph className='p-text-history'>{item.subject}</Paragraph>
                                    <div className="d-flex justify-content-between">
                                        <Paragraph className='date-history'>Date Submitted : {setDate(item.updated_at)}</Paragraph>
                                        <Paragraph 
                                            className='date-history'>status : <span style={{
                                                color: `${item.is_read === 0 ? '#0047BB' : '#05B15D'}`
                                            }}>{item.is_read === 0 ? 'Unread' : 'Read'}</span></Paragraph>
                                    </div>
                                </div>) : (<Paragraph className='empty'>{'there is no Messages history'}</Paragraph>)
                            })
                        }
                    </Tab.Pane>

                </Tab.Content>
            </div>
        </Tab.Container>
        </>
    )
}
export default ContactAdminHistory;