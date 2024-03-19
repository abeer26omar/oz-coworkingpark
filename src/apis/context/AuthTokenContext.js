import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('TokenOZ'));
    const [userId, setUserId] = useState(localStorage.getItem('userIdOZ'));
    const [activeUserId, setActiveUserId] = useState(localStorage.getItem('activeUserOZ'));
    const [userProfileDate, setUserProfileData] = useState(JSON.parse(localStorage.getItem('userProfileDate')));
    const [branchId, setBranchId] = useState(localStorage.getItem('branchIdOZ'));

    useEffect(() => {
        const storedToken = localStorage.getItem('TokenOZ');
        const storedUserId = localStorage.getItem('userIdOZ');
        const storedActiveUserId = localStorage.getItem('activeUserOZ');
        const storedUserProfileDate = JSON.parse(localStorage.getItem('userProfileDate'));
        const storedBranchId = localStorage.getItem('branchIdOZ');

        if (storedToken) {
            setToken(storedToken);
            setUserId(storedUserId);
            setActiveUserId(storedActiveUserId);
            setUserProfileData(storedUserProfileDate);
        }
        setBranchId(storedBranchId)
    }, [token, userId, activeUserId, branchId]);

    const handleLogin = (loginDetails) => {

        localStorage.setItem('TokenOZ', loginDetails.access_token);
        localStorage.setItem("userIdOZ", loginDetails.user_id);
        localStorage.setItem("activeUserOZ", loginDetails.account_data.active);
        localStorage.setItem("userProfileDate", JSON.stringify({
            name: loginDetails.account_data.name,
            email: loginDetails.account_data.email,
            avatar: loginDetails.account_data.avatar,
            first_name: loginDetails.account_data.first_name,
            last_name: loginDetails.account_data.last_name,
            phone_number: loginDetails.account_data.phone_number,
            membership_discount_roles: loginDetails.account_data.membership_discount_roles,
            membership_packages: loginDetails.account_data.membership_packages,
            zee_knowledge: loginDetails.account_data.zee_knowledge,
            zee_studio: loginDetails.account_data.zee_studio
        }));

        setToken(loginDetails.access_token);
        setUserId(loginDetails.user_id);
        setActiveUserId(loginDetails.active);
        setUserProfileData({name: loginDetails.account_data.name,
            email: loginDetails.account_data?.email,
            avatar: loginDetails.account_data?.avatar,
            first_name: loginDetails.account_data?.first_name,
            last_name: loginDetails.account_data?.last_name,
            phone_number: loginDetails.account_data?.phone_number,
            membership_discount_roles: loginDetails.account_data?.membership_discount_roles,
            membership_packages: loginDetails.account_data?.membership_packages,
            zee_knowledge: loginDetails.account_data?.zee_knowledge,
            zee_studio: loginDetails.account_data?.zee_studio
        })
    };

    const handelRegister = (authDetails, userDetails) => {
        localStorage.setItem('TokenOZ', authDetails.access_token);
        localStorage.setItem("userIdOZ", authDetails.user_id);
        localStorage.setItem("activeUserOZ", authDetails.active);
        localStorage.setItem("userProfileDate", JSON.stringify({
            name: userDetails?.name,
            email: userDetails?.email,
            avatar: userDetails?.avatar,
            first_name: userDetails?.first_name,
            last_name: userDetails?.last_name,
            phone_number: userDetails?.phone_number}));

        setToken(authDetails.access_token);
        setUserId(authDetails.user_id);
        setActiveUserId(authDetails.active);
        setUserProfileData({name: userDetails?.name,
            email: userDetails?.email,
            avatar: userDetails?.avatar,
            first_name: userDetails?.first_name,
            last_name: userDetails?.last_name,
            phone_number: userDetails?.phone_number})
    }

    const handleLogout = () => {
        localStorage.removeItem('TokenOZ');
        localStorage.removeItem('userIdOZ');
        localStorage.removeItem('activeUserOZ');
        localStorage.removeItem('userProfileDate')
        setToken('');
        setUserId('');
        setActiveUserId('');
        setUserProfileData('');
    };

    const modifyUserData = (userDetails) => {
        localStorage.setItem("userProfileDate", JSON.stringify({
            name: userDetails?.name,
            email: userDetails?.email,
            avatar: userDetails?.avatar,
            first_name: userDetails?.first_name,
            last_name: userDetails?.last_name,
            phone_number: userDetails?.phone_number
        }));

        setUserProfileData({
            name: userDetails?.name,
            email: userDetails?.email,
            avatar: userDetails?.avatar,
            first_name: userDetails?.first_name,
            last_name: userDetails?.last_name,
            phone_number: userDetails?.phone_number
        });
    }

    const handelChangeBranch = (branchId) => {
        localStorage.setItem('branchIdOZ', branchId);
    };
    

    return (
        <AuthContext.Provider value={{   
            token, 
            userId, 
            branchId, 
            activeUserId, 
            userProfileDate, 
            handleLogin, 
            handelRegister, 
            handleLogout, 
            handelChangeBranch, 
            modifyUserData,
         }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};