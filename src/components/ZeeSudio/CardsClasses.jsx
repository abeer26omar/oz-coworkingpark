import React, { useContext, useEffect, useState } from "react";
import Media from "../Media/Media";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { getTrainingClasses } from "../../apis/ZeeStudio";

const CardsClasses = () => {

    const [classesGym , setClassesGym] = useState([]);
    const [visibleCards, setVisibleCards] = useState(12);

    const {token} = useContext(AuthContext);

    useEffect(()=>{
      const controller = new AbortController();
      const signal = controller.signal;
      const getClassesCards = async ()=>{
        try{
          let result = await getTrainingClasses(token , signal)
          setClassesGym(result)
        }catch(error){
          console.log(error);

        }
      }
      getClassesCards()
      return () => {controller.abort()}
    },[])

    let content = '';
    if (classesGym.length === 0) {
      content = (
        <Paragraph className="empty mb-0">there is not classes yet</Paragraph>
      );
    }
    if (classesGym){
      content = classesGym.slice(0, visibleCards).map((card , index)=>{
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
                      to={`/gymdetails/${card.id}`}
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

    const HandelShowMore = () => {
      setVisibleCards(prevVisibleCards => prevVisibleCards + 3);
    };

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
        {classesGym && visibleCards < classesGym.length && (
          <div className="text-center">
            <Button
              tagType="link"
              onClick={HandelShowMore}
              className="btn button-outLine btn-bg-white m-auto-unset"
            >
              {"Explore More"}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CardsClasses;
