import { Rate, Skeleton } from 'antd';
import { useState } from 'react';
import cardTop from '../../assets/images/image 5 (4).png';
import Paragraph from '../UI/Paragraph';
import Button from '../UI/Button';

const CourseCard = () => {

    const [loading, setLoading] = useState(true);
    setTimeout(()=>{
        setLoading(false)
    },1500)


    return (
        <>
            <div className='card'>
                {loading ? 
                    <Skeleton.Image active className="card-img-top"/> 
                    : 
                    <img src={cardTop} className="card-img-top" alt="..." height='229px'/>
                }
                
                <Skeleton loading={loading} active className='p-2'/>
                <div className='card-body'>
                    <Paragraph className='courseCardTitle'>Graphic Design</Paragraph>
                    <div className='d-flex align-items-center'>
                        <Rate disabled allowHalf defaultValue={4.5} />
                        <span className='rate_count ms-2'>{'(15)'}</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center pt-4'>
                        <Paragraph className='courseCardTitle mb-0'>5000 Egp</Paragraph>
                        <Button 
                            tagType='link'
                            to={`/coursedetails/${'1'}`}
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