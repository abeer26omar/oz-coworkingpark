import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import "../src/assets/fonts/golden-hopes/golden-hopes.otf";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Membership from "./pages/Membership";
import Login from "./components/Auth/Login";
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
import Booking from "./pages/Booking";
import BookingDetails from "./components/Booking/BookinDetails/BookingDetails";
import BookingSummary from "./components/Booking/BookinDetails/SpaceDetails/BookingSummary/BookingSummary";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Profile from "./pages/Profile";
import MemberPackage from "./components/Membership/MembershipTypes/MemberPackage/MemberPackage";
import Register from './components/Auth/Register';
import ForgetPass from './components/Auth/ForgetPass';
import NewPassword from './components/Auth/NewPassword';
import MyBookingDetails from "./components/Profile/ProfileContent/MyBooking/MyBookingDetails";
import MyplanDetials from './components/Profile/ProfileContent/MyPlan/PlanDetails';
import MyEventDetails from "./components/Profile/ProfileContent/MyEvents/MyEventDetilas";
import Ozys from './components/Ozys/Ozys';
import Amenities from './components/Amenities/Amenities';

function App() {
    const router = createBrowserRouter([
      { path:'/', 
        element: <RootLayout />,
        id: 'root',
        // errorElement: <Error />,
        children: [
          { index: true, element: <Home />},
          { path:'about', element: <About />},
          { path:'joinus', element: <Joinus />},
          { path:'contactus', element: <ContactUs />},
          { path:'profile', element: <Profile />},
          { path:'login', element: <Login />},
          { path:'register', element: <Register />},
          { path:'forgetpass', element: <ForgetPass />},
          { path:'newpassword', element: <NewPassword />},
          { path:'membership', element: <Membership />},  
          { path:'membership/:id', element: <MembershipOptions />},
          { path:'singleMember/:id', element: <MemberPackage />},
          { path:'community', element: <Community />},
          { path:'community/events', element: <CommunityEventsExplore />},
          { path:'events/communityEventsDetails', element: <CommunityEventsDetails />},
          { path:'community/newsfeed', element: <NewsFeed />},
          { path:'community/newsfeed/singleFeed/:id', element: <SingleNewFeed />},
          { path:'private', element: <PrivateEvents />},
          { path:'houses', element: <Houses />},
          { path:'houses/:id', element: <HouseDetails />},
          { path:'booking', element: <Booking />},
          { path:'bookingDetails/:id', element: <BookingDetails />},
          { path:'mybookingDetails/:id', element: <MyBookingDetails />},
          { path:'myplanDetials/:id', element: <MyplanDetials />},
          { path:'myeventDetails/:id', element: <MyEventDetails/>},
          { path:'bookingDetails/bookNow', element: <BookingSummary />},
          { path:'community/galleryshow', element: <Gallery />},
          { path:'ozys', element: <Ozys />},
          { path:'amenities' ,element: <Amenities />}
        ]}
    ]);
    const queryClient = new QueryClient();
    return (
      <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
      </>
    );
}

export default App;
