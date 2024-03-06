import React, { useContext, useState } from "react";
import Media from "../Media/Media";
import details from "../../assets/images/DetalPage.jpg";
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import LoginAlert from "../Auth/LoginAlertModal";
import { Skeleton } from "antd";
import * as DOMPurify from "dompurify";

function DetalsGymlast({ details, pending }) {
  const { token } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);

  const handelClose = () => setShowLogin(false);

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
  const [skeleton, setSkeleton] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  // const showMore =
  //   details?.details.length > details?.details.length - 1 &&
  //   details?.details.slice(0, Num);
  // const showMore = () => {
  //   setNum(!Num);
  // };
  return (
    <>
      <div className="container-fluid px-70 py-5">
        {details && (
          <div className="row g-3">
            <div className="col-xl-8 col-md-6 col-sm-12">
              {pending ? (
                <Skeleton.Image className="w-100" active />
              ) : (
                <>
                  <img
                    src={details?.image}
                    alt={details?.title}
                    className="w-100"
                    height={"608px"}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </>
              )}

              <div className="py-4">
                {pending ? (
                  <Skeleton active paragraph={false} title={true} />
                ) : (
                  <>
                    <Paragraph className="desc_small light">
                      {moment(details?.end_date, "YYYY-MM-DD").format(
                        "MMMM DD, YYYY"
                      )}
                    </Paragraph>
                  </>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="bg-gymDetails py-4 px-4 " height="100%">
                {pending ? (
                  <Skeleton active paragraph={{ rows: 5 }} />
                ) : (
                  <>
                    <Paragraph className="card-title">Class Details</Paragraph>
                    <Paragraph
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(details?.details),
                      }}
                      className={
                        isOpen
                          ? "desc_small_light py-3 animate__animated "
                          : "desc_small_light show-more-paragraph mt-3  "
                      }
                    >
                      {details?.details}
                    </Paragraph>
                    <li
                      className="desc_small_light d-inline hover-paragraph-show  "
                      onClick={() => setIsopen(!isOpen)}
                    >
                      {isOpen ? <u>Show Less</u> : <u>Show More...</u>}
                    </li>
                    <Paragraph className="desc_small light py-2 mt-3">
                      Duration :
                      <span className="desc_small"> {details?.duration}</span>
                    </Paragraph>
                    <Paragraph className="desc_small light py-2 ">
                      Intensity :
                      <span className="desc_small"> {details?.intensity}</span>
                    </Paragraph>
                    <Paragraph className="desc_small light py-2 ">
                      Fitness Level :
                      <span className="desc_small"> {details?.level}</span>
                    </Paragraph>
                    <Paragraph className="desc_small light ">
                      Schedule :
                      <span className="desc_small">{details?.schedule}</span>
                    </Paragraph>
                    <Paragraph className="desc_small light py-2 ">
                      Start & End Time :
                      <span className="desc_small">
                        <span className="px-2">
                          {moment(details?.start_time, "HH:mm:ss").format(
                            "hh:mm a"
                          )}
                        </span>
                        -
                        <span className="px-2">
                          {moment(details?.end_time, "HH:mm:ss").format(
                            "hh:mm a"
                          )}
                        </span>
                      </span>
                    </Paragraph>
                    <Paragraph className="desc_small light py-2 ">
                      Price :
                      <span className="desc_small">
                        {Math.floor(details?.price)} Egp
                      </span>
                    </Paragraph>
                  </>
                )}
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
              {pending ? (
                <Skeleton active paragraph={{ rows: 1 }} />
              ) : (
                <Paragraph className="description_black light">
                  {details.descriptions}
                </Paragraph>
              )}
            </div>
            <div className="col-12 py-5 video-container position-relative">
              {pending ? (
                <Skeleton.Image active />
              ) : (
                <video
                  src={details.video}
                  className="w-100"
                  height="616px"
                  controls
                />
              )}
            </div>
          </div>
        )}
      </div>
      <LoginAlert show={showLogin} onHide={handelClose} />
    </>
  );
}

export default DetalsGymlast;
