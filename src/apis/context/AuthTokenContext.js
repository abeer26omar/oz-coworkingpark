import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(sessionStorage.getItem('TokenOZ'));
    const [userId, setUserId] = useState(sessionStorage.getItem('userIdOZ'));
    const [activeUserId, setActiveUserId] = useState(sessionStorage.getItem('activeUserOZ'));

    useEffect(() => {
        const storedToken = sessionStorage.getItem('TokenOZ');
        const storedUserId = sessionStorage.getItem('userIdOZ');
        const storedActiveUserId = sessionStorage.getItem('activeUserOZ');

        if (storedToken) {
            setToken(storedToken);
            setUserId(storedUserId);
            setActiveUserId(storedActiveUserId);
        }
    }, [token, userId, activeUserId]);

    const handleLogin = (loginDetails) => {
        sessionStorage.setItem('TokenOZ', loginDetails.access_token);
        sessionStorage.setItem("userIdOZ", loginDetails.user_id);
        sessionStorage.setItem("activeUserOZ", loginDetails.active);
        setToken(loginDetails.access_token);
        setUserId(loginDetails.user_id);
        setActiveUserId(loginDetails.active);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('TokenOZ');
        sessionStorage.removeItem('userIdOZ');
        sessionStorage.removeItem('activeUserOZ');
        setToken('');
        setUserId('');
        setActiveUserId('');
    };

    return (
        <AuthContext.Provider value={{ token, userId, activeUserId, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};