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
  useEffect(()=>{
     const zeeStudio = async () =>{
      try{
      const res = await getZeeStudio("zee_studio_website")
      console.log(res);
      }catch(error){

      }
    }
    zeeStudio()
  },[])

    // const { data, isPending, ResetPageName } = useContext(DataContext);

    // useEffect(()=>{
    //     ResetPageName('zee_studio_website');
    //     console.log(data);
      
    // },[]);
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["knowldge-zee"],
  //   queryFn: ({ signal }) => KnowledgeHome(token, signal),
  // });

  return (
    <>
    {
      // console.log(res)

    }
     {/* <HeadZeeStuido data={data} isPending={isPending} error={error}/> 
     <OurTrain data={data} isPending={isPending} /> */}
     <WorkTimes/>
     <BestTrainers />

    </>
  )
}

export default ZeeStudio
