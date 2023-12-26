import React from 'react';
import Button from '../../UI/Button';

const MembershipHeader = ({title}) => {
    const handelInguireType = () => {
        sessionStorage.setItem('MembershipInquireOZ', 'membership')
    }
    
    return (
        <>
            <div className="bg-body-tertiary navigator">
                <div className='container-fluid'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex'>
                            <h1 className="title-name mb-0">
                                {title}
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
                    <Button
                        tagType='link'
                        to={"/contactus"}
                        onClick={handelInguireType}
                        className="btn button-outLine btn-bg-white m-0"
                    >inquire</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MembershipHeader;
