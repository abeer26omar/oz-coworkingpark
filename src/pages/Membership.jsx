import React from 'react';
import BecomeMember from "../components/Membership/BecomeMembber/BecomeMember";
import MembershipTypes from "../components/Membership/MembershipTypes/MembershipTypes";
import MemberTests from "../components/TestComponents/MemberTests";
import MembershipHeader from "../components/Membership/MembershipHeader/MembershipHeader";
import Locations from "../components/Locations/Locations";
import Services from "../components/Membership/Services/Services";

const Membership = () => {
    return (
        <>
            <MembershipHeader/>
            <BecomeMember/>
            <MembershipTypes/>
            <Locations/>
            <Services/>

            <MemberTests/>
            {/*<TestApi/>*/}
            {/*<MemberApi/>*/}
            {/*<Locations/>*/}
        </>
    );
};

export default Membership;
