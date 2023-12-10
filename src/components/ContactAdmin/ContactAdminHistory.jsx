import { useContext, useEffect, useState } from "react";
import Paragraph from "../UI/Paragraph";
import './ContactAdminHistory.css';
import Button from "../UI/Button";
import {getContactAdminHistory} from '../../apis/User';
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { useNavigate } from "react-router-dom";

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
                    <Button 
                        className="nav-link-two btn button-outLine btn-bg-white m-0"
                        tagType='link'
                        to={'/sendcontact'}>
                            contact admin
                    </Button>

                </div>
            </div>
            <div className="container py-5 ">
                {contactList && contactList.map((item, index)=>{
                    return (
                        <div className="history p-4" key={index} onClick={()=>{getDetails(item)}}>
                            <Paragraph className='status-event mb-3'>{item.message}</Paragraph>
                            <Paragraph className='p-text-history'>{item.subject}</Paragraph>
                            <Paragraph className='date-history'>Date Submitted : {setDate(item.updated_at)}</Paragraph>
                        </div>
                    )
                })

                }
            </div>
        </>
    )
}
export default ContactAdminHistory;