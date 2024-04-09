import React, {useEffect, useState, useContext} from 'react';
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import { getListMembershipTypes } from '../../../apis/MembershipApi';
import MembershipTypesList from './MembershipTypesList';
import Paragraph from '../../UI/Paragraph';
import {AuthContext} from '../../../apis/context/AuthTokenContext';

const MembershipTypesSliderCorporate = ({currentMemberId}) => {
    
    const { token } = useContext(AuthContext);

    const { error, data: types } = useQuery({
        queryKey: ['listMembershipTypes-corporate', token],
        queryFn: ({signal}) => getListMembershipTypes(token, "no", signal)
    });

    const settings = {
        dots: false,
        arrows: true,
        slidesToShow: 
            types && types.corporate
            ? types.corporate.length > 3
            ? 3
            : currentMemberId
            ? types.corporate.length - 1
            : types.corporate.length
            : 0,
        slidesToScroll: 1,
        infinite: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 
                        types && types.corporate
                        ? types.corporate.length > 3
                        ? 3
                        : currentMemberId
                        ? types.corporate.length - 1
                        : types.corporate.length
                        : 0,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 3,
                settings: "unslick",

            }
        ]

    };

    return (
        <>
        {types && types['corporate']?.lenght > 1 ? 
        (
            <Slider {...settings} className='corporate_slider'>
            {types && types['corporate'].map((listMembershipType, index) => {
                const {id, name, link, description, logo} = listMembershipType;
                if(currentMemberId !== id){
                return (
                    <div className="col-4 px-2" key={index}>
                        <MembershipTypesList
                                id={id}
                                name={name}
                                link={link}
                                description={description}
                                image={logo}
                            />
                    </div>
                )}
            })}
            </Slider>
        ) 
        :
        (
            <>
            {types && types['corporate'].map((listMembershipType, index) => {
                const {id, name, link, description, logo} = listMembershipType;
                if(currentMemberId !== id){
                    return (  
                        <div className="col-4 px-2" key={index}>
                   <MembershipTypesList
                           id={id}
                           name={name}
                           link={link}
                           description={description}
                           image={logo}
                       />
                   </div>)
                }
            })}
            </>
        )}
        
        {!types && <Paragraph>there is no membership type to display</Paragraph>}
        </>
    );

}
export default MembershipTypesSliderCorporate;