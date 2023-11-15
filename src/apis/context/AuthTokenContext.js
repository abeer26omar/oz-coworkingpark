import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(sessionStorage.getItem('TokenOZ'));
    const [userId, setUserId] = useState(sessionStorage.getItem('userIdOZ'));
    const [activeUserId, setActiveUserId] = useState(sessionStorage.getItem('activeUserOZ'));
    const [userProfileDate, setUserProfileData] = useState(JSON.parse(sessionStorage.getItem('userProfileDate')))

    useEffect(() => {
        const storedToken = sessionStorage.getItem('TokenOZ');
        const storedUserId = sessionStorage.getItem('userIdOZ');
        const storedActiveUserId = sessionStorage.getItem('activeUserOZ');
        const storedUserProfileDate = JSON.parse(sessionStorage.getItem('userProfileDate'));

        if (storedToken) {
            setToken(storedToken);
            setUserId(storedUserId);
            setActiveUserId(storedActiveUserId);
            setUserProfileData(storedUserProfileDate);
        }
    }, [token, userId, activeUserId]);

    const handleLogin = (loginDetails) => {
        sessionStorage.setItem('TokenOZ', loginDetails.access_token);
        sessionStorage.setItem("userIdOZ", loginDetails.user_id);
        sessionStorage.setItem("activeUserOZ", loginDetails.active);
        sessionStorage.setItem("userProfileDate", JSON.stringify({name: loginDetails.account_data.name,
            email: loginDetails.account_data.email,
            avatar: loginDetails.account_data.avatar,
            first_name: loginDetails.account_data.first_name,
            last_name: loginDetails.account_data.last_name,
            phone_number: loginDetails.account_data.phone_number}));

        setToken(loginDetails.access_token);
        setUserId(loginDetails.user_id);
        setActiveUserId(loginDetails.active);
        setUserProfileData({name: loginDetails.account_data.name,
            email: loginDetails.account_data.email,
            avatar: loginDetails.account_data.avatar,
            first_name: loginDetails.account_data.first_name,
            last_name: loginDetails.account_data.last_name,
            phone_number: loginDetails.account_data.phone_number})
    };

    const handleLogout = () => {
        sessionStorage.removeItem('TokenOZ');
        sessionStorage.removeItem('userIdOZ');
        sessionStorage.removeItem('activeUserOZ');
        sessionStorage.removeItem('userProfileDate')
        setToken('');
        setUserId('');
        setActiveUserId('');
        setUserProfileData('');
    };

    return (
        <AuthContext.Provider value={{ token, userId, activeUserId, userProfileDate, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};