import React , {useEffect , useState , useContext}from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import prevent from "../../../assets/images/videos/prevent.mp4";
import "./PrivateEventsHeader.css";
import MainHeaderWrapper from "../../UI/MainHeaderWrapper";
import { PrivateEventsData } from "../../../Data/PrivateEventsData";
import Paragraph from "../../UI/Paragraph";
import Slider from "react-slick";
import { AuthContext } from "../../../apis/context/AuthTokenContext";
import { getBranches } from "../../../apis/config";
const PrivateEventsHeader = (props) => {
  const [branches, setBranches] = useState([]);
  const [imageValue, setImageValue] = useState("");
  const { token } = useContext(AuthContext);
  

  const settings = {
    slidesToShow: branches?.lenght < 4  ?   branches?.length : 4,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };



  useEffect(() => {
    const bookingVideo = () => {
      props.configData?.map((configItem) => {
        if (configItem.key === "private_events_image") {
          setImageValue(configItem.value);
        }
      });
    };
    bookingVideo();
  }, [props]);
useEffect (()=>{
    const controller = new AbortController();
    const signal = controller.signal;
  const getBranchesData = async () =>{
    try{
      const res = await  getBranches(token, signal)
      // console.log(res)
      setBranches(res)

    }catch(error){

    }
  } 
  getBranchesData()

return () => controller.abort();
 
},[])
  
  return (
    <>
      <div className="navigator private slider-sm-responsive">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between  row">
            <div className="d-flex col-xl-6 col-md-4 col-sm-12">
              <h1 className="title-name mb-0">Private Events</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="127"
                viewBox="0 0 2 127"
                fill="none"
              >
                <path
                  d="M1 0L1.00001 127"
                  stroke="#BDBDBD"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            {/* <div className=" py-3 "> */}
            {/*  */}
            <div className="col-xl-6 col-md-8 col-sm-12">
              <Slider {...settings} >
                {branches?.map((branch, index) => {
                  // const { address } = branch?.name;
                  return (
                    <Link
                      className="nav-link-two links-margin "
                      to={branch?.name}
                      smooth={true}
                      duration={100}
                      key={index}
                    >
                      {branch?.name}
                    </Link>
                  );
                })}
              </Slider>
            </div>
            {/* </div> */}
          </div>
        </Container>
      </div>

            <MainHeaderWrapper  image={imageValue}>
                <div className={`container-fluid px-70 py-5`}>
                    <div className='col-md-6 col-12'>
                      {props.configData ? props.configData.map((configItem , index) =>(
                        <React.Fragment key={index}>
                          {configItem.key ===  "private_events_title" &&  
                           <Paragraph className="head_paragraph mb-3">
                             {configItem.value}
                            </Paragraph>
                             }
                    {configItem.key === 'private_events_description' && (
                        <Paragraph className="description mb-0">
                                 {configItem.value}
                
                        </Paragraph>
                    ) }
                        </React.Fragment>
                      )) :""} 
             
          </div>
        </div>
      </MainHeaderWrapper>
    </>
  );
};

export default PrivateEventsHeader;
