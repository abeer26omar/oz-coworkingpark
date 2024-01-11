import React, { useContext, useEffect, useState } from "react";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import Media from "../Media/Media";
import Class1 from "../../assets/images/Train1.jpg";
import Class2 from "../../assets/images/Train2.jpg";
import Class3 from "../../assets/images/Trainer3.jpg";
import Class4 from "../../assets/images/Train4.jpg";
import Class5 from "../../assets/images/Train5.jpg";
import Class6 from "../../assets/images/Train6.jpg";
import CardTrainerLink from "../UI/CardTrainerLink";
import { getTrainingClasses } from "../../apis/ZeeStudio";
import { AuthContext } from "../../apis/context/AuthTokenContext";

const TrainerLinksCard = () => {
  const [classesList, setClassesList] = useState([]);
  const { token } = useContext(AuthContext);
  const [visibleCards, setVisibleCards] = useState(3);
  // const [cards, setCards] = useState(...Object.values(venues));
        // setCards(...Object.values(venues)?.slice(0, 3));



  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getClasses = async () => {
      try {
        const result = await getTrainingClasses(token, signal);
        setClassesList(result.slice(0, 12));
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    getClasses();
    return () => controller.abort();
  }, []);
    const handleShowMore = () => {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
    };

  let content = "";
  if (classesList.length === 0) {
    content = (
      <Paragraph className="empty mb-0">there is not classes yet</Paragraph>
    );
  }
  if (classesList) {

    content = classesList.map((item, index) => {
      return (
        <div className="col-xl-4 col-md-6 col-sm-12 my-2" key={index}>
          <CardTrainerLink
            src={item.image}
            title={item.title}
            desc={item.descriptions.slice(0, 100)}
            hrefInsta={''}
            hrefFace={''}
            hrefTwi={''}
          />
        </div>
      );
    }); 
  }
  return (
    <>
      <div className="container-fluid px-70">
        <div className="row py-5">
          <Paragraph className="paragraph_black">Trainers</Paragraph>
          {content}
        </div>
        <div className="text-center py-5">
          <Button
            tagType="link"
            className="btn button-outLine btn-bg-white"
            onClick={handleShowMore}
          >
            {"Explore More"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default TrainerLinksCard;
