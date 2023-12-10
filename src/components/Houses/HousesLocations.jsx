import React, { useContext, useEffect, useState } from 'react';
import {Container} from "react-bootstrap";
import './HousesLocations.css';
import HousesLocationsList from "./HousesLocationsList";
import { getSiteLocations } from '../../apis/config';
import Paragraph from '../UI/Paragraph';

const HousesLocations = ({configData}) => {

    const [locations, setLocations] = useState([]);
    const [response, setResponse] = useState('');

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        getSiteLocations(signal).then(res=>{
            setLocations(res);
        }).catch(err=>{});

        return ()=>controller.abort();
    },[]);

    return (
        <>
            <div className="bg-body-tertiary navigator">
                <Container fluid className='justify-content-start'>
                    <div className='d-flex align-items-center change_dir'>
                        <h1 className="title-name mb-0">
                            Houses
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2"
                            height="127"
                            viewBox="0 0 2 127"
                            fill="none"
                        >
                            <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5"/>
                        </svg>
                        {configData ? configData.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === 'home_page_location_description' && (
                                    <Paragraph className="p-name ps-sm-4 ps-0 py-sm-0 py-3 mb-0">{configItem.value}</Paragraph>    
                                )}                                   
                            </React.Fragment>
                        )): ''}
                    </div>
                </Container>
            </div>

            <section className="locations-houses">
                <div className="container-fluid">
                    <div className="row">


                        {locations.map((locations, index) => {
                            const {id, address, title, main_image} = locations;
                            return (
                                <div className="col-lg-6 col-12 border-all " key={index}>
                                    <HousesLocationsList id={id} title={title} address={address} main_image={main_image}/>
                                </div>
                            )
                        })}
                        {response !== '' && <p className={`mt-2 mb-0`}>{response}</p>}

                    </div>
                </div>
            </section>
        </>
    );
};

export default HousesLocations;
