import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/assets/fonts/golden-hopes/golden-hopes.otf";
import Header from "./components/Header/Navbar/Header";
import Footer from "./components/Footer/Footer";
import Membership from "./pages/Membership";
import Login from "./pages/Login";
import {Route, Routes, useLocation} from "react-router-dom";
import ContactUs from "./pages/ContactUS";
import MembershipOptions from "./components/Membership/MembershipOptions/MembershipOptions";
import Joinus from "./components/Forms/JoinUS/Joinus";
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
import Gallery from "./pages/Gallery";
import styled from 'styled-components';
import About from "./pages/About";
import Profile from "./pages/Profile";
import MemberPackage from "./components/Membership/MembershipTypes/MemberPackage/MemberPackage";

const StyledBody = styled.body`
  background-color: ${({isGalleryRoute, isLimitedRoute, isAboutRoute}) =>
    isGalleryRoute || isLimitedRoute || isAboutRoute ? '#000' : 'initial'};
`;

const AppContainer = styled.nav`
  /* Default styles for the header */

  //.navbar {
  //  background-color: blue;
  //  background: red;
  //}

  /* Styles for the header in the gallery route */
  ${({isGalleryRoute, isLimitedRoute, isAboutRoute}) =>
    (isGalleryRoute || isLimitedRoute || isAboutRoute) &&
    `  
          html, body {
        background-color: #000 ;
      }
    .navbar {
          background:#000;
    }
    .nav-link{
        color:#fff;
    }
    .navbar-toggler{
    background-color:#fff;
  `}
`;

function App() {
    const location = useLocation();
    const isGalleryRoute = location.pathname === '/galleryshow';
    const isLimitedRoute = location.pathname === '/limited';
    const isAboutRoute = location.pathname === '/about';

    return (
        <div className="App">
            <StyledBody isGalleryRoute={isGalleryRoute}
                        isLimitedRoute={isLimitedRoute}
                        isAboutRoute={isAboutRoute}>

                <AppContainer isGalleryRoute={isGalleryRoute} isLimitedRoute={isLimitedRoute}
                              isAboutRoute={isAboutRoute}>
                    <ScrollToTop/>

                    <Header className="navbar" showBlackNav={isGalleryRoute || isLimitedRoute || isAboutRoute}/>

                    <Routes>
                        {/* Start Single Pages Routes */}
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/joinus" element={<Joinus/>}/>
                        <Route path="/contactus" element={<ContactUs/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        {/* End Single Pages Routes */}
                        {/* Start Authentication Routes */}
                        <Route path="/login" element={<Login/>}/>
                        {/* END Authentication Routes */}
                        {/* Start Membership Routes */}
                        <Route path="/membership" element={<Membership/>}/>
                        {/*<Route path="/membershipDetailsTest" element={<MemberDetails/>}/>*/}
                        {/*<Route path="/limited" element={<MemberPackage/>}/>*/}


                        <Route path="/membership/:id" element={<MembershipOptions/>}/>
                        <Route path="/singleMember/:id" element={<MemberPackage/>}/>

                        {/*<Route path="/singleMember/:id" element={<MembershipSingleOption/>}/>*/}
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
                        {/* Start Booking Routes */}
                        <Route path="/booking" element={<Booking/>}/>
                        <Route path="/bookingDetails" element={<BookingDetails/>}/>
                        <Route path="/bookingDetails/bookNow" element={<BookingSummary/>}/>
                        {/* End Booking Routes */}
                        {/* Start Gallery  Routes */}
                        <Route path="/galleryshow" element={<Gallery/>}/>
                        {/* End Gallery Routes */}
                    </Routes>
                    <Footer/>
                </AppContainer>
            </StyledBody>
        </div>
    );
}

export default App;
