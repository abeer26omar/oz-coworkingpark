import React from 'react';
import './BecomeMember.css';
// Import Images
import workspace from '../../../assets/images/workingSpace.png';

const BecomeMember = () => {
    return (
        <>
            {/*<!--Start Become a member-->*/}
            <section className=" ">
                <div className="container-fluid">

                    <div className="row border-of-section ">
                        <div className="col-md-8 col-lg-8 col-sm-8 col-xs-6 border-right ">
                            <img
                                className="image-box w-100"
                                src={workspace}
                                alt="Our OZ Vision"
                                lazyLoad
                            />
                        </div>

                        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-6 m-auto ">
                            <div className="box-content px-60">
                                <h2 className="h2-text">Become a member</h2>

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
