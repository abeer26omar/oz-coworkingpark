import BecomeMember from "../components/Membership/BecomeMembber/BecomeMember";
import MembershipTypes from "../components/Membership/MembershipTypes/MembershipTypes";
import MembershipHeader from "../components/Membership/MembershipHeader/MembershipHeader";
// import Locations from "../components/Locations/Locations";
import Services from "../components/Membership/Services/Services";
import { useData } from '../apis/context/Createdata';
const Membership = () => {
const DataLocation = useData();
const getComponentValue = DataLocation.getComponentValue;
    return (
        <>
            <MembershipHeader/>
            <BecomeMember configData= {getComponentValue('membership_page')}/>
            <MembershipTypes />
            {/* <Locations configData= {getComponentValue('page_location')}/> */}
            <Services/>
        </>
    );
};

export default Membership;
