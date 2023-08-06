import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/assets/fonts/golden-hopes/golden-hopes.otf';
import Header from "./components/Header/Navbar/Header";
import Footer from "./components/Footer/Footer";
import Membership from "./pages/Membership";
import Login from "./pages/Login";
import {Route, Routes} from 'react-router-dom';
import ContactUs from "./pages/ContactUS";
import MembershipOptions from "./components/Membership/MembershipOptions/MembershipOptions";
import Joinus from "./components/Forms/JoinUS/Joinus";
import MembershipSingleOption from "./components/Membership/MembershipOptions/MembershipSingleOption";
import Home from "./pages/Home";
import Community from "./pages/Community";

function App() {
  return (
    <>
        <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/membership" element={<Membership/>}/>
                    <Route path="/membership/:id" element={<MembershipOptions />} />
                    <Route path="/contactus" element={<ContactUs/>}/>
                    <Route path="/singleMember/:id" element={<MembershipSingleOption/>}/>
                    <Route path="/joinus" element={<Joinus/>}/>
                    <Route path="/community" element={<Community/>}/>


                </Routes>
        <Footer/>
    </>
  );
}

export default App;
