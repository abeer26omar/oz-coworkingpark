import React from 'react';
import community from "../../../assets/images/videos/community.mp4";
import './CommunityHeader.css';

const CommunityHeader = () => {
    return (
        <>
            <div className="box community-header">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="rectangle-wrapper">
                                <div className="rectangle" />
                            </div>
                            <video className="img" alt="Group" src={community} autoPlay muted loop />
                            <div className="group-2">
                                <h1 className="an-innovative-co">
                                    <span className="text-wrapper-2">Community</span>
                                </h1>
                                <p className="p">
                                    Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CommunityHeader;
