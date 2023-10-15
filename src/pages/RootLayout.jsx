import { Outlet } from "react-router-dom";
import { DataProvider } from '../apis/auth_api/Createdata';
import ScrollToTop from "../ScrollToTop";

import Header from "../components/Header/Navbar/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = ()=>{
    return(
        <>
            <DataProvider>
            <ScrollToTop/>
                <Header />
                    <Outlet />
                <Footer />
            </DataProvider>
        </>
    )
}
export default RootLayout;