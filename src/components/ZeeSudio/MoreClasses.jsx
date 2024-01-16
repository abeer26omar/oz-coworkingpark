import React, { useContext, useEffect, useState }  from 'react'
import HeaderClasses from './HeaderClasses'
import TrainingClasses from './TrainingClasses'
import CardsClasses from './CardsClasses'
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { getTrainingClasses } from "../../apis/ZeeStudio";

function MoreClasses() {

  const [classesGym , setClassesGym] = useState([]);
  const [limit, setLimit] = useState(12);
  const [classesGymFilter , setClassesGymFilter] = useState([]);

  const [dateFilter, setDateFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [categoreyFilter, setCategoreyFilter] = useState('');

  const {token} = useContext(AuthContext);

   useEffect(() => {
     const controller = new AbortController();
     const signal = controller.signal;

     const getClassesCards = async () => {
       try {
         const result = await getTrainingClasses(
           token,
           limit,
           0,
           searchFilter,
           dateFilter,
           categoreyFilter,
           signal
         );
         setClassesGym(result);
         setClassesGymFilter(result);
       } catch (error) {
         console.log(error);
       }
     };

     getClassesCards();
     return () => {
       controller.abort();
     };
   }, [limit, dateFilter, searchFilter, categoreyFilter]);

  const getFilterDate = (data) => {
    setDateFilter(data)
  }
  const getFilterSearch = (data) => {
    setSearchFilter(data)
  }
  const getFilterCategorey = (data) => {
    setCategoreyFilter(data)
  }

  const getLimit = (value) => {
    setLimit(value)
  }

  return (
    <>
      <HeaderClasses />
      <TrainingClasses
        classesGym={classesGymFilter || []}
        getFilterDate={getFilterDate}
        getFilterSearch={getFilterSearch}
        getFilterCategorey={getFilterCategorey}
        limit={limit}
      />
      <CardsClasses classesGym={classesGym} getLimit={getLimit} />
    </>
  );
}

export default MoreClasses