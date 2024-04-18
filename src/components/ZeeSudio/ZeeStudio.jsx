import React, { useContext, useEffect } from 'react'
import HeadZeeStuido from './HeadZeeStuido'
import OurTrain from './OurTrain'
import WorkTimes from './WorkTimes'
import BestTrainers from './BestTrainers'
import { useQuery } from "@tanstack/react-query";
import { KnowledgeHome } from "../../apis/OzKnowledge";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import './Zee.css';
import { getZeeStudio } from '../../apis/config'
import { DataContext } from '../../apis/context/SiteDataContext'

const ZeeStudio = () => {
  
    const { token } = useContext(AuthContext);

    const { isPending: pending , error, data: ourTrainData } = useQuery({
      queryKey: ["knowldge-zee"],
      queryFn: ({ signal }) => KnowledgeHome(token, signal),
    });

  return (
    <>
      <HeadZeeStuido /> 
      <OurTrain data={ourTrainData} isPending={pending} />
      <WorkTimes/>
      <BestTrainers />

    </>
  )
}

export default ZeeStudio
