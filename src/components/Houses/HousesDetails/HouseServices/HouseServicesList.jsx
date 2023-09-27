import React from 'react';
import './HouseServices.css'
import Media from "../../../Media/Media";

const HouseServicesList = ({id, title, text, img}) => {
    return (
        <>
            <div className="features" key={id}>
                <Media
                    type="img" src={img} className="" alt={title}/>
                <h2 className="bold-head">{title}</h2>
                <p className="text-content text-left ">{text}</p>
            </div>
        </>
    );
};

export default HouseServicesList;
