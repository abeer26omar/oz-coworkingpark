import React from 'react';
import './PrivateEventsDetails.css';
import {PrivateEventsData} from "../../Data/PrivateEventsData";
import PrivateEventsDetailsList from "./PrivateEventsDetailsList";
import { Element } from 'react-scroll';

const PrivateEventsDetails = () => {

    return (
        <>
            <section className="private-events-details">
                <div className="container-fluid">

                    {PrivateEventsData.map((prevent, index) => {
                        const {id, address, img, places} = prevent;
                        const isEven = index % 2 === 0;
                        const reverse = !isEven;
                        return (
                            <Element>
                                <div className={`row border-top border-bottom ${reverse ? 'flex_reverse' : ''}`} key={index} name={address}>
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
