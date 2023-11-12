import { useContext } from "react";
import BecomeMember from "../components/Membership/BecomeMembber/BecomeMember";
import MembershipTypes from "../components/Membership/MembershipTypes/MembershipTypes";
import MembershipHeader from "../components/Membership/MembershipHeader/MembershipHeader";
import Services from "../components/Membership/Services/Services";
import { DataContext } from '../apis/context/SiteDataContext';

const Membership = () => {

    const {config, getComponentValue} = useContext(DataContext);
    
    return (
        <>
            <MembershipHeader/>
            <BecomeMember configData= {getComponentValue('membership_page')}/>
            <MembershipTypes />
            <Services/>
        </>
    );
};

export default Membership;
