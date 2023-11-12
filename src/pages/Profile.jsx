import React, { useContext, useEffect, useState} from 'react';
import ProfileHeader from "../components/Profile/ProfileHeader/ProfileHeader";
import ProfileTabs from "../components/Profile/ProfileTabs/ProfileTabs";
import { getUserInfo} from '../apis/User';
import { AuthContext } from '../apis/context/AuthTokenContext';

const Profile = () => {
    const [userInfo, setUserInfo] = useState({});
    const { token, userId } = useContext(AuthContext);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        getUserInfo(token, userId, signal).then(res=>{
            setUserInfo(res);
        }).catch(err=>{console.log(err)});

        return ()=>controller.abort();
    },[]);
    return (
        <>
            <ProfileHeader userInfo={userInfo["user_data"]}/>
            <ProfileTabs userData={userInfo['user_data']} custom={userInfo['custom']} />
        </>
    );
};

export default Profile;
