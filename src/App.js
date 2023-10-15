import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/assets/fonts/golden-hopes/golden-hopes.otf";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
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
import { DataProvider } from "./apis/auth_api/Createdata";
import { TokenLoader } from './apis/auth_api/LoginApi';

// const StyledBody = styled.body`
//   background-color: ${({isGalleryRoute, isLimitedRoute, isAboutRoute}) =>
//     isGalleryRoute || isLimitedRoute || isAboutRoute ? '#000' : 'initial'};
// `;

// const AppContainer = styled.nav`

//   //.navbar {
//   //  background-color: blue;
//   //  background: red;
//   //}

//   ${({isGalleryRoute, isLimitedRoute, isAboutRoute}) =>
//     (isGalleryRoute || isLimitedRoute || isAboutRoute) &&
//     `  
//       html, body {
//         background-color: #000 ;
//       }
//     .navbar,.nav-mobile {
//         background:#000 !important;
//     }
//     .nav-link{ 
//         color:#fff;
//     }
//     .navbar-toggler{
//     background-color:#fff;
//   `}
// `;

function App() {
    // const location = useLocation();
    // const isGalleryRoute = location.pathname === '/galleryshow';
    // const isLimitedRoute = location.pathname === '/limited';
    // const isAboutRoute = location.pathname === '/about';
    const router = createBrowserRouter([
      { path:'/', 
        element: <RootLayout />,
        loader: {TokenLoader},
        id: 'root',
        // errorElement: <Error />,
        children: [
          { index: true, element: <Home />},
          { path:'about', element: <About />},
          { path:'joinus', element: <Joinus />},
          { path:'contactus', element: <ContactUs />},
          { path:'profile', element: <Profile />},
          { path:'login', element: <Login />},
          { path:'membership', element: <Membership />}, 
          { path:'membership/:id', element: <MembershipOptions />},
          { path:'singleMember/:id', element: <MemberPackage />},
          { path:'community', element: <Community />},
          { path:'community/events', element: <CommunityEventsExplore />},
          { path:'events/communityEventsDetails', element: <CommunityEventsDetails />},
          { path:'community/newsfeed', element: <NewsFeed />},
          { path:'community/newsfeed/singleFeed', element: <SingleNewFeed />},
          { path:'private', element: <PrivateEvents />},
          { path:'houses', element: <Houses />},
          { path:'houses/:id', element: <HouseDetails />},
          { path:'booking', element: <Booking />},
          { path:'bookingDetails', element: <BookingDetails />},
          { path:'bookingDetails/bookNow', element: <BookingSummary />},
          { path:'galleryshow', element: <Gallery />},
        ]}
    ]);
    return (
      <>
        <RouterProvider router={router}/>

         {/* <div className="App"> */}
          {/* <DataProvider>
            <StyledBody isGalleryRoute={isGalleryRoute}
                        isLimitedRoute={isLimitedRoute}
                        isAboutRoute={isAboutRoute}>

                <AppContainer isGalleryRoute={isGalleryRoute} isLimitedRoute={isLimitedRoute}
                              isAboutRoute={isAboutRoute}>
                    <ScrollToTop/>

                    <Header  
                      className="navbar" 
                      showBlackNav={isGalleryRoute || isLimitedRoute || isAboutRoute}
                      isAuthenticated={GetAuthToken}/> */}

                    {/* <Routes> */}
                        
                    {/* </Routes
                    <Footer/>
                </AppContainer>
            </StyledBody>
            </DataProvider> */}
        {/* </div> */}
      </>
    );
}

export default App;
