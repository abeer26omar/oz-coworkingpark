import React from 'react';
import './Locations.css';
import mapPoint from '../../assets/images/icons/mapPoint.svg';
import Media from "../Media/Media";
import Paragraph from '../UI/Paragraph';

const LocationsList = ({id, address, img, addAddress}) => {
    return (
        <>
            <div className="" key={id}>
                <Media
                    type="img" 
                    src={img} 
                    className="w-100 image-box"
                    alt={address} />
                    {addAddress && (
                        <div className="d-flex align-items-center box-locations justify-content-end">
                            <img
                                src={mapPoint} 
                                className="map-point" 
                                style={{width: "24px", height: "24px"}}
                                alt="map"/>
                            <Paragraph className='map-address mb-0 mx-2'>
                                {address}
                            </Paragraph>
                            <a className="location-slider " href={`https://www.google.com/maps/dir/${address}`} target='_blank'>git direction</a>
                        </div>
                    )}
            </div>
        </>
    );
};

export default LocationsList;
