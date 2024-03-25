import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../apis/context/AuthTokenContext';
import { getCoursesById } from '../../../apis/OzKnowledge';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Skeleton, Alert, Modal } from 'antd';
import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
import Paragraph from '../../UI/Paragraph';
import Button from '../../UI/Button';
import star from '../../../assets/images/icons/star.svg';
import confirmedIcon from '../../../assets/images/icons/check.svg';
import Counter from './Counter';
import AboutCourse from './AboutCourse';
import PopularCourses from '../PopularCourses';
import AboutInstractor from './AboutInstractor';
import LoginAlert from "../../Auth/LoginAlertModal";
import * as DOMPurify from 'dompurify';

const CourseDetails = () => {

    const { token, userProfileData } = useContext(AuthContext);
    const { id } = useParams();
    const [showLogin, setShowLogin] = useState(false);

    const handelClose = () => setShowLogin(false);

    const { isPending, error, data: course } = useQuery({
      queryKey: ['courseDetails', id],
      queryFn: ({signal}) => getCoursesById(token, signal, id)
    });

    const navigate = useNavigate();

    const HandelSummery = (value) => {
      const knowledgePackage = userProfileData.zee_knowledge; 
      if (token) {
        if(knowledgePackage){
          if(knowledgePackage.total_remaining_courses > 0){
            Modal.info({
              title: 'Membership Package',
              content: `You Have ${knowledgePackage.total_free_courses} Free Courses Included In Your Package,
              Remaning: ${knowledgePackage.total_remaining_courses} Course`,
              centered: true,
              onOk: () => navigatePayment(value, 'Free'),
              okText: 'confirm',
              closable: true,
              maskClosable: true
            });
          }else{
            const discount_type = knowledgePackage.zee_knowledge_discount_type === 'percentage' ? '%' : '';
            Modal.info({
              title: 'Membership Package',
              content: `You Have Consumed Your Free Courses, Now Enjoy ${knowledgePackage.discount} ${discount_type} Discount,
              Course Price: ${calcPrice(value.price, knowledgePackage.discount, discount_type)} EGP`,
              centered: true,
              onOk: () => navigatePayment(value, calcPrice(value.price, knowledgePackage.discount, discount_type)),
              okText: 'confirm',
              closable: true,
              maskClosable: true
            });
          }
        }
      } else {
        setShowLogin(true);
      }
    };

    const calcPrice = (price, discount, discount_type) => {
      if(discount_type === 'fixed'){
        return price - discount;
      }else{
          const priceDicounted =  price * discount / 100;
          return price - priceDicounted;
      }
    };

    const navigatePayment = (value, price) => {
      const gymCourseDetails = {
        id: value.id,
        title: value.title,
        date: value.start_date,
        duration: value.duration,
        schedule: value.schedule,
        price: price,
        level: value.level,
      };
      localStorage.setItem("OZgymCourseDetails", JSON.stringify(gymCourseDetails));
      navigate(`/payment`);
    };

    return (
        <>
            <MainHeaderWrapper 
                image={course?.image} 
                height='670px'>
                <div className={`container-fluid px-70`}>
                    <div className='col-xl-6 col-lg-9 col-12'>
                    {isPending && (<Skeleton active paragraph={{rows: 2}} />)}
                        <Paragraph className='head_paragraph mb-4' style={{
                            fontSize: '2.25rem'
                        }}>{course?.title}</Paragraph>
                        <div className='description mb-4' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(course?.details) }}></div>                                
                            <div className='conrse_details d-flex mb-4'>
                                <div className='d-flex align-items-center'>
                                    <img src={star} alt='star icon'/>
                                    {isPending && (<Skeleton.Input style={{ width: 80 }} active />)}
                                    <span className='rate ms-2'>{course?.rate}</span> 
                                    <span className='reviews mx-3'>({course?.reviews} Reviews)</span>                                   
                                </div>
                                <div className='d-flex align-items-center'>
                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="4" height="4" rx="2" fill="#F2EFF2"/>
                                    </svg>
                                    <span className='reviews ms-2'>Published By</span>
                                    {isPending && (<Skeleton.Input style={{ width: 80 }} active />)}
                                    <span className='reviews mx-3'>{course?.trainer?.name}</span>
                                    <img src={confirmedIcon} alt='confirmed Icon'/>
                                </div>
                            </div>
                            <Button tagType='link' className="btn white_bg_btn me-2" onClick={()=>{HandelSummery(course)}}>Attend</Button>
                    </div>
                </div>
            </MainHeaderWrapper>
            {error && (<Alert message={error.message} type="error" showIcon />)}
            <Counter 
                course_hours={course?.course_hours} 
                total_assignment={course?.total_assignment} 
                video_lessons={course?.video_lessons}
                student_enrolled={course?.student_enrolled}
            />
            <AboutCourse descriptions={course?.descriptions} isPending={isPending}/>
            <AboutInstractor instractor={course?.trainer} isPending={isPending} />
            <PopularCourses />
            <LoginAlert show={showLogin} onHide={handelClose} />
        </>
    )
};
export default CourseDetails;