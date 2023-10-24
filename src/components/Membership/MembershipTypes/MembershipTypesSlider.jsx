import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import { getListMembershipTypes } from '../../../apis/Api';
import MembershipTypesList from './MembershipTypesList';
import Paragraph from '../../UI/Paragraph';

const MembershipTypesSlider = (props) => {
    const [listMembershipsTypes, setListMembershipsTypes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const membershipTypes = await getListMembershipTypes();
                setListMembershipsTypes(membershipTypes);
            } catch (error) {
                console.error('Error fetching membership types:', error);
            }
        }

        fetchData();
    }, []);
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 3,
                settings: "unslick",

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    };
    return (
        <>
        <Slider {...settings}>
            {listMembershipsTypes && listMembershipsTypes.map((listMembershipType, index) => {
                const {id, name, logo, link, description, img} = listMembershipType;
                return (
                    <div className="row">
                        <div className="col-lg-12" key={index}>
                            <MembershipTypesList
                                id={id}
                                name={name}
                                logo={logo}
                                link={link}
                                description={description}
                                img={img}
                            />
                        </div>
                    </div>
                );
            })}
        </Slider>
        {!listMembershipsTypes && <Paragraph>there is no membership type to display</Paragraph>}
        </>
    );

}
export default MembershipTypesSlider;