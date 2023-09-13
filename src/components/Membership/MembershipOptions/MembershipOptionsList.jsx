import React from 'react';
import {Link} from "react-router-dom";
import Media from "../../Media/Media";

const MembershipOptionsList = ({id, image, name, logo, type, price}) => {
    return (
        <div>
            <>
                <div className="card" key={id}>
                    <Media
                        type="img" src={logo} className="card-img-top" alt={type}/>
                    <div className="card-body">
                        <h2 className="card-title my-3">{name}</h2>
                        <h3> {price}$</h3>
                        <Link to={`/singleMember/${id}`} name={name}
                              className="button-one-outline p-0 my-3">{name}</Link>
                    </div>
                </div>
            </>
        </div>
    );
};

export default MembershipOptionsList;
