import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { AuthContext } from "../../../../apis/context/AuthTokenContext";
import { getChatHistoryDetails } from '../../../../apis/Market';
import Paragraph from "../../../UI/Paragraph";

const IssueDetails = () => {
    const {id} = useParams()
    const [report, setHistory] = useState({});
    const {userId} = useContext(AuthContext);

    useEffect(()=>{
        const getHistory =  async () => {
            try{
                const result = await getChatHistoryDetails(id, userId);
                setHistory(result);
            }catch(error){

            }
        } 
        getHistory()
    },[]);

    const setDate = (roomdate) => {
        const date = new Date(roomdate);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        return date.toLocaleDateString('en-US', options);
    };

    return (
        <>
            <div className="container py-4">
                <div className="head-form d-flex justify-content-between">
                    <h2>Issue History</h2>
                </div>
                <div className="col-12 issue_description">
                    <div className="py-4 px-3">
                        <div className="d-flex align-items-center">
                            <img src={report.ticket_category?.image} alt={report.ticket_category?.name}/>
                            <Paragraph className='issue mb-0 ms-2'>{report.ticket_category?.name}</Paragraph>
                        </div>
                        <Paragraph className='issue mt-3'>{report.case_type?.name}</Paragraph>
                    </div>
                    <hr />
                    <div className="p-4">
                        <div className="space-price">
                            <Paragraph className="h2-description mb-3">{report.ticket_sub_category?.name}</Paragraph>
                        </div>
                        <div className="space-price my-3">
                            <Paragraph className="h2-description mb-3">venue</Paragraph>
                                <div className="price-list">
                                    <span>{report.venue?.title}</span>
                                </div>
                        </div>
                        <div className="space-price my-3">
                            <Paragraph className="h2-description mb-3">priority</Paragraph>
                                <div className="price-list">
                                    <span style={{
                                        color: report.ticket_priority?.color
                                    }}>{report.ticket_priority?.name}</span>
                                </div>
                        </div>
                        <div className="space-price my-3">
                            <Paragraph className="h2-description mb-3">date</Paragraph>
                                <div className="price-list">
                                    <span>{setDate(report.date)}</span>
                                </div>
                        </div>
                        <div className="space-price my-3">
                            <Paragraph className="h2-description mb-3">status</Paragraph>
                                <div className="price-list">
                                    <span>{report.ticket_status?.name}</span>
                                </div>
                        </div>
                    </div>
                </div>             
            </div>

        </>
    )
};
export default IssueDetails;