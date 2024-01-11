import React, { useState, useContext, useEffect } from 'react'
import HeaderDetalGym from './HeaderDetalGym'
import DetalsGymlast from './DetalsGymlast'
import {AuthContext} from '../../apis/context/AuthTokenContext';
import { useParams } from 'react-router-dom';
import {getClassById} from '../../apis/ZeeStudio';

function GymDetails() {

  const [classDetails, setClassDetails] = useState({});
  const { token } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getClass = async () => {
      try {
        const result = await getClassById(token, signal, id);
        setClassDetails(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    getClass();
    return () => {controller.abort()};
  }, []);
  
  return (

    <>
    <HeaderDetalGym details={classDetails} />
    <DetalsGymlast details={classDetails}/>
    </>
  )
}

export default GymDetails