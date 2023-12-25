import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(sessionStorage.getItem('TokenOZ'));
    const [userId, setUserId] = useState(sessionStorage.getItem('userIdOZ'));
    const [activeUserId, setActiveUserId] = useState(sessionStorage.getItem('activeUserOZ'));
    const [userProfileDate, setUserProfileData] = useState(JSON.parse(sessionStorage.getItem('userProfileDate')));
    const [branchId, setBranchId] = useState(sessionStorage.getItem('branchIdOZ'));

    useEffect(() => {
        const storedToken = sessionStorage.getItem('TokenOZ');
        const storedUserId = sessionStorage.getItem('userIdOZ');
        const storedActiveUserId = sessionStorage.getItem('activeUserOZ');
        const storedUserProfileDate = JSON.parse(sessionStorage.getItem('userProfileDate'));
        const storedBranchId = sessionStorage.getItem('branchIdOZ');

        if (storedToken) {
            setToken(storedToken);
            setUserId(storedUserId);
            setActiveUserId(storedActiveUserId);
            setUserProfileData(storedUserProfileDate);
        }
        setBranchId(storedBranchId)
    }, [token, userId, activeUserId, branchId]);

    const handleLogin = (loginDetails) => {
        sessionStorage.setItem('TokenOZ', loginDetails.access_token);
        sessionStorage.setItem("userIdOZ", loginDetails.user_id);
        sessionStorage.setItem("activeUserOZ", loginDetails.active);
        sessionStorage.setItem("userProfileDate", JSON.stringify({
            name: loginDetails.account_data.name,
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

    const handelRegister = (authDetails, userDetails) => {

        sessionStorage.setItem('TokenOZ', authDetails.access_token);
        sessionStorage.setItem("userIdOZ", authDetails.user_id);
        sessionStorage.setItem("activeUserOZ", authDetails.active);
        sessionStorage.setItem("userProfileDate", JSON.stringify({
            name: userDetails.account_data.name,
            email: userDetails.account_data.email,
            avatar: userDetails.account_data.avatar,
            first_name: userDetails.account_data.first_name,
            last_name: userDetails.account_data.last_name,
            phone_number: userDetails.account_data.phone_number}));

        setToken(authDetails.access_token);
        setUserId(authDetails.user_id);
        setActiveUserId(authDetails.active);
        setUserProfileData({name: userDetails.name,
            email: userDetails.email,
            avatar: userDetails.avatar,
            first_name: userDetails.first_name,
            last_name: userDetails.last_name,
            phone_number: userDetails.phone_number})
    }

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

    const handelChangeBranch = (branchId) => {
        sessionStorage.setItem('branchIdOZ', branchId);
    };

    return (
        <AuthContext.Provider value={{ token, userId, branchId, activeUserId, userProfileDate, handleLogin, handelRegister, handleLogout, handelChangeBranch }}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};