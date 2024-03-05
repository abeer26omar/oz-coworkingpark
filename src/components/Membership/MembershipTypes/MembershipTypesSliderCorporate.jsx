import React, {useEffect, useState, useContext} from 'react';
import Slider from "react-slick";
import { getListMembershipTypes } from '../../../apis/MembershipApi';
import MembershipTypesList from './MembershipTypesList';
import Paragraph from '../../UI/Paragraph';
import {AuthContext} from '../../../apis/context/AuthTokenContext';

const MembershipTypesSliderCorporate = ({currentMemberId}) => {

    const [types, setTypes] = useState([]);
    const {token} = useContext(AuthContext);

    useEffect(()=>{
        const getMemebershipTypes = async () => {
            try {
                const result = await getListMembershipTypes(token, 'no');
                setTypes(result['corporate']);
            }catch (err){console.log(err)}
        }
        getMemebershipTypes();
    },[token]);

    const settings = {
        dots: false,
        arrows: true,
        slidesToShow: types?.length-1 || 3,
        slidesToScroll: 1,
        infinite: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
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
        <Slider {...settings} className='corporate_slider'>
            {types && types.map((listMembershipType, index) => {
                const {id, name, link, description, logo} = listMembershipType;
                if(currentMemberId !== id){
                return (
                        <div key={index}>
                            <MembershipTypesList
                                id={id}
                                name={name}
                                link={link}
                                description={description}
                                image={logo}
                            />
                        </div>
                )
                }
            })}
        </Slider>
        {!types && <Paragraph>there is no membership type to display</Paragraph>}
        </>
    );

}
export default MembershipTypesSliderCorporate;