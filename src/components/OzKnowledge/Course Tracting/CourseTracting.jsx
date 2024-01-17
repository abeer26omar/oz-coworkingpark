import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
import Paragraph from '../../UI/Paragraph';
import coursetrack from '../../../assets/images/trackcourse.png';
import Button from '../../UI/Button';
import CourseProgress from './CourseProgress';
import CourseSections from './CourseSections';
import { AuthContext } from '../../../apis/context/AuthTokenContext';
import { getKnwoldgeByid } from '../../../apis/OzKnowledge';
// import { useParams } from 'react-router-dom';
import { useContext, useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';

const CourseTracting = () => {
    
    const [classes , setClasses] = useState({})
    const {token} = useContext(AuthContext);
    const {id} = useParams() ;

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
    }, [])

    return (
      <>
        <MainHeaderWrapper
          image={coursetrack}
          height="670px"
          special_flex="justify-content-center"
        >
          <div className={`container`}>
            <div className="col-12 text-center">
              <Paragraph className="main_header mb-3">
                {"Course Details"}
              </Paragraph>
              <Paragraph className="head_paragraph mb-3">
                {classes.training?.title}
              </Paragraph>
            </div>
          </div>
        </MainHeaderWrapper>
        <CourseProgress details={classes} />
        <CourseSections details={classes.training} />
      </>
    );
};
export default CourseTracting;