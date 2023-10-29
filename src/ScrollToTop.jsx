import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

const ScrollToTop = () => {
    const {pathname} = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior:"instant",
        })
    }, [pathname]);


};

export default ScrollToTop;
