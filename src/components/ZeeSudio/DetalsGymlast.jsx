import React, { useContext, useState } from "react";
import Media from "../Media/Media";
import details from "../../assets/images/DetalPage.jpg";
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";
import Moment, { moment } from "react-moment";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import LoginAlert from "../Auth/LoginAlertModal";

function DetalsGymlast({ details }) {
  const date = new Date();
  const { token } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);

  const handelClose = () => setShowLogin(false);

  function handleTime(time) {
    console.log(typeof time);
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
  }

  const navigate = useNavigate();

  const HandelSummery = (value) => {
    const gymCourseDetails = {
      id: value.id,
      title: value.title,
      date: value.start_date,
      duration: value.duration,
      schedule: value.schedule,
      price: value.price,
      level: value.level,
    };
  
    if (token) {
      sessionStorage.setItem(
        "OZgymCourseDetails",
        JSON.stringify(gymCourseDetails)
      );
      navigate(`/payment`);
    } else {
      setShowLogin(true);
    }
  };
  return (
    <>
      <div className="container py-5">
        {details && (
          <div className="row">
            <div className="col-xl-7 col-md-6 col-sm-12">
              <Media
                type="img"
                src={details.image}
                alt={details.title}
                className="w-100"
              />
              <div className="py-4">
                <Paragraph className="desc_small light">
                  {details.end_date}
                </Paragraph>
              </div>
            </div>
            <div className="col-xl-5 col-md-6 col-sm-12">
              <div className="bg-gymDetails py-4 px-4 ">
                <Paragraph className="card-title">Class Details</Paragraph>
                <Paragraph className="desc_small_light py-3">
                  {details.details}
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Duration :
                  <span className="desc_small"> {details.duration}</span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Intensity :
                  <span className="desc_small"> {details.intensity}</span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Fitness Level :
                  <span className="desc_small"> {details.level}</span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Schedule :
                  <span className="desc_small">{details.schedule}</span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Start & End Time :
                  <span className="desc_small">
                    <span className="px-2">
                      <Moment
                        add={{ hours: 12 }}
                        format="LT"
                        date={details.start_time}
                      ></Moment>
                    </span>
                    -<span className="px-2">{details.end_time}</span>
                  </span>
                </Paragraph>
                <Paragraph className="desc_small light ">
                  Price :
                  <span className="desc_small">
                    {Math.floor(details.price)} Egp
                  </span>
                </Paragraph>
                <Button
                  tagType="link"
                  onClick={() => HandelSummery(details)}
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
                {details.descriptions}
              </Paragraph>
              {/* <ul className="ps-3">
                <li className="description_black light">
                  A natural way of your health.
                </li>
                <li className="description_black light">
                  Train Yourself to Exercise.
                </li>
                <li className="description_black light">
                  Enhancing the personal healing.
                </li>
              </ul> */}
              <div className="">
                {/* <Paragraph className="paragraph_black">
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
                </Paragraph> */}
                {/* <ul className="ps-1 list-unstyled">
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
                </ul> */}
              </div>
            </div>
            <div className="col-12 py-5">
              <video
                src={details.video}
                className="w-100"
                height="616px"
                controls
              />
            </div>
          </div>
        )}
      </div>
      <LoginAlert show={showLogin} onHide={handelClose} />
    </>
  );
}

export default DetalsGymlast;
