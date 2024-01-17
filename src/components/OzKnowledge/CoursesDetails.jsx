import Button from '../UI/Button';
import FilteredCourses from './FilteredCourses';
import { getCoursesList } from '../../apis/OzKnowledge';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../apis/context/AuthTokenContext';

const CoursesDetails = () => {

    const [courses, setCourses] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const ids = JSON.parse(sessionStorage.getItem('coursesIdsOz'));
    const { token } = useContext(AuthContext);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        const getClasses = async () => {
            try{
                const result = await getCoursesList(token, signal, '', '', '', '', '', ids, '', '', limit, page);
                setCourses(result);
            }catch (error){
                console.log(error);
            }
        }
        getClasses();

        return () => controller.abort();
    }, [ids]);

    return (
        <>
            <section className='container-fluid'>
                <div className="row border-top border-bottom booking-space-margin mb-5 align-items-center justify-content-between">
                    <div className="col-lg-2 col-md-3 col-5">
                        <div className='d-flex align-items-center justify-content-between'>
                            <h2 className="book-title mb-0 mx-auto">{'Courses'}</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="127" viewBox="0 0 2 127" fill="none">
                                <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width=".5"/>
                            </svg>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-6 d-flex justify-content-end me-4">
                            <Button 
                                tagType='link' 
                                className="button-outLine px-4 btn-bg-white btn-filter text-center m-0"
                                to={'/coursesHistory'}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.07922 5.06902C8.87422 1.27902 15.0442 1.31902 18.8622 5.13802C22.6822 8.95802 22.7222 15.131 18.9262 18.926C15.1312 22.721 8.95822 22.682 5.13822 18.862C4.06372 17.792 3.25187 16.4874 2.7664 15.0508C2.28093 13.6141 2.13505 12.0845 2.34022 10.582C2.36714 10.3848 2.47129 10.2064 2.62976 10.086C2.78823 9.96562 2.98803 9.9131 3.18522 9.94002C3.38241 9.96694 3.56083 10.0711 3.68123 10.2296C3.80163 10.388 3.85414 10.5878 3.82722 10.785C3.65306 12.0583 3.77653 13.3547 4.18793 14.5722C4.59933 15.7898 5.28745 16.8953 6.19822 17.802C9.44322 21.046 14.6662 21.065 17.8662 17.866C21.0652 14.666 21.0462 9.44302 17.8022 6.19802C14.5592 2.95602 9.33922 2.93502 6.13922 6.13002L6.88722 6.13302C6.98571 6.13348 7.08315 6.15334 7.17397 6.19145C7.26479 6.22957 7.34721 6.2852 7.41653 6.35517C7.48585 6.42514 7.54071 6.50807 7.57797 6.59924C7.61524 6.69041 7.63418 6.78803 7.63372 6.88652C7.63326 6.98501 7.61341 7.08245 7.57529 7.17327C7.53718 7.26409 7.48155 7.34651 7.41158 7.41583C7.34161 7.48515 7.25867 7.54 7.1675 7.57727C7.07633 7.61454 6.97871 7.63348 6.88022 7.63302L4.33422 7.62102C4.13652 7.61997 3.94724 7.5409 3.80753 7.40101C3.66783 7.26112 3.58901 7.07172 3.58822 6.87402L3.57522 4.33002C3.5747 4.23153 3.59358 4.1339 3.63078 4.0427C3.66799 3.95151 3.72279 3.86854 3.79206 3.79852C3.86134 3.7285 3.94372 3.67282 4.03452 3.63464C4.12531 3.59647 4.22273 3.57655 4.32122 3.57602C4.41971 3.5755 4.51735 3.59438 4.60854 3.63158C4.69974 3.66879 4.78271 3.72359 4.85273 3.79286C4.92274 3.86214 4.97843 3.94452 5.0166 4.03531C5.05478 4.12611 5.0747 4.22353 5.07522 4.32202L5.07922 5.07002V5.06902Z" fill="black"/>
                                <path d="M12 7.25C12.1989 7.25 12.3897 7.32902 12.5303 7.46967C12.671 7.61032 12.75 7.80109 12.75 8V11.69L15.03 13.97C15.1037 14.0387 15.1628 14.1215 15.2038 14.2135C15.2448 14.3055 15.2668 14.4048 15.2686 14.5055C15.2704 14.6062 15.2518 14.7062 15.2141 14.7996C15.1764 14.893 15.1203 14.9778 15.049 15.049C14.9778 15.1203 14.893 15.1764 14.7996 15.2141C14.7062 15.2518 14.6062 15.2704 14.5055 15.2686C14.4048 15.2668 14.3055 15.2448 14.2135 15.2038C14.1215 15.1628 14.0387 15.1037 13.97 15.03L11.543 12.604C11.45 12.511 11.3763 12.4007 11.326 12.2792C11.2757 12.1577 11.2499 12.0275 11.25 11.896V8C11.25 7.80109 11.329 7.61032 11.4697 7.46967C11.6103 7.32902 11.8011 7.25 12 7.25Z" fill="#BDBDBD"/>
                            </svg>
                                History
                            </Button>
                    </div>
                </div>
            </section>
            <FilteredCourses courses={courses}/>
        </>
    )
};
export default CoursesDetails;