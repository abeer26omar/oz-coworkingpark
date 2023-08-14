import React, {useState} from 'react';

import './PrivateEventsDetails.css'

const PlaceItem = ({place, img, isActive, setActiveImg}) => {

    const [active, setActive] = useState(false);

    const handlePlaceClick = () => {
        setActive(true);
        setActiveImg(place.images);
    };

    return (
        <li
            onClick={handlePlaceClick}
            className={`list-unstyled list-places ${active ? 'active' : ''}`}
        >
            {place.name}
        </li>
    );
};


export default PlaceItem;
