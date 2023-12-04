import { useContext, useEffect, useState } from "react";
import { getChatHistory } from '../../../../apis/Market';
import { AuthContext } from "../../../../apis/context/AuthTokenContext";
import Button from '../../../UI/Button';
import Paragraph from '../../../UI/Paragraph';

const IssueHistory = () => {
    const [reports, setHistory] = useState([]);
    const {userId} = useContext(AuthContext);

    useEffect(()=>{
        const getHistory =  async () => {
            try{
                const result = await getChatHistory(userId);
                setHistory(result);
            }catch(error){

            }
        } 
        getHistory()
    },[])

    return (
        <>
            <div className="container py-4 px-5">
                <div className="head-form d-flex justify-content-between">
                    <h2>Report history</h2>
                </div>
                <div className="col-11 mx-auto space-description">
                    { reports && reports.map(item=>{
                        return (
                            <Button className='p-0 d-block' tagType='link' to={`/profile/issueType/case_${item.id}`}>
                                <div className='d-flex justify-content-between align-items-center border-bottom my-5'>
                                    <div className='d-flex align-items-center'>
                                        <img src={item.ticket_category.image} alt={item.ticket_category.name} />
                                        <Paragraph className='ms-3 service_catering mb-0'>{item.ticket_category.name}</Paragraph>
                                    </div>
                                    <div className="d-flex">
                                        <Paragraph className='mb-0'>{item.date}</Paragraph>
                                        <Paragraph className='mb-0' style={{
                                            color: `${item.ticket_status.name === 'Open' ? '#05B15D':''}`
                                        }}>{item.ticket_status.name}</Paragraph>
                                    </div>
                                </div>
                            </Button>
                        )
                        })
                    }
                </div>             
            </div>
        </>
    )
};

export default IssueHistory;