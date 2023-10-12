import React from 'react';
import AboutHeader from "../components/About/AboutHeader/AboutHeader";
import AboutOz from "../components/About/AboutOz/AboutOz";
import { config } from '../apis/config';
import { useEffect ,useState } from 'react';
const About = () => {
    const [data , setData] = useState([])
useEffect(()=>{
    setData(config('about_us'))
},[])
    return (
        <>
            <AboutHeader/>
            <AboutOz/>
        </>
    );
};

export default React.memo(About) ;
