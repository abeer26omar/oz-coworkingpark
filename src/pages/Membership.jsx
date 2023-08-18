import React from 'react';
import BecomeMember from "../components/Membership/MembershipHeader/BecomeMember";
import MembershipTypes from "../components/Membership/MembershipTypes/MembershipTypes";
import Locations from "../components/Locations/Locations";
import MemberTests from "../components/TestComponents/MemberTests";

const Membership = () => {
    return (
        <>
            <BecomeMember/>
            <MembershipTypes/>
            <MemberTests/>
            {/*<TestApi/>*/}
            {/*<MemberApi/>*/}
            <Locations/>
        </>
    );
};

export default Membership;
