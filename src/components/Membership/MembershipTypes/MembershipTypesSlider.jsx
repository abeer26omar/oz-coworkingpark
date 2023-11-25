import { useContext, useEffect, useState } from 'react';
import Slider from "react-slick";
import { getListMembershipTypes } from '../../../apis/MembershipApi';
import MembershipTypesList from './MembershipTypesList';
import {AuthContext} from '../../../apis/context/AuthTokenContext';

const MembershipTypesSlider = () => {
    
    const [types, setTypes] = useState([]);
    const {token} = useContext(AuthContext);

    useEffect(()=>{
        const getMemebershipTypes = async () => {
            try {
                const result = await getListMembershipTypes(token);
                setTypes(result['individual']);
            }catch (err){console.log(err)}
        }
        getMemebershipTypes();
    },[token]);

    const settings = {
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
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
        <Slider {...settings} className='individual_slider'>
            {types && types.map((listMembershipType, index) => {
                const {id, name, logo, link, description }  = listMembershipType;
                return (
                    <div className='px-2'>
                        <MembershipTypesList
                            key={index}
                            id={id}
                            name={name}
                            logo={logo}
                            link={link}
                            description={description}
                            image={logo}
                        />
                    </div>
                );
            })}
        </Slider>
        {/* {isError && <Paragraph>there is no membership type to display</Paragraph>} */}
        </>
    );

}
export default MembershipTypesSlider;