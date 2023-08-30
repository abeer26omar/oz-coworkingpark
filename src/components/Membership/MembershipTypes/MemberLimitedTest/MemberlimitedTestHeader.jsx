import React from 'react';
import newsfeed from "../../../../assets/images/videos/limited.mp4";

const MemberlimitedTestHeader = () => {
    return (
        <>
            <div className="box news-header">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="rectangle-wrapper">
                                <div className="rectangle"/>
                            </div>
                            <video
                                className="img"
                                alt="Group"
                                src={newsfeed}
                                autoPlay
                                muted
                                loop
                            />
                            <div className="group-2">
                                <h1 className="an-innovative-co position-relative">
                                    <span className="text-wrapper head-co">The social</span>
                                    <span className="text-wrapper-2">limited 8</span>
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

export default MemberlimitedTestHeader;
