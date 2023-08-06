import React from 'react';
import BecomeMember from "../components/Membership/MembershipHeader/BecomeMember";
import MembershipTypes from "../components/Membership/MembershipTypes/MembershipTypes";
import Locations from "../components/Locations/Locations";
import JoinUs from "./JoinUs";
import TestApi from "../components/TestComponents/TestApi";
import MemberApi from "../components/TestComponents/MemberApi/MemberApi";

const Membership = () => {
    return (
        <>
            <BecomeMember/>
            <MembershipTypes/>
            {/*<TestApi/>*/}
            {/*<MemberApi/>*/}
            <Locations/>
        </>
    );
};

export default Membership;
