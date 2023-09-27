import React from 'react';
import './Partners.css';
import logo1 from '../../assets/images/partners/logo1.png';
import logo2 from '../../assets/images/partners/logo2.png';
import logo3 from '../../assets/images/partners/logo3.png';
import logo4 from '../../assets/images/partners/logo4.png';
import Media from "../Media/Media";

const Partners = () => {
    return (
        <>
            <section className="partners p-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head-content">
                                <h3 className="h3-text">Over 100+ Growing With Us</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "40px"}}>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center border-right">
                            <Media
                                type="img" src={logo1} alt="partner logo" className="d-flex m-auto"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center border-right">
                            <Media
                                type="img" src={logo2} alt="partner logo" className="d-flex m-auto"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center border-right">
                            <Media
                                type="img" src={logo3} alt="partner logo" className="d-flex m-auto"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center ">
                            <Media
                                type="img" src={logo4} alt="partner logo" className="d-flex m-auto"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Partners;
