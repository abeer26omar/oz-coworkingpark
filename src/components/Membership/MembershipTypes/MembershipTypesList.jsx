import React from 'react';
import './MembershipTypes.css';
import Media from "../../Media/Media";
import {Link} from "react-router-dom";

const MembershipTypesList = ({id, logo, name, description, img}) => {

    return (
        <>
            <div className="card my-2 h-100">
                <Media
                    type="img" src={logo} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title ">{name}</h5>
                    {/*<p className="text-muted">{description}</p>*/}
                    <Link to={`/membership/${id}`} name={name}
                          className="btn button-outLine btn-bg-white">{name}</Link>
                    {/*<Buttons href='/membershipDetailsTest' name={name}>{name}</Buttons>*/}
                </div>
            </div>
        </>
    );
};

export default MembershipTypesList;
