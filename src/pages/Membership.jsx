import BecomeMember from "../components/Membership/BecomeMembber/BecomeMember";
import MembershipTypes from "../components/Membership/MembershipTypes/MembershipTypes";
import MembershipHeader from "../components/Membership/MembershipHeader/MembershipHeader";
import Locations from "../components/Locations/Locations";
import Services from "../components/Membership/Services/Services";
import Amenities from '../components/Membership/Amenities/Amenities';
import { useData } from '../apis/auth_api/Createdata';
const Membership = () => {
const DataLocation = useData();
const getComponentValue = DataLocation.getComponentValue;
    return (
        <>
            <MembershipHeader/>
            <BecomeMember/>
            <MembershipTypes headTitle="Types" Membership_type='Membership individual'/>
            <Locations configData= {getComponentValue('page_location')}/>
            <Amenities />
            <Services/>
        </>
    );
};

export default Membership;
