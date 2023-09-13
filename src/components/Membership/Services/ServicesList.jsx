import React from 'react';
import Media from "../../Media/Media";

const ServicesList = ({id, title, text, img, imgwhite}) => {
    return (
        <>
            <div className="features" key={id}>
                <Media
                    type="img" src={img} className="mb-3" alt={title}/>
                <h2 className="bold-head mt-3">{title}</h2>
                <p className="text-content text-left mt-4">{text}</p>
            </div>
        </>
    );
};

export default ServicesList;
