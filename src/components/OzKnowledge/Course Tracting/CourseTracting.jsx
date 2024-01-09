import MainHeaderWrapper from '../../UI/MainHeaderWrapper';
import Paragraph from '../../UI/Paragraph';
import coursetrack from '../../../assets/images/trackcourse.png';
import Button from '../../UI/Button';
import CourseProgress from './CourseProgress';
import CourseSections from './CourseSections';

const CourseTracting = () => {
    return (
        <>
            <MainHeaderWrapper 
                image={coursetrack} 
                height='670px'
                special_flex='justify-content-center'>
                <div className={`container`}>
                    <div className='col-12 text-center'>
                        {/* {props.configData ? props.configData.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === 'booking_page_title' && ( */}
                                    <Paragraph className='main_header mb-3'>{'Course Details'}</Paragraph>
                                    <Paragraph className='head_paragraph mb-3'>{'UX & Web Design Master Course: Strategy, Design, Development'}</Paragraph>
                                {/* )}
                                {configItem.key === 'booking_page_description' && ( */}
                                    <Button tagType='link' className="btn btn_outline me-2">Cancel Booking</Button>
                                {/* )}
                            </React.Fragment>
                        )): ''} */}
                    </div>
                </div>
            </MainHeaderWrapper>
            <CourseProgress />
            <CourseSections />
        </>
    )
};
export default CourseTracting;