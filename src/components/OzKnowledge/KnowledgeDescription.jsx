import Paragraph from "../UI/Paragraph";
import CountUp from 'react-countup';
import './OzKnowledge.css';
import { useNavigate } from "react-router";

const KnowledgeDescription = () => {

    const navigate = useNavigate();

    const HandelCourses = (info) => {
        navigate(`/courses/${info}`);
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
            <section className="container-fluid px-70 py-5">
                <Paragraph className='main_section_title'>Popular Category</Paragraph>
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-lg-5 g-3 justify-content-center py-5">
                    <div className="col">
                        <div className="categorey_box d-flex flex-column justify-content-center align-items-center">
                            <div className="popular_icon mb-3" onClick={()=>HandelCourses('design')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M11.4219 15.5C12.4574 15.5 13.2969 14.6605 13.2969 13.625C13.2969 12.5895 12.4574 11.75 11.4219 11.75C10.3863 11.75 9.54688 12.5895 9.54688 13.625C9.54688 14.6605 10.3863 15.5 11.4219 15.5Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.54688 21.4984L10.1 14.9453" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.54688 21.5L16.625 19.325C16.7541 19.303 16.875 19.2471 16.9755 19.1631C17.0759 19.0791 17.1523 18.97 17.1969 18.8469L19.2969 13.25L11.7969 5.75L6.2 7.85C6.07667 7.89698 5.9677 7.9753 5.88386 8.07722C5.80002 8.17915 5.74419 8.30117 5.72188 8.43125L3.54688 21.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19.2969 13.2519L21.7625 10.7862C21.8334 10.7165 21.8896 10.6333 21.9281 10.5415C21.9665 10.4498 21.9862 10.3513 21.9862 10.2519C21.9862 10.1524 21.9665 10.0539 21.9281 9.96221C21.8896 9.87047 21.8334 9.78728 21.7625 9.7175L15.3312 3.28625C15.2615 3.21538 15.1783 3.15911 15.0865 3.12069C14.9948 3.08228 14.8963 3.0625 14.7969 3.0625C14.6974 3.0625 14.599 3.08228 14.5072 3.12069C14.4155 3.15911 14.3323 3.21538 14.2625 3.28625L11.7969 5.75187" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <Paragraph className="popular_title">Design</Paragraph>
                            <Paragraph className='mb-0 popular_desc'>20 Course</Paragraph>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="popular_icon mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M20.0469 20H5.04688C4.64905 20 4.26752 19.842 3.98621 19.5607C3.70491 19.2794 3.54688 18.8978 3.54688 18.5V8C3.54688 7.60218 3.70491 7.22064 3.98621 6.93934C4.26752 6.65804 4.64905 6.5 5.04688 6.5H8.04688L9.54688 4.25H15.5469L17.0469 6.5H20.0469C20.4447 6.5 20.8262 6.65804 21.1075 6.93934C21.3888 7.22064 21.5469 7.60218 21.5469 8V18.5C21.5469 18.8978 21.3888 19.2794 21.1075 19.5607C20.8262 19.842 20.4447 20 20.0469 20Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.5469 16.25C14.4108 16.25 15.9219 14.739 15.9219 12.875C15.9219 11.011 14.4108 9.5 12.5469 9.5C10.6829 9.5 9.17188 11.011 9.17188 12.875C9.17188 14.739 10.6829 16.25 12.5469 16.25Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <Paragraph className="popular_title">Photography</Paragraph>
                            <Paragraph className='mb-0 popular_desc'>20 Course</Paragraph>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="popular_icon mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M11.7969 17H8.79688" stroke="#BDBDBD" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.2969 20.75V17" stroke="#BDBDBD" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.92188 17V20.75" stroke="#BDBDBD" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.54688 17V20.75" stroke="#BDBDBD" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.92188 18.875H6.54688" stroke="#BDBDBD" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.4219 17V20.75H22.6719" stroke="#BDBDBD" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.0469 20.75V17L15.9219 19.625L17.7969 17V20.75" stroke="#BDBDBD" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.04688 13.25V4.25C5.04688 4.05109 5.12589 3.86032 5.26655 3.71967C5.4072 3.57902 5.59796 3.5 5.79688 3.5H14.7969L20.0469 8.75V13.25" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7969 3.5V8.75H20.0469" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <Paragraph className="popular_title">Development</Paragraph>
                            <Paragraph className='mb-0 popular_desc'>20 Course</Paragraph>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="popular_icon mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M9.24727 6.03125L8.52539 4.29688" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.57812 10.6984L2.84375 9.97656" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20.5156 10.6984L22.25 9.97656" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.8477 6.03125L16.5695 4.29688" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20.0469 19.25H5.04688" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.12813 15.5014C6.89537 14.6657 6.85906 13.7876 7.02201 12.9355C7.18497 12.0835 7.54278 11.2807 8.06748 10.5899C8.59217 9.89909 9.26953 9.339 10.0466 8.95341C10.8237 8.56782 11.6794 8.36719 12.5469 8.36719C13.4144 8.36719 14.2701 8.56782 15.0471 8.95341C15.8242 9.339 16.5016 9.89909 17.0263 10.5899C17.551 11.2807 17.9088 12.0835 18.0717 12.9355C18.2347 13.7876 18.1984 14.6657 17.9656 15.5014" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M23.0469 15.5H2.04688" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <Paragraph className="popular_title">Lifestyle</Paragraph>
                            <Paragraph className='mb-0 popular_desc'>20 Course</Paragraph>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="popular_icon mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M3.54688 12.5H7.29688L8.79688 10.25L11.7969 14.75L13.2969 12.5H15.5469" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.18125 9.50001C3.17188 9.37813 3.17188 9.24688 3.17188 9.12501C3.17188 7.99803 3.56234 6.90585 4.27683 6.03431C4.99133 5.16277 5.98571 4.5657 7.09081 4.34468C8.19591 4.12366 9.34344 4.29235 10.3382 4.82204C11.3329 5.35174 12.1134 6.20972 12.5469 7.25001V7.25001C12.9803 6.20972 13.7608 5.35174 14.7556 4.82204C15.7503 4.29235 16.8978 4.12366 18.0029 4.34468C19.108 4.5657 20.1024 5.16277 20.8169 6.03431C21.5314 6.90585 21.9219 7.99803 21.9219 9.12501C21.9219 15.5 12.5469 20.75 12.5469 20.75C12.5469 20.75 8.80625 18.65 6.05 15.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <Paragraph className="popular_title">Health & Fitness</Paragraph>
                            <Paragraph className='mb-0 popular_desc'>20 Course</Paragraph>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="popular_icon mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M8.79688 22.25H16.2969" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.92508 16.1584C7.0322 15.4641 6.30904 14.5757 5.81038 13.5605C5.31173 12.5454 5.05066 11.43 5.04696 10.299C5.02821 6.23023 8.30008 2.84586 12.3688 2.75211C13.9435 2.71478 15.49 3.17417 16.7889 4.06514C18.0878 4.9561 19.0733 6.23341 19.6055 7.7159C20.1377 9.1984 20.1896 10.8108 19.754 12.3245C19.3183 13.8382 18.4171 15.1763 17.1782 16.149C16.9045 16.3605 16.6829 16.6318 16.5301 16.9422C16.3774 17.2525 16.2976 17.5937 16.297 17.9396V18.5021C16.297 18.701 16.2179 18.8918 16.0773 19.0324C15.9366 19.1731 15.7459 19.2521 15.547 19.2521H9.54696C9.34804 19.2521 9.15728 19.1731 9.01663 19.0324C8.87597 18.8918 8.79696 18.701 8.79696 18.5021V17.9396C8.79461 17.5963 8.71502 17.2579 8.56409 16.9496C8.41316 16.6412 8.19476 16.3708 7.92508 16.1584V16.1584Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13.3047 5.82422C14.2214 5.97961 15.0672 6.41569 15.7255 7.07228C16.3837 7.72886 16.822 8.57358 16.9797 9.48984" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <Paragraph className="popular_title">Personal Develop</Paragraph>
                            <Paragraph className='mb-0 popular_desc'>20 Course</Paragraph>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="popular_icon mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.2969 7.25V5.75C16.2969 5.35218 16.1388 4.97064 15.8575 4.68934C15.5762 4.40804 15.1947 4.25 14.7969 4.25H10.2969C9.89905 4.25 9.51752 4.40804 9.23622 4.68934C8.95491 4.97064 8.79688 5.35218 8.79688 5.75V7.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.5469 12.3398C18.8115 13.9218 15.7067 14.753 12.5469 14.7492C9.38642 14.7574 6.28051 13.926 3.54688 12.3398" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.4219 11.75H13.6719" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20.7969 7.25H4.29688C3.88266 7.25 3.54688 7.58579 3.54688 8V20C3.54688 20.4142 3.88266 20.75 4.29688 20.75H20.7969C21.2111 20.75 21.5469 20.4142 21.5469 20V8C21.5469 7.58579 21.2111 7.25 20.7969 7.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <Paragraph className="popular_title">Business Industry</Paragraph>
                            <Paragraph className='mb-0 popular_desc'>20 Course</Paragraph>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="popular_icon mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M8.79688 21.5C10.8679 21.5 12.5469 19.8211 12.5469 17.75C12.5469 15.6789 10.8679 14 8.79688 14C6.72581 14 5.04688 15.6789 5.04688 17.75C5.04688 19.8211 6.72581 21.5 8.79688 21.5Z" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.5469 17.75V4.25L20.0469 6.5V11L12.5469 8.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <Paragraph className="popular_title">Music</Paragraph>
                            <Paragraph className='mb-0 popular_desc'>20 Course</Paragraph>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default KnowledgeDescription;