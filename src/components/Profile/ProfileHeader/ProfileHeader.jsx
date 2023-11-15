import React, { useContext, useEffect, useState } from 'react';
import userprofile from '../../../assets/images/userprofile.png';
import './ProfileHeader.css';
import Media from "../../Media/Media";
import { AuthContext } from '../../../apis/context/AuthTokenContext';

const ProfileHeader = () => {

    const { userProfileDate } = useContext(AuthContext)

    return (
        <>
            <section className="profile-header p-5 border-bottom">
                <div className="container-fluid">
                    {userProfileDate && <div className="d-flex align-items-center flex-sm-row flex-column">
                        <Media
                            type="img" src={userProfileDate.avatar || userprofile} alt="user name"/>
                                <div className="ps-sm-4 p-0 text-sm-start text-center">
                                    <h2 className="user-name pt-sm-0 pt-2">{userProfileDate.name}</h2>
                                    <span className="job-name">{userProfileDate.email}</span>
                                </div>
                    </div>}
                </div>
            </section>
        </>
    );
};

export default ProfileHeader;
