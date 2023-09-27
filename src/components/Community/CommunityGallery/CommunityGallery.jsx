import React from "react";
import gallery from "../../../assets/images/gallery.png";
import Media from "../../Media/Media";
import Buttons from "../../Buttons/Buttons";

const CommunityGallery = () => {
    return (
        <>
            <section id="community-gallery" className="gallery">
                <div className="container-fluid">
                    <div className="row"></div>
                    <div className="row border-of-section ">
                        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-6 m-auto ">
                            <div className="box-content px-60">
                                <h2 className="h2-text-box">Gallery</h2>
                                <p className="p-text-box">
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing eliteiusmod
                                </p>
                                <Buttons href="/galleryshow">
                                    Explore
                                </Buttons>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-8 col-xs-6 border-left ">
                            <Media
                                type="img"
                                className="image-box w-100"
                                src={gallery}
                                alt="Our OZ Vision"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CommunityGallery;
