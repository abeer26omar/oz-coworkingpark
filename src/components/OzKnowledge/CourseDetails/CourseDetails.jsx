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

const CourseDetails = () => {
    return (
        <>
            <MainHeaderWrapper 
                image={img} 
                height='670px'>
                <div className={`container-fluid px-70`}>
                    <div className='col-xl-6 col-lg-9 col-12'>
                        {/* {props.configData ? props.configData.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === 'booking_page_title' && ( */}
                                    <Paragraph className='head_paragraph mb-4' style={{
                                        fontSize: '2.25rem'
                                    }}>{'UX & Web Design Master Course: Strategy, Design, Development'}</Paragraph>
                                {/* )}
                                {configItem.key === 'booking_page_description' && ( */}
                                    <Paragraph className='description mb-4'>{'Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit'}</Paragraph>
                                {/* )}
                            </React.Fragment>
                        )): ''} */}
                            <div className='conrse_details d-flex mb-4'>
                                <div className='d-flex align-items-center'>
                                    <img src={star} alt='star icon'/>
                                    <span className='rate ms-2'>4.5</span> 
                                    <span className='reviews mx-3'>(2,540 Reviews)</span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="4" height="4" rx="2" fill="#F2EFF2"/>
                                    </svg>
                                    <span className='reviews ms-2'>Published By</span>
                                    <span className='reviews mx-3'>Joe Natoli</span>
                                    <img src={confirmedIcon} alt='confirmed Icon'/>
                                </div>
                            </div>
                            <Button tagType='link' className="btn white_bg_btn me-2" to={'/payment'}>Attend</Button>
                    </div>
                </div>
            </MainHeaderWrapper>
            <Counter />
            <AboutCourse />
            <AboutInstractor />
            <PopularCourses />
        </>
    )
};
export default CourseDetails;