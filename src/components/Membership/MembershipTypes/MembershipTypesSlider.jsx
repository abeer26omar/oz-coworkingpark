import { useContext } from "react";
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import { getListMembershipTypes } from "../../../apis/MembershipApi";
import MembershipTypesList from "./MembershipTypesList";
import { AuthContext } from "../../../apis/context/AuthTokenContext";
import Paragraph from '../../UI/Paragraph';

const MembershipTypesSlider = ({currentMemberId}) => {

  const { token } = useContext(AuthContext);

  const { error, data: types } = useQuery({
    queryKey: ['listMembershipTypes', token],
    queryFn: ({signal}) => getListMembershipTypes(token, "no", signal)
  });

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: types?.length-1 || 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 3,
        settings: "unslick",
      },
    ],
  }

  return (
    <>
      <Slider {...settings} className="individual_slider mb-4">
          {types &&
            types['individual'].map((listMembershipType, index) => {
              const { id, name, logo, link, description } = listMembershipType;
              if(currentMemberId !== id){
                return (
                  <div className="col-4 px-2" key={index}>
                    <MembershipTypesList
                      className={"t-center-sm"}
                      id={id}
                      name={name}
                      logo={logo}
                      link={link}
                      description={description}
                      image={logo}
                    />
                  </div>
                )
              }
            })}
        </Slider>
      {error && <Paragraph className='empty'>there is no membership type to display</Paragraph>}
    </>
  );
};
export default MembershipTypesSlider;
