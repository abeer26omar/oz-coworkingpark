import Paragraph from '../UI/Paragraph';
import Slider from "react-slick";
import CourseCard from './CourseCard';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../apis/context/AuthTokenContext';
import { getCoursesList } from '../../apis/OzKnowledge';

const PopularCourses = ({ details }) => {
    console.log(details);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getCategories = async () => {
      try {
        const result = await getCoursesList(token, signal, 10, 0);
        setCourses(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
    return () => controller.abort();
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    centerMode: true,
    centerPadding: "60px 0px 0px 0px",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "60px",
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="my-5">
        <div
          className="border-of-section head-content-sec"
          style={{
            borderBottom: "none",
          }}
        >
          <Paragraph className="head_feature">
            {"Most Popular Course"}
          </Paragraph>
        </div>
        <div
          className="border-of-section"
          style={{
            borderBottom: "none",
          }}
        >
          <div
            className="container-fluid px-70 pe-sm-0"
            style={{
              overflow: "hidden",
            }}
          >
            <div className="row py-5 align-items-center">
              <div className="col-lg-3 col-md-4 col-12">
                <Paragraph className="h2-text-box">
                  Our Popular Courses
                </Paragraph>
              </div>
              <div className="col-lg-9 col-md-8 col-12">
                <Slider {...settings} className="slick_knowledge py-5">
                  {courses &&
                    courses.map((item, index) => {
                      return (
                        <div className="px-sm-2 px-0" key={index}>
                          <CourseCard coursesDetails={item} loading={loading} />
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PopularCourses;