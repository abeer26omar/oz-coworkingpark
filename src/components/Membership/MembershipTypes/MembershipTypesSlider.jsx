import { useQuery } from '@tanstack/react-query';
import Slider from "react-slick";
import { getListMembershipTypes } from '../../../apis/MembershipApi';
import MembershipTypesList from './MembershipTypesList';
import Paragraph from '../../UI/Paragraph';
import { MembershipIndividualsTypes } from '../../../Data/IndividualsTypesData';
import CardPlaceHolder  from '../../UIPlaceholders/CardPlaceHolder';

const MembershipTypesSlider = () => {
    // const {data, error, isError} = useQuery({
    //     queryKey: ['membershipTypes'],
    //     queryFn: getListMembershipTypes
    // });
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
            {MembershipIndividualsTypes ? MembershipIndividualsTypes.map((listMembershipType, index) => {
                const {id, name, logo, link, description, image }  = listMembershipType;
                return (
                    <div className='px-3'>
                        <MembershipTypesList
                            key={index}
                            id={id}
                            name={name}
                            logo={logo}
                            link={link}
                            description={description}
                            image={image}
                        />
                    </div>
                );
            }) : (
                <div className='px-3'>
                    <CardPlaceHolder />
                </div>
            )}
        </Slider>
        {/* {isError && <Paragraph>there is no membership type to display</Paragraph>} */}
        </>
    );

}
export default MembershipTypesSlider;