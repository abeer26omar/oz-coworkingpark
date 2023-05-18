import React from 'react';
import {NavLink} from "react-router-dom";

const IndividualTypesList = ({id, name, img}) => {
    return (
        <>
            <div className="card" key={id}>
                <img src={img} className="card-img-top" alt={name}/>
                    <div className="card-body">
                        <h5 className="card-title my-3">{name}</h5>
                        <NavLink to={"/joinus"} className="button-one-outline p-0 my-3">Get Started</NavLink>
                    </div>
            </div>
        </>
    );
};

export default IndividualTypesList;