import React from "react";
import Media from "../Media/Media";
import details from "../../assets/images/DetalPage.jpg";
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";
import img from "../../assets/images/Vimg.jpg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getClassById } from "../../apis/ZeeStudio";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { useState, useEffect, useContext } from "react";
function DetalsGymlast() {
  const [classDetails, setClassDetails] = useState({});
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const date  = new Date()
  console.log(date);


  // function handleTime(time) {
  //   const [hours, minutes, seconds] = time;
  //   const date = new Date();
  //   date.setHours(hours);
  //   date.setMinutes(minutes);
  //   date.setSeconds(seconds);
  //   const formattedTime = date.toLocaleTimeString("en-US", {
  //     hour: "numeric",
  //     minute: "2-digit",
  //     hour12: true,
  //   });
  //   return formattedTime;
   
  // }
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getClass = async () => {
      try {
        const result = await getClassById(token, signal, id);
        setClassDetails(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    getClass();
    return () => controller.abort();
  }, []);

  const navigate = useNavigate();

  // const HandelSummery = () => {
  //   const gymCourseDetails = {
  //     title: ''
  //   }
  //   sessionStorage.setItem(
  //     "OZgymCourseDetails",
  //     JSON.stringify(gymCourseDetails)
  //   );
  //   navigate(`/payment`);
  // }
  return (
    <>
      <div className="container py-5">
        {classDetails && (
          <div className="row">
            <div className="col-xl-7 col-md-6 col-sm-12">
              <Media
                type="img"
                src={classDetails.image}
                alt={classDetails.title}
                className="w-100"
              />
              <div className="py-4">
                <Paragraph className="desc_small light">
                  {classDetails.end_date}
                </Paragraph>
              </div>
            </div>
            <div className="col-xl-5 col-md-6 col-sm-12">
              <div className="bg-gymDetails py-4 px-4 ">
                <Paragraph className="card-title">Class Details</Paragraph>
                <Paragraph className="desc_small_light pt-2 mb-0">
                  {classDetails.details}
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Duration :
                  <span className="desc_small"> {classDetails.duration}</span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Intensity :
                  <span className="desc_small"> {classDetails.intensity}</span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Fitness Level :
                  <span className="desc_small"> {classDetails.level}</span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Schedule :
                  <span className="desc_small">{classDetails.schedule}</span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Start & End Time :
                  <span className="desc_small">
                    {classDetails.start_time}-{classDetails.end_time}
                    {/* {handleTime(classDetails.start_time)} -
                    {handleTime(classDetails.end_time)} */}
                  </span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Price :
                  <span className="desc_small">
                    {Math.floor(classDetails.price)} Egp
                  </span>
                </Paragraph>
                <Button
                  tagType="link"
                  // onClick={HandelSummery}
                  className="btn button-outLine btn-bg-white"
                >
                  {"Book a Class"}
                </Button>
              </div>
            </div>
            <div className="col-10 mt-5 mt-xl-0">
              <Paragraph className="paragraph_black">
                The Healthy Life Style For All
              </Paragraph>
              <Paragraph className="description_black light">
                Proactively envisioned multimedia based expertise crosses media
                growth strategies. Seamlessly visualize quality intelectual
                captal without superor collaboration idea sharing Holistically
                pontficate installed based portals after maintainabled products.
                Phosfluorescently engaged world wide methodologies with enabled
                Completely pursue scalable customer service through sustainable
                potentialities
              </Paragraph>
              <ul className="ps-3">
                <li className="description_black light">
                  A natural way of your health.
                </li>
                <li className="description_black light">
                  Train Yourself to Exercise.
                </li>
                <li className="description_black light">
                  Enhancing the personal healing.
                </li>
              </ul>
              <div className="">
                <Paragraph className="paragraph_black">
                  Make real time a health improvements
                </Paragraph>
                <Paragraph className="description_black light">
                  Proactively envisioned multimedia based expertise crosses
                  media growth strategies. Seamlessly visualize quality
                  intelectual captal without superor collaboration idea sharing
                  Holistically pontficate installed based portals after
                  maintainabled products. Phosfluorescently engaged world wide
                  methodologies with enabled Completely pursue scalable customer
                  service through sustainable potentialities
                </Paragraph>
                <ul className="ps-1 list-unstyled">
                  <li className="description_black light">
                    1. It brings the right people together with all the right
                    information and tools to get work done
                  </li>
                  <li className="description_black light">
                    2. We provide operational efficiency, data security, and
                    flexible scale
                  </li>
                  <li className="description_black light">
                    3. Your best work, together in one package that works
                    seamlessly from your computer
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 py-5">
              <Media type="video" src={classDetails.video} className="w-100" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DetalsGymlast;
