import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
import Paragraph from '../../UI/Paragraph';
import Button from '../../UI/Button';
import img from '../../../assets/images/Rectangle_5.png';
import star from '../../../assets/images/icons/star.svg';
import confirmedIcon from '../../../assets/images/icons/check.svg';
import Counter from './Counter';
import AboutCourse from './AboutCourse';
import PopularCourses from '../PopularCourses';
import AboutInstractor from './AboutInstractor';
import { useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../apis/context/AuthTokenContext';
import { getCoursesById } from '../../../apis/OzKnowledge';
import {useNavigate} from 'react-router-dom';
import LoginAlert from "../../Auth/LoginAlertModal";

const CourseDetails = () => {

    const [course, setCourse] = useState([]);
    const { token } = useContext(AuthContext);
    const { id } = useParams();
    const [showLogin, setShowLogin] = useState(false);

    const handelClose = () => setShowLogin(false);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        const getCategories = async () => {
            try{
                const result = await getCoursesById(token, signal, id);
                setCourse(result);
            }catch (error){
                console.log(error);
            }
        }
        getCategories();

        return () => controller.abort();
    }, [id]);

    const navigate = useNavigate();

    const HandelSummery = (value) => {
      const gymCourseDetails = {
        id: value.id,
        title: value.title,
        date: value.start_date,
        duration: `${value.course_hours} hours`,
        schedule: value.category?.title,
        price: value.price,
        level: value.category?.title,
      };
    
      if (token) {
        sessionStorage.setItem(
          "OZCourseDetails",
          JSON.stringify(gymCourseDetails)
        );
        navigate(`/bookclass`);
      } else {
        setShowLogin(true);
      }
    };

    const HandelRate = (id) => {
        if (token) {
            console.log(id);
        } else {
            setShowLogin(true);
        }
    };

    return (
        <>
            <MainHeaderWrapper 
                image={course.image} 
                height='670px'>
                <div className={`container-fluid px-70`}>
                    <div className='col-xl-6 col-lg-9 col-12'>
                        <Paragraph className='head_paragraph mb-4' style={{
                            fontSize: '2.25rem'
                        }}>{course.title}</Paragraph>
                                
                        <Paragraph className='description mb-4'>{course.details}</Paragraph>
                                
                            <div className='conrse_details d-flex mb-4'>
                                <div className='d-flex align-items-center'>
                                    <img src={star} alt='star icon'/>
                                    <span className='rate ms-2'>{course.rate}</span> 
                                    <span className='reviews mx-3'>({course.reviews} Reviews)</span>                                   
                                </div>
                                <div className='d-flex align-items-center'>
                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="4" height="4" rx="2" fill="#F2EFF2"/>
                                    </svg>
                                    <span className='reviews ms-2'>Published By</span>
                                    <span className='reviews mx-3'>{course.trainer?.name}</span>
                                    <img src={confirmedIcon} alt='confirmed Icon'/>
                                </div>
                            </div>
                            <Button tagType='link' className="btn white_bg_btn me-2" onClick={()=>{HandelSummery(course)}}>Attend</Button>
                    </div>
                </div>
            </MainHeaderWrapper>
            <Counter 
                course_hours={course.course_hours} 
                total_assignment={course.total_assignment} 
                video_lessons={course.video_lessons}
                student_enrolled={course.student_enrolled}
            />
            <AboutCourse descriptions={course.descriptions} />
            <AboutInstractor instractor={course.trainer} />
            <PopularCourses />
            <LoginAlert show={showLogin} onHide={handelClose} />
        </>
    )
};
export default CourseDetails;