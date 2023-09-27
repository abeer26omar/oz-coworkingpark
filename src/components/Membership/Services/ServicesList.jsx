import React from 'react';
import Media from "../../Media/Media";

const ServicesList = ({id, name, text, logo}) => {
    return (
        <>
            <div className="features" key={id}>
                <Media
                    type="img" src={logo} className=" services-icons mb-3" alt={name}/>
                <h2 className="bold-head mt-3">{name}</h2>
                {/*<p className="text-content text-left mt-4">{text}</p>*/}
            </div>
        </>
    );
};

export default ServicesList;
