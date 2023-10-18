import React from 'react';
import BecomeMember from "../components/Membership/BecomeMembber/BecomeMember";
import MembershipTypes from "../components/Membership/MembershipTypes/MembershipTypes";
import MembershipHeader from "../components/Membership/MembershipHeader/MembershipHeader";
import Locations from "../components/Locations/Locations";
import Services from "../components/Membership/Services/Services";
import Amenities from '../components/Membership/Amenities/Amenities';
import { config } from '../apis/config';
import { useEffect ,useState } from 'react';
import { useData } from '../apis/auth_api/Createdata';
const Membership = () => {
const DataLocation = useData();
const getComponentValue = DataLocation.getComponentValue
    const [data , setData] = useState([])
useEffect(()=>{
    setData(config('membership'))
},[])
    return (
        <>
            <MembershipHeader/>
            <BecomeMember/>
            <MembershipTypes headTitle="Types"/>
            <Locations configData= {getComponentValue('page_location')}/>
            <Amenities />
            <Services/>

            {/*<MemberTests/>*/}
            {/*<TestApi/>*/}
            {/*<MemberApi/>*/}
            {/*<Locations/>*/}
        </>
    );
};

export default Membership;
