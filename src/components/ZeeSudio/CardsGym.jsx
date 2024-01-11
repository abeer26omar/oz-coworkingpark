import React, { useContext, useEffect, useState } from "react";
import Media from "../Media/Media";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import {getTrainingClasses} from '../../apis/ZeeStudio';
import { AuthContext } from "../../apis/context/AuthTokenContext";

const CardsGym = () => {

  const [classesList, setClassesList] = useState([]);
  const [error, setError] = useState('');

  const { token } = useContext(AuthContext);

  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;

    const getClasses = async () => {
      try{
        const result = await getTrainingClasses(token, signal);
        setClassesList(result);
      }catch (error){
        setError(error)
      }
    }
    getClasses();
    return () => controller.abort();
  },[]);

  let content = '';
  if(classesList.length === 0){
    content = (<Paragraph className='empty mb-0'>there is not classes yet</Paragraph>)
  }
  if(classesList){
    content = classesList.slice(0,6).map((item, index) => {
      return (
        <div className="col my-2" key={index}>
          <div className="card my-2 h-100 text-start">
            <Media
              type="img"
              src={item.image}
              className="w-100"
              alt={item.title}
            />
            <div className="card-body">
              <Paragraph className="card-title">
                {item.title}
              </Paragraph>
              <Paragraph className="description_black py-2">
                {item.descriptions.slice(0, 70)}
              </Paragraph>
              <div className="d-flex justify-content-between align-items-center ">
                <Button
                  tagType="link"
                  to={`/gymdetails/${item.id}`}
                  className="button-outLine btn-bg-white m-auto-unset"
                >
                  {"Explore More"}
                </Button>
                <Paragraph className="card-title">
                  {Math.floor(item.price)} Egp
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      );
    })
  }
  return (
    <>
      <div className="row row-cols-xl-3 row-cols-md-2 row-cols-sm-1 py-5">
        {content}
      </div>
    </>
  );
};

export default CardsGym;
