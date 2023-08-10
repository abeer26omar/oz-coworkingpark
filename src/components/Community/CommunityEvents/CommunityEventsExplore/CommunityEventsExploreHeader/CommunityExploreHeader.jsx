import React from 'react';
import party from "../../../../../assets/images/party.png";
import './CommunityExploreHeader.css';

const CommunityExploreHeader = () => {
    return (
        <>
            <div className="box com-events">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="rectangle-wrapper">
                                <div className="rectangle"/>
                            </div>
                            <img
                                className="img"
                                alt="Group"
                                src={party}

                            />

                            <div className="group-2">
                                <h1 className="an-innovative-co position-relative">
                                    <span className="text-wrapper head-co">Community</span>
                                    <span className="text-wrapper-2">Community events</span>
                                </h1>
                                <p className="p">
                                    Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit
                                    amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, Lorem ipsum dolor sit
                                    amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, consectetuerLorem
                                    ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default CommunityExploreHeader;
