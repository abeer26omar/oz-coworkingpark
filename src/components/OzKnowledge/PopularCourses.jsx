import Paragraph from '../UI/Paragraph';
import Slider from "react-slick";
import CourseCard from './CourseCard';

const PopularCourses = () => {

    const settings = {
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '60px 0px 0px 0px',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '60px',
                    dots: false
                }
            }
        ]

    };

    return (
        <>
            <section className="my-5">
                <div className="border-of-section head-content-sec" style={{
                    borderBottom: 'none'
                }}>
                    <Paragraph className="head_feature">{"Most Popular Course"}</Paragraph>
                </div>
                <div className="border-of-section" style={{
                    borderBottom: 'none'
                }}>
                    <div className='container-fluid px-70 pe-sm-0' style={{
                        overflow: 'hidden'
                    }}>
                        <div className="row py-5 align-items-center">
                            <div className='col-lg-3 col-md-4 col-12'>
                                <Paragraph className="h2-text-box">Our Popular Courses</Paragraph>
                            </div>
                            <div className='col-lg-9 col-md-8 col-12'>
                                <Slider {...settings} className='slick_knowledge py-5'>
                                    <div className='px-sm-2 px-0'>
                                        <CourseCard />
                                    </div>
                                    <div className='px-sm-2 px-0'>
                                        <CourseCard />
                                    </div>
                                    <div className='px-sm-2 px-0'>
                                        <CourseCard />
                                    </div>
                                    <div className='px-sm-2 px-0'>
                                        <CourseCard />
                                    </div>
                                    <div className='px-sm-2 px-0'>
                                        <CourseCard />
                                    </div>
                                    <div className='px-sm-2 px-0'>
                                        <CourseCard />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default PopularCourses;