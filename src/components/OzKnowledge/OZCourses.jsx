import { useParams } from 'react-router-dom';
import MainHeaderWrapper from '../UI/MainHeaderWrapper';
import Paragraph from '../UI/Paragraph';
import img from '../../assets/images/Rectangle_3.png';
import CoursesDetails from './CoursesDetails';
import { getCategoryById } from '../../apis/OzKnowledge';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../apis/context/AuthTokenContext';

const OZCourses = () => {

    const [category, setCategory] = useState({});
    const {id} = useParams();
    const { token } = useContext(AuthContext);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        const getCategories = async () => {
            try{
                const result = await getCategoryById(token, signal, id);
                setCategory(result);
            }catch (error){
                console.log(error);
            }
        }
        getCategories();
        return () => controller.abort();
    }, []);

    return (
        <>
            <MainHeaderWrapper 
                image={category.image} 
                height='585px'>
                <div className={`container-fluid px-70`}>
                    <div className='col-xl-6 col-lg-9 col-12'>
                        <Paragraph className='main_header mb-3'>{'OZ Knowledge'}</Paragraph>
                        <Paragraph className='head_paragraph mb-3'>{category.title}</Paragraph>
                        <Paragraph className='description mb-0'>{category.description}</Paragraph>
                    </div>
                </div>
            </MainHeaderWrapper>
            <CoursesDetails />
        </>
    )
};
export default OZCourses;