import React from 'react';
import './PrivateEventsDetails.css';
import {PrivateEventsData} from "../../Data/PrivateEventsData";
import PrivateEventsDetailsList from "./PrivateEventsDetailsList";
import { Element } from 'react-scroll';

const PrivateEventsDetails = () => {
    return (
        <>
            <section className="private-events-details border-top">
                <div className="container-fluid">

                    {PrivateEventsData.map((prevent, index) => {
                        const {id, address, img, places} = prevent;
                        return (
                            <Element>
                                <div className="row border-of-section" key={index} name={address}>
                                    <PrivateEventsDetailsList 
                                        id={id} 
                                        address={address} 
                                        img={img} 
                                        index={index}
                                        places={places}/>
                                </div>
                            </Element>
                        )

                    })}

                </div>
            </section>

        </>
    );
};

export default PrivateEventsDetails;
