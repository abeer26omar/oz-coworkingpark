import React from 'react';
import './PrivateEventsDetails.css'
import {PrivateEventsData} from "../../Data/PrivateEventsData";
import PrivateEventsDetailsList from "./PrivateEventsDetailsList";

const PrivateEventsDetails = () => {
    return (
        <>
            <section className="private-events-details border-top">
                <div className="container-fluid">

                    {PrivateEventsData.map((prevent, index) => {
                        const {id, address, img, places} = prevent;
                        return (
                            <div className="row border-of-section  " key={index}>
                                <PrivateEventsDetailsList id={id} address={address} img={img} index={index}
                                                          places={places}/>
                            </div>

                        )

                    })}

                </div>
            </section>

        </>
    );
};

export default PrivateEventsDetails;
