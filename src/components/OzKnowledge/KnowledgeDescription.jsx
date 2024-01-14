import Paragraph from "../UI/Paragraph";
import CountUp from 'react-countup';
import './OzKnowledge.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getCategoriesList } from '../../apis/OzKnowledge';
import {AuthContext} from '../../apis/context/AuthTokenContext';

const KnowledgeDescription = () => {
    const [categories, setCategories] = useState([]);
    const { token } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        const getCategories = async () => {
            try{
                const result = await getCategoriesList(token, signal);
                setCategories(result);
            }catch (error){
                console.log(error);
            }
        }
        getCategories();
        return () => controller.abort();
    }, []);

    const HandelCourses = (id) => {
        navigate(`/courses/${id}`);
    }

    return (
        <>
            <section className="knowledge_description container-fluid px-70 py-5">
                <div className="description">
                    <Paragraph className='status-event'>Description</Paragraph>
                    <Paragraph className='p-text-box'>
                        Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,consectetuerLorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing eliteiusmod   
                    </Paragraph>
                </div>
                <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-2 g-3 justify-content-center py-5">
                    <div className="col">
                        <div className="d-flex">
                            <div className="counter_icon me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g clip-path="url(#clip0_5471_14133)">
                                        <path d="M1.25 15L20 5L38.75 15L20 25L1.25 15Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M29.375 37.5V20L20 15" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M34.375 17.3281V25.8594C34.3739 26.1249 34.2861 26.3827 34.125 26.5937C33.0781 28 28.6406 33.125 20 33.125C11.3594 33.125 6.92187 28 5.875 26.5937C5.7139 26.3827 5.62612 26.1249 5.625 25.8594V17.3281" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5471_14133">
                                        <rect width="40" height="40" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <CountUp 
                                    end={300} 
                                    separator="," 
                                    enableScrollSpy 
                                    scrollSpyOnce 
                                    className="counter"
                                />
                                <Paragraph className='mb-0 p-counter'>Instructor</Paragraph>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex">
                            <div className="counter_icon me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M13.75 25C18.2373 25 21.875 21.3623 21.875 16.875C21.875 12.3877 18.2373 8.75 13.75 8.75C9.26269 8.75 5.625 12.3877 5.625 16.875C5.625 21.3623 9.26269 25 13.75 25Z" stroke="white" stroke-width="3" stroke-miterlimit="10"/>
                                    <path d="M24.2812 9.04688C24.9995 8.85207 25.7402 8.75227 26.4844 8.75C28.6393 8.75 30.7059 9.60602 32.2296 11.1298C33.7533 12.6535 34.6094 14.7201 34.6094 16.875C34.6094 19.0299 33.7533 21.0965 32.2296 22.6202C30.7059 24.144 28.6393 25 26.4844 25" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.5 30.8443C3.76867 29.039 5.45318 27.5655 7.41126 26.5482C9.36934 25.531 11.5435 25 13.75 25C15.9565 25 18.1307 25.531 20.0887 26.5482C22.0468 27.5655 23.7313 29.039 25 30.8443" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M26.4844 25C28.6911 24.9986 30.8657 25.529 32.8239 26.5462C34.7822 27.5635 36.4666 29.0376 37.7344 30.8438" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <CountUp 
                                    end={20000} 
                                    separator="," 
                                    enableScrollSpy 
                                    scrollSpyOnce 
                                    className="counter"
                                    suffix="+"
                                />
                                <Paragraph className='mb-0 p-counter'>Instructor</Paragraph>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex">
                            <div className="counter_icon me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <g clip-path="url(#clip0_5471_14149)">
                                    <path d="M28.75 17.5L37.5 12.5V27.5L28.75 22.5" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.75 9.375H23.75C25.0761 9.375 26.3479 9.90178 27.2855 10.8395C28.2232 11.7771 28.75 13.0489 28.75 14.375V29.375C28.75 29.7065 28.6183 30.0245 28.3839 30.2589C28.1495 30.4933 27.8315 30.625 27.5 30.625H7.5C6.17392 30.625 4.90215 30.0982 3.96447 29.1605C3.02678 28.2229 2.5 26.9511 2.5 25.625V10.625C2.5 10.2935 2.6317 9.97554 2.86612 9.74112C3.10054 9.5067 3.41848 9.375 3.75 9.375V9.375Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_5471_14149">
                                    <rect width="40" height="40" fill="white"/>
                                    </clipPath>
                                </defs>
                                </svg>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <CountUp 
                                    end={10000} 
                                    separator="," 
                                    enableScrollSpy 
                                    scrollSpyOnce 
                                    className="counter"
                                    suffix="+"
                                />
                                <Paragraph className='mb-0 p-counter'>Instructor</Paragraph>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex">
                            <div className="counter_icon me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g clip-path="url(#clip0_5471_14158)">
                                        <path d="M20 28.125C23.4518 28.125 26.25 25.3268 26.25 21.875C26.25 18.4232 23.4518 15.625 20 15.625C16.5482 15.625 13.75 18.4232 13.75 21.875C13.75 25.3268 16.5482 28.125 20 28.125Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M30.625 18.125C32.0809 18.1226 33.5171 18.4604 34.8193 19.1114C36.1214 19.7625 37.2534 20.7089 38.125 21.875" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1.875 21.875C2.74656 20.7089 3.87856 19.7625 5.18072 19.1114C6.48287 18.4604 7.91915 18.1226 9.375 18.125" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11 33.7499C11.8232 32.0641 13.1033 30.6434 14.6944 29.6496C16.2856 28.6558 18.124 28.1289 20 28.1289C21.876 28.1289 23.7144 28.6558 25.3056 29.6496C26.8968 30.6434 28.1768 32.0641 29 33.7499" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9.37422 18.125C8.42522 18.126 7.49555 17.8568 6.69382 17.3491C5.8921 16.8413 5.25144 16.1158 4.84669 15.2575C4.44195 14.3991 4.28984 13.4433 4.40815 12.5017C4.52645 11.5601 4.91027 10.6716 5.51477 9.94007C6.11927 9.20851 6.91947 8.66409 7.82189 8.37042C8.7243 8.07676 9.69166 8.04597 10.6109 8.28166C11.5302 8.51735 12.3634 9.00978 13.0132 9.70142C13.663 10.3931 14.1025 11.2553 14.2805 12.1875" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M25.7188 12.1875C25.8967 11.2553 26.3362 10.3931 26.986 9.70142C27.6358 9.00978 28.469 8.51735 29.3883 8.28166C30.3076 8.04597 31.2749 8.07676 32.1773 8.37042C33.0797 8.66409 33.88 9.20851 34.4844 9.94007C35.0889 10.6716 35.4728 11.5601 35.5911 12.5017C35.7094 13.4433 35.5573 14.3991 35.1525 15.2575C34.7478 16.1158 34.1071 16.8413 33.3054 17.3491C32.5037 17.8568 31.574 18.126 30.625 18.125" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5471_14158">
                                        <rect width="40" height="40" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <CountUp 
                                    end={100000} 
                                    separator="," 
                                    enableScrollSpy 
                                    scrollSpyOnce 
                                    className="counter"
                                    suffix="+"
                                />
                                <Paragraph className='mb-0 p-counter'>Instructor</Paragraph>
                            </div>
                        </div>
                    </div>
                
                </div>
            </section>
            <section className="container px-70 py-5">
                <Paragraph className='main_section_title'>Popular Category</Paragraph>
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-lg-5 g-3 justify-content-center py-5">
                    {categories && categories.map((item, index) => {
                        return (
                            <div className="col" key={index}>
                                <div className="categorey_box d-flex flex-column justify-content-center align-items-center">
                                    <div className="popular_icon mb-3" onClick={()=>HandelCourses(item.id)}>
                                        <img src={item.image} alt={item.title} width='24px' height='24px' />
                                    </div>
                                    <Paragraph className="popular_title">{item.title}</Paragraph>
                                    <Paragraph className='mb-0 popular_desc'>20 Course</Paragraph>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
export default KnowledgeDescription;