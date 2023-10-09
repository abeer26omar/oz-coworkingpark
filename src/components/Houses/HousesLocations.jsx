import React, { useEffect, useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Container} from "react-bootstrap";
import './HousesLocations.css';
import HousesLocationsList from "./HousesLocationsList";
import axios from "axios";

const HousesLocations = () => {
    const [locations, setLocations] = useState([]);
    const [response, setResponse] = useState('');
    useEffect(()=>{
        const getLocations = async ()=>{
            try{
                const config = {
                    method: 'get',
                    url: `${process.env.REACT_APP_API_CONFIG_URL}/api/locations`
                };
                const response = await axios(config);
                setLocations(response.data.data);
            }catch(error){
                setResponse(error.response.data.message);
            }
        }
        getLocations();
    },[]);
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator">
                <Container fluid className='justify-content-start'>
                    <p className="title-name">
                        Houses
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="127"
                        viewBox="0 0 2 127"
                        fill="none"
                    >
                        <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5"/>
                    </svg>
                    <p className="p-name">Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum
                        dolor sit
                        amet,
                        consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, </p>

                </Container>
            </Navbar>

            <section className="locations-houses">
                <div className="container-fluid">
                    <div className="row">


                        {locations.map((locations, index) => {
                            const {id, address, title, main_image} = locations;
                            return (
                                <div className="col-lg-6 col-md-6 col-sm-12 border-all " key={index}>
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
