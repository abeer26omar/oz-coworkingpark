import React from 'react';
import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Partners from "../components/Partners/Partners";
import MonoBlock from "../components/MonoBlocks/MonoBlock";
import PublicEvent from "../components/PublicEvents/PublicEvent";
import Locations from "../components/Locations/Locations";
import LeftContent from "../components/Home/ContentComponent/LeftContent";
import RightContent from "../components/Home/ContentComponent/RightContent";
import MonoBlockTitle from '../components/MonoBlocks/MonoBlockTitle';
import { config } from '../apis/config';
import { useEffect ,useState } from 'react';
import Buttons from '../components/Buttons/Buttons';
import MonoBlockMember from '../components/MonoBlocks/MonoBlockMember';
import RightContentFB from '../components/Home/ContentComponent/RightContentFB';
import RightContentNewFeed from '../components/Home/ContentComponent/RightContentNewFeed';
import { useData } from '../apis/auth_api/Createdata';
const Home = () => {
// const [data , setData] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
const DataLocation = useData();
const getComponentValue = DataLocation.getComponentValue
// console.log(DataLocation.getComponentValue('page_location'))
// useEffect(()=>{
//     config('home').then(res =>{
//         setData(res)
//         setLoading(false)
//     })
//     .catch(err =>{
//         setError(err)
//         setLoading(false)
//     })
// },[])

// const getComponentValue = (param) => {
//     const matchingItems = data.filter(ele => ele.key.match(param));
//     return matchingItems;
// };
    return (
        <>

            <HomeHeader headerConfig={getComponentValue('header')}/>
            <MonoBlockTitle configData = {getComponentValue("mono_block")}/>
            <LeftContent configData = {getComponentValue("page_about")} />
            <RightContentNewFeed configData = {getComponentValue("page_newsfeed")} />
            <PublicEvent configData={getComponentValue("page_event")}/>
            <Locations configData={getComponentValue('page_location')}/>
            <RightContentFB configData={getComponentValue("page_fb")} />
            <MonoBlockMember configData={getComponentValue("page_membership")}/>
            <Partners/>
            <NewsLetter/>
        </>
    );
};

export default Home;
