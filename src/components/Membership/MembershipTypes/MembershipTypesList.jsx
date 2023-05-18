import React from 'react';
import {NavLink} from "react-router-dom";
import './MembershipTypes.css';
const MembershipTypesList = ({id,logo,name,link}) => {
        // Start Slider Sittings

    // End Slider Sittings
    return (
        <>
                <div key={id}>
                    <div className="card my-2 h-100" >
                                <img src={logo} className="card-img-top" alt={name}/>
                                    <div className="card-body">
                                        <h5 className="card-title my-3">{name}</h5>
                                        <NavLink to={"/individual"} className="button-one-outline p-0 my-3">Find out more</NavLink>
                                    </div>
                            </div>
                </div>

        </>
    );
};

export default MembershipTypesList;
