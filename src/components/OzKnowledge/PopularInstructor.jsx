import { useEffect, useState, useContext } from "react";
import Paragraph from '../UI/Paragraph';
import Slider from "react-slick";
import Media from '../Media/Media';
import img from '../../assets/images/image 12.png';
import { getInstructorsList } from '../../apis/OzKnowledge';
import { AuthContext } from '../../apis/context/AuthTokenContext';

const PopularInstructor = ({details}) => {

    const [instractors, setInstractors] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    // const { token } = useContext(AuthContext);

    // useEffect(()=>{
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     const getCategories = async () => {
    //         try{
    //             const result = await getInstructorsList(token, signal, 3, 0);
    //             setInstractors(result);
    //         }catch (error){
    //             console.log(error);
    //         }
    //     }
    //     getCategories();
    //     return () => controller.abort();
    // }, []);

    const handleSlideChange = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        cssEase: "linear",
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        lazyLoad: true,
        beforeChange: (_, nextSlide) => handleSlideChange(nextSlide),
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    dots: false
                }
            }
        ]
    }

    return (
      <>
        <section className="popularInstructor border-of-section">
          <div className="head-content-sec">
            <Paragraph className="head_feature">
              {"Our Best Instructor"}
            </Paragraph>
          </div>
          <div
            className="border-of-section"
            style={{
              borderBottom: "none",
            }}
          >
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8 col-md-7 col-12 border-right">
                  <Slider {...settings}>
                    {details?.map((item, index) => {
                      return (
                        <div className="img_block" key={item.index}>
                          <Media
                            type="img"
                            src={item.image}
                            className="w-100 image-box"
                            alt={item.name}
                          />
                        </div>
                      );
                    })}
                  </Slider>
                </div>

                <div className="col-lg-4 col-md-5 col-12 my-auto ">
                  <div className="box-content p-lg-4 p-3">
                    {details?.length > 0 && (
                      <>
                        <Paragraph className="paragraph_black">
                          {details[currentSlide].name}
                        </Paragraph>
                        <Paragraph className="courses_jobTitle">
                          {details[currentSlide].category?.title}
                        </Paragraph>
                        <Paragraph className="description_black">
                          {details[currentSlide].description}
                        </Paragraph>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};
export default PopularInstructor;