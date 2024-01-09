import React from "react";
import Media from "../Media/Media";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import Class1 from "../../assets/images/Train1.jpg";
import Class2 from "../../assets/images/Train2.jpg";
import Class3 from "../../assets/images/Trainer3.jpg";
import Class4 from "../../assets/images/Train4.jpg";
import Class5 from "../../assets/images/Train5.jpg";
import Class6 from "../../assets/images/Train6.jpg";
import CardTrainerLink from "../UI/CardTrainerLink";

const TrainerLinksCard = () => {
  return (
    <>
      <div className="container-fluid px-70">
        <div className="row py-5">
          <Paragraph className="paragraph_black">Trainers</Paragraph>
          <div className="col-xl-4 col-md-6 col-sm-12 my-2">
            <CardTrainerLink
              src={Class1}
              title={`Pilates Training`}
              desc={`  containing Lorem Ipsum passagesand more recently with`}
            />
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 my-2">
            <CardTrainerLink
              src={Class2}
              title={`Aerobic Training`}
              desc={`  containing Lorem Ipsum passagesand more recently with`}
            />
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 my-2">
            <CardTrainerLink
              src={Class3}
              title={`CrossFit Workout`}
              desc={`  containing Lorem Ipsum passagesand more recently with`}
            />
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 my-2">
            <CardTrainerLink
              src={Class4}
              title={`Yoga As Therapy`}
              desc={`  containing Lorem Ipsum passagesand more recently with`}
            />
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 my-2">
            <CardTrainerLink
              src={Class5}
              title={`Boxing`}
              desc={`  containing Lorem Ipsum passagesand more recently with`}
            />
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 my-2">
            <CardTrainerLink
              src={Class6}
              title={`Energy Dance`}
              desc={`  containing Lorem Ipsum passagesand more recently with`}
            />
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 my-2">
            <CardTrainerLink
              src={Class1}
              title={`Pilates Training`}
              desc={`  containing Lorem Ipsum passagesand more recently with`}
            />
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 my-2">
            <CardTrainerLink
              src={Class2}
              title={`Aerobic Training`}
              desc={`  containing Lorem Ipsum passagesand more recently with`}
            />
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 my-2">
            <CardTrainerLink
              src={Class3}
              title={`CrossFit Workout`}
              desc={`  containing Lorem Ipsum passagesand more recently with`}
            />
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 my-2">
            <CardTrainerLink
              src={Class4}
              title={`Yoga As Therapy`}
              desc={`  containing Lorem Ipsum passagesand more recently with`}
            />
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 my-2">
            <CardTrainerLink
              src={Class5}
              title={`Boxing`}
              desc={`  containing Lorem Ipsum passagesand more recently with`}
            />
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 my-2">
            <CardTrainerLink
              src={Class6}
              title={`Energy Dance`}
              desc={`  containing Lorem Ipsum passagesand more recently with`}
            />
          </div>
        </div>
        <div className="text-center py-5">
          <Button
            tagType="link"
            to={`/gymdetails`}
            name={""}
            className="btn button-outLine btn-bg-white"
          >
            {"Explore More"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default TrainerLinksCard;
