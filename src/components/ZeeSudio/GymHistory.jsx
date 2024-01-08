import React from "react";
import Paragraph from "../UI/Paragraph";
import Media from "../Media/Media";
import img from "../../assets/images/history.jpg";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
function GymHistory() {
  return (
    <>
      <div className="bg-body-tertiary navigator">
        <div className="container-fluid  d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <h1 className="title-name mb-0">Zee Studio History</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="127"
              viewBox="0 0 2 127"
              fill="none"
            >
              <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5" />
            </svg>
          </div>
          <div className="d-flex">
            <Paragraph className="mx-3">Active</Paragraph>
            <Paragraph className="mx-3">Ended</Paragraph>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="card my-4 p-2 ">
          <div className="d-flex justify-content-between align-items-center">
            <Media src={img} type="img" />
            <div className="p-4">
              <Paragraph className="light">
                Date Submitted : Feb 2 , 2023
              </Paragraph>
              <Paragraph className="card-title">Boxing Class</Paragraph>
              <Paragraph className="light w-75">
                Proactively envisioned multimedia based expertise crosses media
                growth strategies. Seamlessly visualize quality intelectual
                captal without superor collaboration idea sharing Holistically
                pontficate installed based portals after maintainabled products.
              </Paragraph>
            </div>
            <CircularProgressbarWithChildren
              //   className='mx-3'
              value={"50"}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                pathColor: "#D0DF00",
                trailColor: "#BDBDBD",
                backgroundColor: "#fff",
              })}
            >
              {/* <span className="progress_text">Booking</span> */}
              <span className="progress_percentage light">5/12</span>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="card my-4 p-2 ">
          <div className="d-flex justify-content-between align-items-center">
            <Media src={img} type="img" />
            <div className="p-4">
              <Paragraph className="light">
                Date Submitted : Feb 2 , 2023
              </Paragraph>
              <Paragraph className="card-title">Boxing Class</Paragraph>
              <Paragraph className="light w-75">
                Proactively envisioned multimedia based expertise crosses media
                growth strategies. Seamlessly visualize quality intelectual
                captal without superor collaboration idea sharing Holistically
                pontficate installed based portals after maintainabled products.
              </Paragraph>
            </div>
            <CircularProgressbarWithChildren
              //   className='mx-3'
              value={"30"}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                pathColor: "#D0DF00",
                trailColor: "#BDBDBD",
                backgroundColor: "#fff",
              })}
            >
              {/* <span className="progress_text">Booking</span> */}
              <span className="progress_percentage light">2/12</span>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </>
  );
}

export default GymHistory;
