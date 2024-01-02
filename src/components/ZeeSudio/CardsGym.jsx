import React from "react";
import Media from "../Media/Media";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import Class from "../../assets/images/PlatesClass.jpg";
import Aerobic from "../../assets/images/Aerobic.jpg";
import CrossFit from "../../assets/images/CrossFit.jpg";
import Yoga from "../../assets/images/Yoga.jpg";
import Boxing from "../../assets/images/Boxing.jpg";
import Dance from "../../assets/images/Dance.jpg";



const CardsGym = () => {
  return (
    <>
      <div className="row py-5">
        <div className="col-xl-4 col-md-6 col-sm-12 my-2">
          <div className="card my-2 h-100 text-start">
            <Media type="img" src={Class} className="w-100" alt={""} />
            <div className="card-body">
              <Paragraph className="card-title">Pilates Class</Paragraph>
              <Paragraph className="description_black py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                dolores, iusto
              </Paragraph>
              <div className="d-flex justify-content-between align-items-center ">
                <Button
                  tagType="link"
                  to={`/`}
                  name={""}
                  className="btn button-outLine btn-bg-white"
                >
                  {"Explore More"}
                </Button>
                <Paragraph className="card-title">500 Egp</Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-12 my-2">
          <div className="card my-2 h-100 text-start">
            <Media type="img" src={Aerobic} className="w-100" alt={""} />
            <div className="card-body">
              <Paragraph className="card-title">Pilates Class</Paragraph>
              <Paragraph className="description_black py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                dolores, iusto
              </Paragraph>
              <div className="d-flex justify-content-between align-items-center ">
                <Button
                  tagType="link"
                  to={`/`}
                  name={""}
                  className="btn button-outLine btn-bg-white"
                >
                  {"Explore More"}
                </Button>
                <Paragraph className="card-title">500 Egp</Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-12 my-2">
          <div className="card my-2 h-100 text-start">
            <Media type="img" src={CrossFit} className="w-100" alt={""} />
            <div className="card-body">
              <Paragraph className="card-title">CrossFit Workout</Paragraph>
              <Paragraph className="description_black py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                dolores, iusto
              </Paragraph>
              <div className="d-flex justify-content-between align-items-center ">
                <Button
                  tagType="link"
                  to={`/`}
                  name={""}
                  className="btn button-outLine btn-bg-white"
                >
                  {"Explore More"}
                </Button>
                <Paragraph className="card-title">500 Egp</Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-12 my-2">
          <div className="card my-2 h-100 text-start">
            <Media type="img" src={Yoga} className="w-100" alt={""} />
            <div className="card-body">
              <Paragraph className="card-title">Yoga As Therapy</Paragraph>
              <Paragraph className="description_black py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                dolores, iusto
              </Paragraph>
              <div className="d-flex justify-content-between align-items-center ">
                <Button
                  tagType="link"
                  to={`/`}
                  name={""}
                  className="btn button-outLine btn-bg-white"
                >
                  {"Explore More"}
                </Button>
                <Paragraph className="card-title">500 Egp</Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-12 my-2">
          <div className="card my-2 h-100 text-start">
            <Media type="img" src={Boxing} className="w-100" alt={""} />
            <div className="card-body">
              <Paragraph className="card-title">Boxing Class</Paragraph>
              <Paragraph className="description_black py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                dolores, iusto
              </Paragraph>
              <div className="d-flex justify-content-between align-items-center ">
                <Button
                  tagType="link"
                  to={`/`}
                  name={""}
                  className="btn button-outLine btn-bg-white"
                >
                  {"Explore More"}
                </Button>
                <Paragraph className="card-title">500 Egp</Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-12 my-2">
          <div className="card my-2 h-100 text-start">
            <Media type="img" src={Dance} className="w-100" alt={""} />
            <div className="card-body">
              <Paragraph className="card-title">Energy Dance</Paragraph>
              <Paragraph className="description_black py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                dolores, iusto
              </Paragraph>
              <div className="d-flex justify-content-between align-items-center ">
                <Button
                  tagType="link"
                  to={`/`}
                  name={""}
                  className="btn button-outLine btn-bg-white"
                >
                  {"Explore More"}
                </Button>
                <Paragraph className="card-title">500 Egp</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsGym;
