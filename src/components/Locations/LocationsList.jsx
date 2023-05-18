import React from 'react';
import './Locations.css';
import mapPoint from '../../assets/images/icons/mapPoint.svg';
const LocationsList = ({id, address, img}) => {
    return (
        <>
            <figure className="figure" key={id}>
                <img src={img} className="figure-img img-fluid"
                     alt={address}/>
                <div className="d-flex justify-content-start pt-5">
                    <img src={mapPoint} className="mx-3" style={{width: "24px", height: "24px"}}/>

                    <p className="figure-caption location-slider mt-auto">{address}</p>
                </div>
            </figure>
        </>
    );
};

export default LocationsList;