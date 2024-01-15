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

const CourseDetails = () => {

    const [course, setCourse] = useState([]);
    const { token } = useContext(AuthContext);
    const {id} = useParams();

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
                                    {course.is_rated ? (
                                        <>
                                            <span className='rate ms-2'>{course.rate}</span> 
                                            <span className='reviews mx-3'>({course.reviews} Reviews)</span>
                                        </>
                                    ) : (
                                        <Button tagType='link' className="rate_btn p-0 px-2">rate</Button>
                                    )}
                                    
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
                            <Button tagType='link' className="btn white_bg_btn me-2" to={'/payment'}>Attend</Button>
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
        </>
    )
};
export default CourseDetails;