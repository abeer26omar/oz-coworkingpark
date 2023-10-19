import React from 'react';
import AboutHeader from "../components/About/AboutHeader/AboutHeader";
import AboutOz from "../components/About/AboutOz/AboutOz";
import { config } from '../apis/config';
import { useEffect ,useState } from 'react';
const About = () => {
    const [data , setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        config('about_us').then(res =>{
            setData(res)
            setLoading(false)
        })
        .catch(err =>{
            setError(err)
            setLoading(false)
        })
    },[]);

    return (
        <>
            <AboutHeader configData={data}/>
            <AboutOz configData={data}/>
        </>
    );
};

export default React.memo(About) ;
