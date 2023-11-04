import { Outlet, useLocation } from "react-router-dom";
import { DataProvider } from '../apis/context/Createdata';
import ScrollToTop from "../ScrollToTop";
import Header from "../components/Header/Navbar/Header";
import Footer from "../components/Footer/Footer";
import FooterAuth from '../components/Footer/FooterAuth';
import { useEffect } from 'react';

const RootLayout = ()=>{
    const location = useLocation();
    const isGalleryRoute = location.pathname === '/community/galleryshow';
    const isLimitedRoute = location.pathname === '/limited';
    const isAboutRoute = location.pathname === '/about';
    const AuthRoutes = location.pathname === '/login' || 
        location.pathname === '/contactus' || 
        location.pathname === '/joinus' || 
        location.pathname === '/register' || 
        location.pathname === '/forgetpass';

        useEffect(()=>{
            if(isGalleryRoute || isLimitedRoute || isAboutRoute){
                document.body.classList.add('body_dark');
            }
            return ()=>{
                document.body.classList.remove('body_dark');
            }
        },[location])
    return(
        <DataProvider>
                <ScrollToTop/>
                    <Header 
                        className="navbar" 
                        showBlackNav={isGalleryRoute || isLimitedRoute || isAboutRoute}
                    />
                    <Outlet />
                    {!AuthRoutes && <Footer />}
                    {AuthRoutes && <FooterAuth />}
        </DataProvider>        
    )
}
export default RootLayout;