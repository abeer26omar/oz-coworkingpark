import React, { useEffect, useState } from 'react';
import ProfileHeader from "../components/Profile/ProfileHeader/ProfileHeader";
import ProfileTabs from "../components/Profile/ProfileTabs/ProfileTabs";
import {getUserInfo} from '../apis/User';

const Profile = () => {
    const [userInfo, setUserInfo] = useState({})
    useEffect(()=>{
        getUserInfo().then(res=>{
            setUserInfo(res.user_data);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    return (
        <>
            <ProfileHeader userInfo={userInfo}/>
            <ProfileTabs userInfo={userInfo}/>
        </>
    );
};

export default Profile;
