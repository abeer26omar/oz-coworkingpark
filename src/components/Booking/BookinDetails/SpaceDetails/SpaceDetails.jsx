import React, { useState } from 'react';
import './SpaceDetails.css';
import Paragraph from '../../../UI/Paragraph';
import Select from 'react-select';

const SpaceDetails = ({venueDetails}) => {
    const optionList = venueDetails.services.map(item=>{
        return { value: item.id , label: item.name }
    })
    
    const [selectedOptions, setSelectedOptions] = useState();
    const handleChange = (data)=>{
        setSelectedOptions(data);
    }

    return (
        <>
           <section className="space-details">
                <div className="container-fluid">
                    <div className="row p-3">
                        <div className="col-lg-6 col-12 p-sm-5 p-3 border-right">
                            <div className="space-description mb-5">
                                <Paragraph className="h2-description">
                                    Space Description
                                </Paragraph>
                                <Paragraph className="p-description">
                                    {venueDetails.description}
                                </Paragraph>
                            </div>
                            <div className="catering">
                                <Paragraph className="h2-catering">
                                    Services
                                </Paragraph>
                                <div className="col-lg-8 form__group field my-3 group-check">
                                    <Select
                                        options={optionList}
                                        placeholder="Services"
                                        className="form__field placeholderSelect"
                                        value={selectedOptions}
                                        onChange={handleChange}
                                        isSearchable={true}
                                        isMulti
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-12 p-sm-5 p-3 m-sm-auto">
                            <div className="space-price mb-5">
                                <Paragraph className="h2-description">
                                    Price
                                </Paragraph>
                                <div className="price-list">
                                    <span>{venueDetails.price} EGP / Hour</span>
                                </div>
                            </div>
                            <div className="space-facilities mb-5">
                                <Paragraph className="h2-description">
                                    facilities
                                </Paragraph>
                                <div className="facilities-list">
                                    <ul>
                                        {
                                            venueDetails.facilities.slice(0,3).map((service,index)=>{
                                                return (
                                                    <li className='' key={index}>
                                                        
                                                        <img
                                                            type="img" 
                                                            src={service.logo}
                                                            alt={service.name}
                                                            width={'56px'}
                                                            height={'56px'}
                                                            style={{
                                                                objectFit: 'scale-down'
                                                            }}
                                                        />
                                                        {service.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="space-capacity mb-5">
                                <Paragraph className="h2-description">
                                    capacity
                                </Paragraph>
                                <span>{venueDetails.capacity} Persons</span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default SpaceDetails;
