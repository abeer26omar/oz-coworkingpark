import React from 'react';
import './BecomeMember.css';
// Import Images
import workspace from '../../../assets/images/workingSpace.png';
import Media from "../../Media/Media";
import Paragraph from '../../UI/Paragraph';

const BecomeMember = () => {
    return (
        <>
            {/*<!--Start Become a member-->*/}
            <section className=" ">
                <div className="container-fluid">

                    <div className="row border-of-section">
                        <div className="col-md-6 col-lg-8 col-sm-8 col-xs-6 border-right img_block">
                            <Media
                                type="img"
                                className="image-box w-100"
                                src={workspace}
                                alt="Our OZ Vision"
                            />
                        </div>

                        <div className="col-md-6 col-lg-4 col-sm-4 col-xs-6 m-auto ">
                            <div className="box-content px-4">
                                <Paragraph className="h2-text">Become a member</Paragraph>

                                <h2 className="h2-text-box achievement-text ">Flexible working space solutions</h2>
                                <p className="p-text-box">
                                    Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
                                    Lorem ipsum dolor sit amet, consectetuerL
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!--End Become a member-->*/}

        </>
    );
};

export default BecomeMember;
