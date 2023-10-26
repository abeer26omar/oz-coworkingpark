import React from 'react';
import Media from "../../Media/Media";
import Button from '../../UI/Button';

const MembershipTypesList = ({id, image, name, link}) => {

    return (
        <>
            <div className="card my-2 h-100 text-start">
                <Media
                    type="img" src={image} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h1 className="card-title">{name}</h1>
                    <Button
                        tagType='link' 
                        to={`/membership/${id}`} 
                        name={name}
                        className="btn button-outLine btn-bg-white">{link}</Button>
                </div>
            </div>
        </>
    );
};

export default MembershipTypesList;
