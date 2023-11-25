import React from 'react';
import Media from "../../Media/Media";
import Button from '../../UI/Button';
import Paragraph from '../../UI/Paragraph';

const MembershipTypesList = ({id, image, name ,description}) => {

    return (
        <>
            <div className="card my-2 h-100 text-start">
                <Media
                    type="img" src={image} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <Paragraph className="card-title">{name}</Paragraph>
                    <Paragraph>{description && (description.length > 30 ? `${description.slice(0,30)}...` : description)}</Paragraph>
                    <Button
                        tagType='link' 
                        to={`/membership/${id}`} 
                        name={name}
                        className="btn button-outLine btn-bg-white">{'Find out more'}</Button>
                </div>
            </div>
        </>
    );
};

export default MembershipTypesList;
