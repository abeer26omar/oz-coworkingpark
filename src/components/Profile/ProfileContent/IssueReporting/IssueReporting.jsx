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
            <div className="container py-4 px-5">
                <div className="head-form d-flex justify-content-between">
                    <h2>issue Reporting</h2>
                    <Button tagType='link' to={'/profile/issuehistory'} className='btn_outline_black auth_btn_padding'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29086 5.28023C9.24398 1.33231 15.6711 1.37398 19.6481 5.35211C23.6273 9.33127 23.669 15.7615 19.7148 19.7146C15.7617 23.6677 9.33148 23.6271 5.35232 19.6479C4.23304 18.5333 3.38736 17.1744 2.88166 15.6779C2.37597 14.1814 2.22401 12.588 2.43773 11.0229C2.46577 10.8175 2.57426 10.6317 2.73933 10.5063C2.90441 10.3809 3.11254 10.3261 3.31794 10.3542C3.52335 10.3822 3.7092 10.4907 3.83461 10.6558C3.96003 10.8209 4.01473 11.029 3.98669 11.2344C3.80527 12.5608 3.93389 13.9111 4.36243 15.1794C4.79097 16.4477 5.50776 17.5993 6.45648 18.5438C9.83669 21.9229 15.2773 21.9427 18.6106 18.6104C21.9429 15.2771 21.9232 9.83648 18.544 6.45627C15.1659 3.07919 9.72836 3.05731 6.39502 6.38544L7.17419 6.38856C7.27679 6.38904 7.37828 6.40972 7.47289 6.44943C7.56749 6.48913 7.65334 6.54708 7.72555 6.61997C7.79776 6.69285 7.8549 6.77924 7.89372 6.87421C7.93254 6.96918 7.95227 7.07086 7.9518 7.17346C7.95132 7.27605 7.93063 7.37755 7.89093 7.47215C7.85123 7.56676 7.79328 7.65261 7.72039 7.72482C7.64751 7.79703 7.56112 7.85417 7.46615 7.89299C7.37118 7.93181 7.2695 7.95154 7.1669 7.95106L4.51482 7.93856C4.30888 7.93747 4.1117 7.8551 3.96618 7.70938C3.82066 7.56366 3.73855 7.36638 3.73773 7.16044L3.72419 4.51044C3.72364 4.40784 3.74331 4.30615 3.78207 4.21115C3.82082 4.11616 3.87791 4.02972 3.95007 3.95679C4.02223 3.88386 4.10804 3.82585 4.20262 3.78609C4.2972 3.74632 4.39868 3.72557 4.50127 3.72502C4.60387 3.72448 4.70557 3.74414 4.80056 3.7829C4.89556 3.82165 4.98199 3.87874 5.05492 3.9509C5.12786 4.02306 5.18586 4.10887 5.22563 4.20345C5.26539 4.29803 5.28614 4.39951 5.28669 4.50211L5.29086 5.28127V5.28023Z" fill="black"/>
                            <path d="M12.5 7.55469C12.7072 7.55469 12.9059 7.637 13.0524 7.78351C13.1989 7.93002 13.2813 8.12874 13.2813 8.33594V12.1797L15.6562 14.5547C15.733 14.6262 15.7946 14.7125 15.8373 14.8083C15.88 14.9041 15.9029 15.0076 15.9048 15.1125C15.9066 15.2174 15.8873 15.3216 15.848 15.4189C15.8088 15.5161 15.7503 15.6045 15.6761 15.6787C15.6019 15.7529 15.5135 15.8114 15.4162 15.8506C15.319 15.8899 15.2148 15.9092 15.1099 15.9074C15.005 15.9055 14.9015 15.8826 14.8057 15.8399C14.7099 15.7972 14.6236 15.7356 14.5521 15.6589L12.024 13.1318C11.9271 13.0349 11.8503 12.92 11.7979 12.7934C11.7455 12.6669 11.7186 12.5312 11.7188 12.3943V8.33594C11.7188 8.12874 11.8011 7.93002 11.9476 7.78351C12.0941 7.637 12.2928 7.55469 12.5 7.55469Z" fill="#BDBDBD"/>
                        </svg> History</Button>
                </div>
                <div className="col-11 mx-auto space-description">
                    { cases && cases.map(item=>{
                        return (
                            <Button className='p-0 d-block' tagType='link' to={`/profile/issueType/case_${item.id}`}>
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