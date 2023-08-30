import React from 'react';
import {Link} from "react-router-dom";
import './MembershipTypes.css';

const MembershipTypesList = ({id, logo, name, description, img}) => {

    return (
        <>
            <div key={id}>
                <div className="card my-2 h-100">
                    <img src={img} className="card-img-top" alt={name}/>
                    <div className="card-body">
                        <h5 className="card-title ">{name}</h5>
                        <p className="text-muted">{description}</p>
                        {/*<Link to={`/membership/${id}`} name={name}*/}
                        {/*      className="btn button-outLine btn-bg-white">{name}</Link>*/}
                        <Link to='/membershipDetailsTest' name={name}
                              className="btn button-outLine btn-bg-white">{name}</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MembershipTypesList;
