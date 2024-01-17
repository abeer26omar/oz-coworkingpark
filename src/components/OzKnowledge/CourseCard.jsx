import { Rate, Skeleton } from 'antd';
import { useState } from 'react';
import Paragraph from '../UI/Paragraph';
import Button from '../UI/Button';

const CourseCard = ({coursesDetails, loading}) => {

    return (
        <>
            <div className='card h-100'>
                {loading ? 
                    <Skeleton.Image active className="card-img-top"/> 
                    : 
                    <div className='card-header header_course'>
                        <img src={coursesDetails.image} className="card-img-top" alt="..." height='229px'/>
                        <div className='padge_grey'>
                            <span>{coursesDetails.category?.title}</span>
                        </div>
                    </div>
                }
                
                <Skeleton loading={loading} active className='p-2'/>
                <div className='card-body'>
                    <Paragraph className='courseCardTitle'>{coursesDetails.title}</Paragraph>
                    <div className='d-flex align-items-center'>
                        <Rate disabled allowHalf defaultValue={coursesDetails.rate} />
                        <span className='rate_count ms-2'>{`(${coursesDetails.rate})`}</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center pt-4'>
                        <Paragraph className='courseCardTitle mb-0'>{Math.floor(coursesDetails.price)} Egp</Paragraph>
                        <Button 
                            tagType='link'
                            to={`/coursedetails/${coursesDetails.id}`}
                            className='course_btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 18L18 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.25 6H18V15.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Button>
                    </div>
                </div>
                
            
            </div>
        </>
    )
};
export default CourseCard;