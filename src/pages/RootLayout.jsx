import { Outlet, useLocation } from "react-router-dom";
import { DataProvider } from '../apis/context/SiteDataContext';
import ScrollToTop from "../ScrollToTop";
import Header from "../components/Header/Navbar/Header";
import Footer from "../components/Footer/Footer";
import FooterAuth from '../components/Footer/FooterAuth';
import { SiteConfigProvider } from '../apis/context/SiteConfigContext';
import { AuthProvider } from '../apis/context/AuthTokenContext';
import { useEffect } from "react";

const RootLayout = ()=>{
    const location = useLocation();
    const isGalleryRoute = location.pathname === '/community/galleryshow';
    const isLimitedRoute = location.pathname === '/limited';
    const isAboutRoute = location.pathname === '/about';
    const isAmenitiesRoute = location.pathname === '/amenities';
    const AuthRoutes = location.pathname === '/login' || 
        location.pathname === '/contactus' || 
        location.pathname === '/joinus' || 
        location.pathname === '/register' || 
        location.pathname === '/forgetpass';

        useEffect(()=>{
            if(isGalleryRoute || isLimitedRoute || isAboutRoute || isAmenitiesRoute){
                document.body.classList.add('body_dark');
            }
            return ()=>{
                document.body.classList.remove('body_dark');
            }
        },[location]);

    return(
        <AuthProvider>
            <DataProvider>
                <ScrollToTop/>
                    <SiteConfigProvider>
                        <Header 
                            className="navbar"
                            showBlackNav={isGalleryRoute || isLimitedRoute || isAboutRoute || isAmenitiesRoute}
                        />
                        <Outlet />
                        {!AuthRoutes && <Footer />}
                        {AuthRoutes && <FooterAuth />}
                    </SiteConfigProvider>
            </DataProvider>
        </AuthProvider>
    )
}
export default RootLayout;