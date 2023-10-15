import React from 'react';
import Media from "../Media/Media";
import Button from "../UI/Button";

const HousesLocationsList = ({id, address, title, main_image}) => {
    return (
        <>

            <div className="box-office" key={id}>
                <div className="d-lg-flex justify-content-between align-items-center d-sm-block">
                    <div className="location-contact">
                        <h2 className="h2-text-box">{title}</h2>
                        <span className="government">{address}</span>
                    </div>
                    <div className="btn-explore">
                        <Button 
                            tagType='link'
                            className="btn button-outLine btn-bg-white"
                            to={`/houses/${id}`}
                        >Explore</Button>
                    </div>
                </div>
                <Media
                    type="img" 
                    src={main_image} 
                    alt="office" 
                    className="w-100 img-fit" 
                    height='600px' />
            </div>

        </>
    );
};

export default HousesLocationsList;
