import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Container} from "react-bootstrap";
import './HousesLocations.css'
import {locationsData} from "../../Data/LocationsData";
import HousesLocationsList from "./HousesLocationsList";

const HousesLocations = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator">
                <Container fluid>
                    <Navbar.Brand className="title-name" href="#home">
                        Houses
                    </Navbar.Brand>
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


                        {locationsData.map((locations, index) => {
                            const {id, address, government, img} = locations;
                            return (
                                <div className="col-lg-6 col-md-6 col-sm-12 border-all " key={index}>
                                    <HousesLocationsList id={id} address={address} government={government}

                                                         img={img}/>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    );
};

export default HousesLocations;
