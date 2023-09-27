import React from 'react';
import './Locations.css';
import mapPoint from '../../assets/images/icons/mapPoint.svg';
import Media from "../Media/Media";

const LocationsList = ({id, address, img}) => {
    return (
        <>
            <figure className="" key={id}>
                <Media
                    type="img" src={img} className="figure-img img-fluid image-box w-100"
                    alt={address}/>
                <div className="d-flex justify-content-start image-box box-locations">
                    <img
                        src={mapPoint} className="mx-3 map-point" style={{width: "24px", height: "24px"}}
                        alt="map"/>

                    <p className="figure-caption location-slider mt-auto">{address}</p>
                </div>
            </figure>
        </>
    );
};

export default LocationsList;
