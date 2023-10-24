import React from 'react';
import Media from "../../Media/Media";
import Button from '../../UI/Button';
import Paragraph from '../../UI/Paragraph';
const MembershipTypesList = ({id, logo, name, description, img}) => {

    return (
        <>
            <div className="card my-2 h-100">
                <Media
                    type="img" src={logo} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <Paragraph className="card-title">{name}</Paragraph>
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
