import React from 'react';
import {Link} from "react-router-dom";

const HousesLocationsList = ({id, img, government, address}) => {
    return (
        <>

            <div className="box-office" key={id}>
                <div className="d-lg-flex justify-content-between align-items-center d-sm-block">
                    <div className="location-contact">
                        <h2 className="h2-text-box">{address}</h2>
                        <span className="government">{government}</span>
                    </div>
                    <div className="btn-explore">
                        <Link to={`/houses/${id}`} href="#" className="btn button-outLine btn-bg-white ">Explore</Link>
                    </div>
                </div>
                <img src={img} alt="office" className="w-100"/>


            </div>

        </>
    );
};

export default HousesLocationsList;
