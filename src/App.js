import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/assets/fonts/golden-hopes/golden-hopes.otf";
import Header from "./components/Header/Navbar/Header";
import Footer from "./components/Footer/Footer";
import Membership from "./pages/Membership";
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import ContactUs from "./pages/ContactUS";
import MembershipOptions from "./components/Membership/MembershipOptions/MembershipOptions";
import Joinus from "./components/Forms/JoinUS/Joinus";
import MembershipSingleOption from "./components/Membership/MembershipOptions/MembershipSingleOption";
import Home from "./pages/Home";
import Community from "./pages/Community";
import NewsFeed from "./pages/NewsFeed";
import SingleNewFeed from "./components/NewsFeed/NewsFeedBlogs/SingleNewFeed/SingleNewFeed";
import CommunityEventsExplore
    from "./components/Community/CommunityEvents/CommunityEventsExplore/CommunityEventsExplore";
import CommunityEventsDetails
    from "./components/Community/CommunityEvents/CommunityEventsDetails/CommunityEventsDetails";
import PrivateEvents from "./pages/PrivateEvents";
import Houses from "./pages/Houses";
import HouseDetails from "./components/Houses/HousesDetails/HouseDetails";
import ScrollToTop from "./ScrollToTop";
import Booking from "./pages/Booking";
import BookingDetails from "./components/Booking/BookinDetails/BookingDetails";
import BookingSummary from "./components/Booking/BookinDetails/SpaceDetails/BookingSummary/BookingSummary";


function App() {

    return (
        <div className="App">
            <ScrollToTop/>

            <Header/>

            <Routes>
                {/* Start Single Pages Routes */}
                <Route path="/" element={<Home/>}/>
                <Route path="/joinus" element={<Joinus/>}/>
                <Route path="/contactus" element={<ContactUs/>}/>
                {/* End Single Pages Routes */}
                {/* Start Authentication Routes */}
                <Route path="/login" element={<Login/>}/>
                {/* END Authentication Routes */}
                {/* Start Membership Routes */}
                <Route path="/membership" element={<Membership/>}/>
                <Route path="/membership/:id" element={<MembershipOptions/>}/>
                <Route path="/singleMember/:id" element={<MembershipSingleOption/>}/>
                {/* End Membership Routes */}
                {/* Start Community Routes */}
                <Route path="/community" element={<Community/>}/>
                <Route path="/community/events" element={<CommunityEventsExplore/>}/>
                <Route path="/events/communityEventsDetails" element={<CommunityEventsDetails/>}/>
                <Route path="/community/newsfeed" element={<NewsFeed/>}/>
                <Route path="/community/newsfeed/singleFeed" element={<SingleNewFeed/>}/>
                {/* End Community Routes */}
                {/* Start Private Events Routes */}
                <Route path="/private" element={<PrivateEvents/>}/>
                {/* End Private Events Routes */}
                {/* Start Houses Locations Routes */}
                <Route path="/houses" element={<Houses/>}/>
                <Route path="/houses/:id" element={<HouseDetails/>}/>
                {/* End Houses Locations Routes */}
                {/* Start Booking Locations Routes */}
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/bookingDetails" element={<BookingDetails/>}/>
                <Route path="/bookingDetails/bookNow" element={<BookingSummary/>}/>

                {/* End Booking Locations Routes */}
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
