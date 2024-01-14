import { useParams } from 'react-router-dom';
import MainHeaderWrapper from '../UI/MainHeaderWrapper';
import Paragraph from '../UI/Paragraph';
import img from '../../assets/images/Rectangle_3.png';
import CoursesDetails from './CoursesDetails';

const OZCourses = () => {

    const {id} = useParams();

    return (
        <>
            <MainHeaderWrapper 
                image={img} 
                height='585px'>
                <div className={`container-fluid px-70`}>
                    <div className='col-xl-6 col-lg-9 col-12'>
                        {/* {props.configData ? props.configData.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === 'booking_page_title' && ( */}
                                    <Paragraph className='main_header mb-3'>{'OZ Knowledge'}</Paragraph>
                                    <Paragraph className='head_paragraph mb-3'>{id}</Paragraph>
                                {/* )}
                                {configItem.key === 'booking_page_description' && ( */}
                                    <Paragraph className='description mb-0'>{'Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit'}</Paragraph>
                                {/* )}
                            </React.Fragment>
                        )): ''} */}
                    </div>
                </div>
            </MainHeaderWrapper>
            <CoursesDetails />
        </>
    )
};
export default OZCourses;