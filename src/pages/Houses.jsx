import React, { useContext, useEffect} from 'react';
import HousesLocations from "../components/Houses/HousesLocations";
import JoinCommunityWhite from "../components/MonoBlocks/JoinCommunityWhite/JoinCommunityWhite";
import { DataContext } from '../apis/context/SiteDataContext';

const Houses = () => {
    const { config, getComponentValue } = useContext(DataContext);

    useEffect(()=>{
        config('home');
    },[]);

    return (
        <>
            <HousesLocations configData={getComponentValue('page_location')}/>
            <JoinCommunityWhite/>
        </>
    );
};

export default Houses;
