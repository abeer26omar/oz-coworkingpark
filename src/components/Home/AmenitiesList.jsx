import React, {useEffect, useState ,useRef} from 'react';
import Slider from "react-slick";
import Paragraph from '../UI/Paragraph';
import {amenitiesList} from '../../Data/AmenitiesList';
import HoverVideoPlayer from "react-hover-video-player";
const AmenitiesList = (props) => {


    const [AmenitiesList, setAmenitiesList] = useState(amenitiesList)
    const settings = {
        dots: false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
        <div className='row'>
        {AmenitiesList && AmenitiesList.map((AmenitiesList, index) =>{
               const {id,title, video} = AmenitiesList;
               return(
                <div className='col-xl-2 oz_service ' key={index} >
                       <HoverVideoPlayer
                          videoSrc={video}
                          overlayTransitionDuration={1000}
                          restartOnPaused
                          hoverOverlay={
                         <div className=''
                         style={{
                        backgroundColor: "#00000070",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                         display: "flex",
                         justifyContent: "center",
                        alignItems: "center",
                        transition:".7s"
                         }}                         
                         >
                                <Paragraph className='overlay_p'>{title}</Paragraph>
                            </div>               
                                    }
                                    
 
                         />
                </div>

               )
        })}
        </div>
        {!AmenitiesList && <Paragraph>there is no Amenities to display</Paragraph>}
        </>
    );

}
export default AmenitiesList;