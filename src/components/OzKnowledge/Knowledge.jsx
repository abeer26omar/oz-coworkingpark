import MainHeaderWrapper from '../UI/MainHeaderWrapper';
import Paragraph from '../UI/Paragraph';
import KnowledgeDescription from './KnowledgeDescription';
import PopularCourses from './PopularCourses';
import PopularInstructor from './PopularInstructor';
import JoinCommuinty from '../Community/JoinCommuinty/JoinCommuinty';
import img from '../../assets/images/Rectangle_4.png';

const Knowledge = () => {
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
                                    <Paragraph className='head_paragraph mb-3'>{'OZ Knowledge'}</Paragraph>
                                {/* )}
                                {configItem.key === 'booking_page_description' && ( */}
                                    <Paragraph className='description mb-0'>{'Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit'}</Paragraph>
                                {/* )}
                            </React.Fragment>
                        )): ''} */}
                    </div>
                </div>
            </MainHeaderWrapper>
            <KnowledgeDescription />
            <PopularCourses />
            <PopularInstructor />
            <JoinCommuinty />

        </>
    )
}
export default Knowledge;