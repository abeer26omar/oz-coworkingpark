import React from 'react';
import './Locations.css';
import mapPoint from '../../assets/images/icons/mapPoint.svg';
import Media from "../Media/Media";

const LocationsList = ({id, address, img}) => {
    return (
        <>
            <div className="" key={id}>
                <Media
                    type="img" 
                    src={img} 
                    className="image-box w-100"
                    height='600px'
                    alt={address}/>
                <div className="d-flex justify-content-start image-box box-locations pt-3">
                    <img
                        src={mapPoint} className="mx-3 map-point" style={{width: "24px", height: "24px"}}
                        alt="map"/>

                    <a className="location-slider mt-auto text-underline" href={`https://www.google.com/maps/dir/${address}`} target='_blank'>{address}</a>
                </div>
            </div>
        </>
    );
};

export default LocationsList;
