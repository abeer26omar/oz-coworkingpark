import React, { useContext, useEffect, useState } from "react";
import Media from "../Media/Media";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import Class from "../../assets/images/PlatesClass.jpg";
import Aerobic from "../../assets/images/Aerobic.jpg";
import CrossFit from "../../assets/images/CrossFit.jpg";
import Yoga from "../../assets/images/Yoga.jpg";
import Boxing from "../../assets/images/Boxing.jpg";
import Dance from "../../assets/images/Dance.jpg";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { getTrainingClasses } from "../../apis/ZeeStudio";
const CardsClasses = () => {
const [classesGym , setClassesGym] = useState([]);
const {token} = useContext(AuthContext);
useEffect(()=>{
  const controller = new AbortController();
  const signal = controller.signal;
  const getClassesCards = async ()=>{
    try{
      let result = await getTrainingClasses(token , signal)
      setClassesGym(result)
      console.log(result);
    }catch(error){
      console.log(error);

    }
  }
  getClassesCards()
  return () => controller.abort()
},[])

let content = '';
 if (classesGym.length === 0) {
   content = (
     <Paragraph className="empty mb-0">there is not classes yet</Paragraph>
   );
 }
if (classesGym){
  content = classesGym.slice(0,6).map((card , index)=>{
    return (
      <>
        <div className="col-xl-4 col-md-6 col-sm-12 my-2" key={index}>
          <div className="card my-2 h-100 text-start">
            <Media
              type="img"
              src={card.image}
              className="w-100"
              alt={card.title}
            />
            <div className="card-body">
              <Paragraph className="card-title">{card.title}</Paragraph>
              <Paragraph className="description_black py-2">
                {card.descriptions.slice(0, 150)}
              </Paragraph>
              <div className="d-flex justify-content-between align-items-center ">
                <Button
                  tagType="link"
                  to={`/`}
                  name={""}
                  className="btn button-outLine btn-bg-white  m-auto-unset"
                >
                  {"Explore More"}
                </Button>
                <Paragraph className="card-title">
                  {Math.floor(card.price)} Egp
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  })

}
  return (
    <>
      <div className="container-fluid  px-70 py-5">
        <div className="row py-5">
          <Paragraph className="fs-4">
            <span className="card-title mx-2">{classesGym.length}</span>
            Results Founds
          </Paragraph>
          {content}
        </div>
        <div className="text-center">
          <Button
            tagType="link"
            to={`/ourtrainer`}
            name={""}
            className="btn button-outLine btn-bg-white m-auto-unset"
          >
            {"Explore More"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardsClasses;
