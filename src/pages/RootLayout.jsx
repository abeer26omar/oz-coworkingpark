import { Outlet, useLocation } from "react-router-dom";
import { DataProvider } from '../apis/auth_api/Createdata';
import styled from 'styled-components';
import ScrollToTop from "../ScrollToTop";

import Header from "../components/Header/Navbar/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = ()=>{
    const location = useLocation();
    const isGalleryRoute = location.pathname === '/community/galleryshow';
    const isLimitedRoute = location.pathname === '/limited';
    const isAboutRoute = location.pathname === '/about';

    const StyledBody = styled.body`
        background-color: ${({isGalleryRoute, isLimitedRoute, isAboutRoute}) =>
            isGalleryRoute || isLimitedRoute || isAboutRoute ? '#000' : 'initial'};
        `;

    const AppContainer = styled.nav`
    ${({isGalleryRoute, isLimitedRoute, isAboutRoute}) =>
        (isGalleryRoute || isLimitedRoute || isAboutRoute) &&
        `html, body {
            background-color: #000 ;
        }
        .navbar,
        .nav-mobile {
            background:#000 !important;
        }
        .border_bottom{
            border-bottom: none
        }
        .nav-link{ 
            color:#fff;
        }
        .navbar-toggler{
            background-color:#fff;
        }`
    }`;
    return(
        <>
            <DataProvider>
                <StyledBody 
                    isGalleryRoute={isGalleryRoute}
                    isLimitedRoute={isLimitedRoute}
                    isAboutRoute={isAboutRoute}>

                    <AppContainer 
                        isGalleryRoute={isGalleryRoute} 
                        isLimitedRoute={isLimitedRoute}
                        isAboutRoute={isAboutRoute}>
                    <ScrollToTop/>
                        <Header 
                            className="navbar" 
                            showBlackNav={isGalleryRoute || isLimitedRoute || isAboutRoute}
                        />
                            <Outlet />
                        <Footer />
                    </AppContainer>
                </StyledBody>
            </DataProvider>
        </>
    )
}
export default RootLayout;