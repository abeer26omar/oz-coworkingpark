import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { getListMembershipTypes } from "../../../apis/MembershipApi";
import MembershipTypesList from "./MembershipTypesList";
import { AuthContext } from "../../../apis/context/AuthTokenContext";

const MembershipTypesSlider = ({currentMemberId}) => {
  const [types, setTypes] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getMemebershipTypes = async () => {
      try {
        const result = await getListMembershipTypes(token, "no");
        setTypes(result["individual"]);
      } catch (err) {
        console.log(err);
      }
    };
    getMemebershipTypes();
  }, [token]);

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
  };
  return (
    <>
      <Slider {...settings} className="individual_slider">
        {types &&
          types.map((listMembershipType, index) => {
            const { id, name, logo, link, description } = listMembershipType;
            if(currentMemberId !== id){
              return (
                <div className="px-2" key={index}>
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
      {/* {isError && <Paragraph>there is no membership type to display</Paragraph>} */}
    </>
  );
};
export default MembershipTypesSlider;
