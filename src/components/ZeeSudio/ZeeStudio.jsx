import React, { useContext } from 'react'
import HeadZeeStuido from './HeadZeeStuido'
import OurTrain from './OurTrain'
import WorkTimes from './WorkTimes'
import BestTrainers from './BestTrainers'
import { useQuery } from "@tanstack/react-query";
import { KnowledgeHome } from "../../apis/OzKnowledge";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import './Zee.css';

const ZeeStudio = () => {

  const { token } = useContext(AuthContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["knowldge-zee"],
    queryFn: ({ signal }) => KnowledgeHome(token, signal),
  });

  return (
    <>
     <HeadZeeStuido data={data} isPending={isPending} error={error}/> 
     <OurTrain data={data} isPending={isPending} />
     <WorkTimes/>
     <BestTrainers />

    </>
  )
}

export default ZeeStudio
