import React from 'react';
import './GalleryHeader.css';
import galleryHeaderone from '../../../assets/images/galleryheaderone.png';
import galleryHeadertwo from '../../../assets/images/galleryheadertwo.png';
import Media from "../../Media/Media";

const GalleryHeader = () => {
    return (
        <>
            <header className="galleryHeader">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <Media
                                    type="img" src={galleryHeaderone}/>
                                <div className="text-gallery">
                                    <span>Community</span>
                                    <h2>gallery</h2>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 text-center    ">
                            <Media
                                type="img" src={galleryHeadertwo}/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default GalleryHeader;
