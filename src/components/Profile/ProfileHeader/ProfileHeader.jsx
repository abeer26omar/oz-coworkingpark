import React from 'react';
import userprofile from '../../../assets/images/userprofile.png';
import './ProfileHeader.css';
import Media from "../../Media/Media";

const ProfileHeader = ({userInfo}) => {
    return (
        <>
            <section className="profile-header p-5 border-bottom">
                <div className="container-fluid">
                    <div className="d-flex align-items-center flex-sm-row flex-column">
                        {userInfo && <Media
                            type="img" src={userInfo.avatar || userprofile} alt="user name"/>}
                            {userInfo && 
                                <div className="ps-sm-4 p-0 text-sm-start text-center">
                                    <h2 className="user-name pt-sm-0 pt-2">{userInfo.name}</h2>
                                    <span className="job-name">{userInfo.email}</span>
                                </div>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfileHeader;
