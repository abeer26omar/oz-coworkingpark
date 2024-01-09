import Modaion from "../../assets/images/modation.jpg";
import Paragraph from "../UI/Paragraph";
import Slider from "react-slick";
import Button from "../UI/Button";
import Media from "../Media/Media";
// import img from "../../assets/images/image 12.png";

const Madaion = () => {
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
    responsive: [
      {
        breakpoint: 425,
        settings: {
          dots: false,
        },
      },
    ],
  };

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
                  <div className="img_block">
                    <Media
                      type="img"
                      src={Modaion}
                      className="w-100 image-box"
                      alt={""}
                    />
                  </div>
                  <div className="img_block">
                    <Media
                      type="img"
                      src={Modaion}
                      className="w-100 image-box"
                      alt={""}
                    />
                  </div>
                </Slider>
              </div>
              <div className="col-lg-4 col-md-5 col-12 my-auto ">
                <div className="box-content p-lg-4 p-3">
                  <Paragraph className="paragraph_black">{"Madison"}</Paragraph>
                  <Paragraph className="courses_jobTitle">
                    {"Crossfit Expoort, Nutrition & Rehab"}
                  </Paragraph>
                  <Paragraph className="description_black">
                    {
                      "Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod "
                    }
                  </Paragraph>

                  <Button
                    tagType="link"
                    className="btn button-outLine btn-bg-white"
                    to={"/houses"}
                  >
                    Explore More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Madaion;
