import React from 'react';
import BecomeMember from "../components/Membership/BecomeMembber/BecomeMember";
import MembershipTypes from "../components/Membership/MembershipTypes/MembershipTypes";
import MembershipHeader from "../components/Membership/MembershipHeader/MembershipHeader";
import Locations from "../components/Locations/Locations";
import Services from "../components/Membership/Services/Services";

const Membership = () => {
    return (
        <>
            <MembershipHeader/>
            <BecomeMember/>
            <MembershipTypes headTitle="Types"/>
            <Locations/>
            <Services/>

            {/*<MemberTests/>*/}
            {/*<TestApi/>*/}
            {/*<MemberApi/>*/}
            {/*<Locations/>*/}
        </>
    );
};

export default Membership;
