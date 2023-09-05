import React from 'react';
import userprofile from '../../../assets/images/userprofile.png'
import './ProfileHeader.css'

const ProfileHeader = () => {
    return (
        <>
            <section className="profile-header border-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex align-items-center">
                                <img src={userprofile} alt="user name"/>
                                <div className="d-block">
                                    <h2 className="user-name">Samara Mohamed</h2>
                                    <span className="job-name">Data scientist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfileHeader;
