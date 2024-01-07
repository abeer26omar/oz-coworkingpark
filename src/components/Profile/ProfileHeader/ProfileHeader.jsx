import React, { useContext, useEffect, useState } from 'react';
import userprofile from '../../../assets/images/userprofile.png';
import './ProfileHeader.css';
import Media from "../../Media/Media";
import { AuthContext } from '../../../apis/context/AuthTokenContext';
import { DisableContext } from '../../../apis/context/DisableStateContext';

const ProfileHeader = () => {

    const { userProfileDate } = useContext(AuthContext);
    const [avatar, setAvatar] = useState(userProfileDate.avatar);
    const { stateDisable, imageValue } = useContext(DisableContext);

    const editProfile = (event) => {
        const file = event.target.files[0];
        if(file && file.type.substring(0,5) === 'image'){
            setAvatar(URL.createObjectURL(file));
            imageValue(file);
        }else{
            setAvatar(userProfileDate.avatar)
        }
    };

    return (
        <>
            <section className="profile-header p-5 border-bottom">
                <div className="container-fluid">
                    {userProfileDate && <div className="d-flex align-items-center flex-sm-row flex-column">
                        <Media
                            type="img" 
                            src={avatar} 
                            alt="user name"/>
                            <div className="ps-sm-4 p-0 text-sm-start text-center">
                            {stateDisable ? (
                                <>
                                    <label className='edit_photo'>Edit Photo <input
                                        type='file'
                                        accept='/image/png'
                                        className="p-0 d-none"
                                        onChange={editProfile}/></label>
                                </>
                            ) : (
                                <>
                                    <h2 className="user-name pt-sm-0 pt-2">{userProfileDate.name}</h2>
                                    <span className="job-name">{userProfileDate.email}</span>
                                </>
                            )}
                            </div>
                    </div>}
                </div>
            </section>
        </>
    );
};

export default ProfileHeader;
