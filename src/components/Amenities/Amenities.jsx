import { useState } from 'react';
import AmenitiesHeader from './AmenitiesHeader';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import HoverVideoPlayer from "react-hover-video-player";
import Paragraph from '../UI/Paragraph';
import MonoBlockBlack from '../UI/MonoBlockBlack';

const Amenities = () => {

    const [amenities, setAmenities] = useState([])

    return (
        <>
            <AmenitiesHeader />
            <section className="feed">
                <div className="container-fluid">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
                    >
                        <Masonry columnsCount={4} gutter="30px" className="newsfeeds ">

                            {amenities && amenities.map((amenity, index) => {
                                const {id, content, title, banner, category_name} = amenity;
                                return (
                                    <HoverVideoPlayer
                                        key={index}
                                        videoSrc={banner}
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
                                )
                            })}

                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </section>
            <MonoBlockBlack />
        </>
    )

};
export default Amenities;