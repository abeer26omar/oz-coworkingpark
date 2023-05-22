import React, {useEffect, useState} from 'react';
import {Link, NavLink, Route} from "react-router-dom";
import './MembershipTypes.css';
import axios from "axios";
import FormData from "form-data";
const MembershipTypesList = ({id,logo,name,description}) => {



    return (
        <>
                <div key={id}>
                    <div className="card my-2 h-100" >
                                <img src={logo} className="card-img-top" alt={name}/>
                                    <div className="card-body">
                                        <h5 className="card-title my-3">{name}</h5>
                                        <p className="text-muted">{description}</p>
                                        <Link to={`/membership/${id}`} name={name} className="button-one-outline p-0 my-3">{name}</Link>
                                    </div>
                            </div>
                </div>

            {/*<div key={id}>*/}
            {/*    <div className="card my-2 h-100">*/}
            {/*        <img src={logo} className="card-img-top" alt={name} />*/}
            {/*        <div className="card-body">*/}
            {/*            <Link to={`/membership/${id}`}  className="button-one-outline p-0 my-3">Hello</Link>*/}

            {/*            {membershipData ? (*/}
            {/*                <div>*/}
            {/*                    <h5 className="card-title my-3">{membershipData.name}</h5>*/}
            {/*                    <p className="text-muted">{membershipData.description}</p>*/}
            {/*                    /!* Render any other data that you need here *!/*/}

            {/*                </div>*/}
            {/*            ) : (*/}
            {/*                <h5 className="card-title my-3">{name}</h5>*/}

            {/*            )}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};

export default MembershipTypesList;
