import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Paragraph from '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import './IssueReporting.css';
import { getIssuesCaseStudies } from '../../../../apis/config';

const IssueReporting = () => {

    const [cases, setCases] = useState([]);

    useEffect(()=>{
        const source = axios.CancelToken.source();

        getIssuesCaseStudies(source).then(res=>{
            setCases(res);
        }).catch(err=>{console.log(err)})

        return ()=>source.cancel();
    },[]);

    return (
        <>
        {console.log(cases)}
            <div className="container py-4 px-5">
                <div className="head-form">
                    <h2>issue Reporting</h2>
                </div>
                <div className="col-11 mx-auto space-description">
                    { cases && cases.map(item=>{
                        return (
                            <Button className='p-0 d-block' tagType='link' to={'/profile/issueType'}>
                                <div className='d-flex justify-content-between align-items-center border-bottom my-5'>
                                    <div className='d-flex align-items-center'>
                                        <img src={item.image} alt={item.name} />
                                        <Paragraph className='ms-3 service_catering mb-0'>{item.name}</Paragraph>
                                    </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.374916 0.368713C0.595783 0.132613 0.895177 -3.91295e-08 1.20734 -5.27744e-08C1.51949 -6.64192e-08 1.81889 0.132613 2.03976 0.368713L8.32217 7.09278C8.54276 7.32918 8.66667 7.64962 8.66667 7.98372C8.66667 8.31782 8.54276 8.63827 8.32217 8.87466L2.03976 15.5987C1.93192 15.7226 1.80187 15.8219 1.65737 15.8909C1.51288 15.9598 1.3569 15.9968 1.19873 15.9998C1.04057 16.0028 0.883463 15.9717 0.736787 15.9082C0.590111 15.8448 0.456872 15.7505 0.345016 15.6307C0.233159 15.511 0.144977 15.3684 0.0857327 15.2114C0.0264879 15.0544 -0.00260735 14.8863 0.000183264 14.717C0.00297388 14.5477 0.0375931 14.3808 0.101975 14.2261C0.166357 14.0715 0.259184 13.9323 0.374917 13.8169L5.82491 7.98372L0.374916 2.15059C0.154324 1.9142 0.0304197 1.59376 0.0304197 1.25965C0.0304196 0.92555 0.154324 0.605106 0.374916 0.368713Z" fill="#BDBDBD"/>
                                        </svg>
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
export default React.memo(IssueReporting);