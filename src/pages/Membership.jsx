import React from 'react';
import BecomeMember from "../components/Membership/MembershipHeader/BecomeMember";
import MembershipTypes from "../components/Membership/MembershipTypes/MembershipTypes";
import Locations from "../components/Locations/Locations";
import JoinUs from "./JoinUs";

const Membership = () => {
    return (
        <>
            <BecomeMember/>
            <MembershipTypes/>
            <Locations/>
        </>
    );
};

export default Membership;