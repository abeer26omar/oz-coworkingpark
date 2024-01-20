import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
import Paragraph from '../../UI/Paragraph';
import coursetrack from '../../../assets/images/trackcourse.png';
import Button from '../../UI/Button';
import CourseProgress from './CourseProgress';
import CourseSections from './CourseSections';
import { AuthContext } from '../../../apis/context/AuthTokenContext';
import { getKnwoldgeByid } from '../../../apis/OzKnowledge';
import star from '../../../assets/images/icons/star.svg';
import { useContext, useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import RateCourseModal  from './RateCourseModal';

const CourseTracting = () => {
    
    const [classes , setClasses] = useState({});
    const [openRateModal , setOpenRateModal] = useState(false);
    const {token} = useContext(AuthContext);
    const {id} = useParams() ;

    const closeRateModal = () => setOpenRateModal(false);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        const getCourse = async () => {
            try{
                const result = await getKnwoldgeByid( token ,signal , id )
                setClasses(result);
            }catch (error){
                console.log(error);
            }
        }
        getCourse();

        return () => controller.abort();
    }, []);

    const HandelRate = ()=>{
      setOpenRateModal(true);
    }

    return (
      <>
        <MainHeaderWrapper
          image={coursetrack}
          height="670px"
          special_flex="justify-content-center"
        >
          <div className={`container`}>
            <div className="col-12 text-center">
              <Paragraph className="main_header_title mb-3">
                {"Course Details"}
              </Paragraph>
              <Paragraph className="head_paragraph mb-3">
                {classes.training?.title}
              </Paragraph>
              {classes.is_rated ? (
                  <div className='d-flex align-items-center justify-content-center conrse_details'>
                    <img src={star} alt='star icon'/>
                    <span className='rate ms-2'>{classes.rate}</span> 
                    <span className='reviews mx-3'>({classes.reviews} Reviews)</span>
                  </div>
                  ) : (
                    <Button tagType='link' className="rate_btn p-0 px-2" onClick={()=>HandelRate()}>rate</Button>
                  )
                }
            </div>
          </div>
        </MainHeaderWrapper>
        <CourseProgress details={classes} />
        <CourseSections details={classes.training} />
        <RateCourseModal
          open={openRateModal}
          handleCancel={closeRateModal}
          courseId={classes.course_id}
        />
      </>
    );
};
export default CourseTracting;