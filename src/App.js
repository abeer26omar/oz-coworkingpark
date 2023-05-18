import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/assets/fonts/golden-hopes/golden-hopes.otf';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Membership from "./pages/Membership";
import Login from "./pages/Login";
import { Route, Routes} from "react-router-dom";
import ContactUs from "./pages/ContactUS";
import Individual from "./pages/Individual";

function App() {
  return (
    <>
        <Header/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/membership" element={<Membership/>}/>
                    <Route path="/contactus" element={<ContactUs/>}/>
                    <Route path="/individual" element={<Individual/>}/>
                </Routes>
        <Footer/>
    </>
  );
}

export default App;
