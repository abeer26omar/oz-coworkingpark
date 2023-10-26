import React from 'react';
import Media from "../../Media/Media";
import Paragraph from '../../UI/Paragraph';

const ServicesList = ({id, title, image,description}) => {
    return (
        <>
            <div className="features" key={id}>
                <Media
                    type="img" 
                    src={image} 
                    className=" services-icons mb-3" 
                    alt={title}/>
                <Paragraph className="bold-head mt-3">{title}</Paragraph>
                <Paragraph className="text-content text-left mt-4">{description}</Paragraph>
            </div>
        </>
    );
};

export default ServicesList;
