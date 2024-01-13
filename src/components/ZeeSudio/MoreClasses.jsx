import React, { useContext, useEffect, useState }  from 'react'
import HeaderClasses from './HeaderClasses'
import TrainingClasses from './TrainingClasses'
import CardsClasses from './CardsClasses'
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { getTrainingClasses } from "../../apis/ZeeStudio";

function MoreClasses() {

  const [classesGym , setClassesGym] = useState([]);
  const [classesGymFilter , setClassesGymFilter] = useState([]);

  const {token} = useContext(AuthContext);

   useEffect(()=>{
      const controller = new AbortController();
      const signal = controller.signal;

      const getClassesCards = async ()=>{
        try{
          const result = await getTrainingClasses(token, '', '', '', signal)
          setClassesGym(result);
          setClassesGymFilter(result);
        }catch(error){
          console.log(error);
        }
      }

      getClassesCards()
      return () => {controller.abort()}
    },[]);

  const getFilteredData = (data) => {
    setClassesGym(data);
  }

  return (
    <>
      <HeaderClasses/>
      <TrainingClasses classesGym={classesGymFilter || []} getFilteredData={getFilteredData} />
      <CardsClasses classesGym={classesGym} />
    </>
  )
}

export default MoreClasses